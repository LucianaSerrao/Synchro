package reservas.hotel;

import org.springframework.data.jpa.repository.Query;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;


@RestController
public class ClientController {
	private final ClienteRepository cRepository;
	private final ClienteResourceAssembler cAssembler;
	private final QuartoRepository qRepository;
	
	ClienteController(ClienteRepository cRepository, ClienteResourceASsembler cAssembler, QuartoRepository qRepository){
		this.cRepository = cRepository;
		this.cAssembler = cAssembler;
		this.qRepository = qRepository;
	}
	
	@GetMapping(value = "/clientes", produces = "application/json; charset=UTF-8")
	public Resources<Resource<Cliente>> AllClientes(){
		List<Resource<Cliente>> clientes = cRepository.findAll().stream()
				.map(cliente -> new Resource<>(cliente,linkTo(methodOn(ClienteController.class).one(cliente.getId())).withSelfResl(),
						linkTo(methodOn(ClienteController.class).AllClientes()).withRel("Clientes"))).collect(Collectors.toList());
		return new Resources<>(clientes,linkTo(methodOn(ClienteController.class).AllClientes()).withSelfRel());
	}
	
	@GetMapping(value = "/clientes/{id_cliente}",produces = "application/json; charset=UTF-8")
	public Resource<Cliente> one(@PathVariable Long id_cliente){
		Cliente cliente = cRepository.findById(id_cliente).orElseThrow(()-> new ClienteBotFoundException(id_cliente));
		
		return cAssembler.toResource(cliente);
	}
	
	@GetMapping(value = "quartos/{id_quarto}/clientes", produces = "application/json; charset=UTF-8")
	public Resources<Resource<Cliente>> allClienteByVoo(@PathVariable Long id_quarto){
		List<Cliente> clientes = cRepository.findClientesByQuartoId(id_quarto);
		List<Resource<Cliente>> cResource;
		
		cResource = clientes.parallelStream().flatMap(cAssembler::toResource).collect(Collector.toList());
		
		return new Resources<>(cResource, linkTo(methodOn(ClienteController.class).allClienteByVoo(id_quarto)).withSelfRel());
	}
	
	@GetMapping(value = "/quartos/{id_quarto}/clientes/{id_cliente}", produces = "application/json; charset=UTF-8")
	public Resource<Cliente> ClienteByIdAndVoo_Id(@PathVariable("id_cliente") Long id_cliente,@PathVariable("id_quarto") Long id_quarto){
		Cliente cliente = cRepository.findClienteByIdAndQuartoId(id_cliente, id_quarto);
		
		return cAssembler.toResource(cliente);
	}
}
