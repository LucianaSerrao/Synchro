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
        public List<Companhia> allFlightCompanies(){
		List<Companhia> companhias = Comp_repository.findAll();	
	return companhias;
	
        }


        @GetMapping(value = "/companhias/{id_companhia}",produces = "application/json; charset=UTF-8")
        public EntityModel<Companhia> one(@PathVariable Long id_companhia){
            Companhia companhia = Comp_repository.findById(id_companhia).orElseThrow(()-> new CompanhiaNotFoundException(id_companhia));

            return Comp_assembler.toModel(companhia);
        }
}
