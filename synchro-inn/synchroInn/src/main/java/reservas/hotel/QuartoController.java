package reservas.hotel;

import org.hibernate.ResourceClosedException;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.naming.spi.ResolveResult;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;



public class QuartoController {
	
	private QuartoRepository qRepository;
	private QuartoResourceAssembler qAssembler;
	
	QuartoController(QuartoRepository qRepository, QuartoResourceAssembler qAssembler){
		this.qAssembler = qAssembler;
		this.qRepository = qRepository;
	}
	
	@GetMapping(value = "/quartos", produces = "application/json; charset=UTF-8")
	public CollectionModel<EntityModel<Quarto>> AllQuartos(){
		
		List<EntityModel<Quarto>> quartos = qRepository.findAll().stream().map(quarto ->new EntityModel<>(quarto, linkTo(methodOn(QuartoController.class).one(quarto.getId())).withSelfRel(),
				linkTo(methodOn(QuartoController.class).AllQuartos()).withRel("Quartos"))).collect(Collectors.toList());
		return new CollectionModel<>(quartos, linkTo(methodOn(QuartoController.class).AllQuartos()).withSelfRel());
	}
	
	@GetMapping(value = "/quartos/{id_quarto}", produces = "application/json; charset=UTF-8")
	public EntityModel<Quarto> one(@PathVariable Long id_quarto){
		
		Quarto quarto = qRepository.findById(id_quarto).orElseThrow(()-> new QuartoNotFoundException(id_quarto));
		
		return qAssembler.toModel(quarto);
	}
}
