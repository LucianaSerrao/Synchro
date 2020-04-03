package reservas.voo;

import org.hibernate.ResourceClosedException;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CompanhiaController {

        private final CompanhiaRepository Comp_repository;
        private final CompanhiaResouceAssembler Comp_assembler;

        CompanhiaController(CompanhiaRepository Comp_repository,CompanhiaResouceAssembler Comp_assembler){
            this.Comp_repository = Comp_repository;
            this.Comp_assembler = Comp_assembler;
        }

        @GetMapping(value = "/companhias",produces = "application/json; charset=UTF-8")
        public CollectionModel<EntityModel<Companhia>> AllCompanhias(){

            List<EntityModel<Companhia>> companhias = Comp_repository.findAll().stream()
                .map(companhia -> new EntityModel<>(companhia,
                linkTo(methodOn(CompanhiaController.class).one(companhia.getId())).withSelfRel(),
                linkTo(methodOn(CompanhiaController.class).AllCompanhias()).withRel("Companhias"))).collect(Collectors.toList());

            return new CollectionModel<>(companhias,linkTo(methodOn(CompanhiaController.class).AllCompanhias()).withSelfRel());

        }


        @GetMapping(value = "/companhias/{id_companhia}",produces = "application/json; charset=UTF-8")
        public EntityModel<Companhia> one(@PathVariable Long id_companhia){
            Companhia companhia = Comp_repository.findById(id_companhia).orElseThrow(()-> new CompanhiaNotFoundException(id_companhia));

            return Comp_assembler.toModel(companhia);
        }
}