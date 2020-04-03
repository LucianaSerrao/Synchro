package reservas.voo;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.CollectionModel;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class VooController {

        private final VooRepository V_repository;
        private final VooResourceAssembler V_assembler;

        VooController(VooRepository V_repository,VooResourceAssembler V_assembler)
        {
            this.V_repository = V_repository;
            this.V_assembler = V_assembler;
        }


        @GetMapping(value = "/voos",produces = "application/json; charset=UTF-8")
        public CollectionModel<EntityModel<Voo>> AllVoos(@RequestParam (value = "Origem",defaultValue = "All") String Origem, @RequestParam (value = "Destino",defaultValue = "All") String Destino, @RequestParam (value = "numVagaLivre", defaultValue = "0")int numVagaLivre )
        {
            List<Voo> voos;

            List<EntityModel<Voo>> Voo_resource;

                    if((Origem.equals("All")) && (Destino.equals("All"))){

                        voos = V_repository.findVoosByNumVagaLivre(numVagaLivre);
                    }
                       else if (Origem.equals("All")){

                        voos = V_repository.findVoosByDestinoAndNumVagaLivre(Destino, numVagaLivre);
                    }
                       else if (Destino.equals("All")){
                        voos = V_repository.findVoosByOrigemAndNumVagaLivre(Origem,numVagaLivre);
                    }
                       else{
                        voos = V_repository.findVoosByOrigemAndDestinoAndNumVagaLivre(Origem, Destino, numVagaLivre);
                    }

             Voo_resource = voos.stream().map(V_assembler::toModel).collect(Collectors.toList());

            return new CollectionModel<>(Voo_resource,linkTo(methodOn(VooController.class).AllVoos(Origem,Destino,numVagaLivre)).withSelfRel());

        }

        @GetMapping(value = "/voos/{id_voo}",produces = "application/json; charset=UTF-8")
        public EntityModel<Voo> one(@PathVariable Long Voo_Id){

            Voo voo = V_repository.findById(Voo_Id).orElseThrow(()-> new VooNotFoundException(Voo_Id));

            return V_assembler.toModel(voo);
        }

        @GetMapping(value = "/companhias/{Companhia_Id}/voos",produces = "application/json; charset=UTF-8")
        public  CollectionModel<EntityModel<Voo>> AllVooByCompanhia(@PathVariable Long Companhia_Id){

            List<Voo> voos = V_repository.findVoosByCompanhia_Id(Companhia_Id);
            List<EntityModel<Voo>> Voo_Resource;

            Voo_Resource = voos.stream().map(V_assembler::toModel).collect(Collectors.toList());

            return new CollectionModel<>(Voo_Resource, linkTo(methodOn(ClienteController.class).allClienteByVoo(Companhia_Id)).withSelfRel());

        }

}