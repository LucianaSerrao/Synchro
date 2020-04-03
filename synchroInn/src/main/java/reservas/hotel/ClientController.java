package reservas.hotel;

import org.springframework.data.jpa.repository.Query;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.RepresentationModel;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ClientController
{
    private final ClienteRepository cRepository;
    private final ClienteResourceAssembler cAssembler;
    private final QuartoRepository qRepository;

    ClientController(ClienteRepository cRepository, ClienteResourceAssembler cAssembler,QuartoRepository qRepository)
    {
        this.cRepository = cRepository;
        this.cAssembler = cAssembler;
        this.qRepository = qRepository;
    }

    @GetMapping(value = "/clientes",produces = "application/json; charset=UTF-8")
    public CollectionModel<EntityModel<Cliente>> AllClientes()
    {
    	
        List<EntityModel<Cliente>> clientes = cRepository.findAll().stream()
                .map(cliente -> new EntityModel<>(cliente,linkTo(methodOn(ClientController.class).one(cliente.getId())).withSelfRel(),
                        linkTo(methodOn(ClientController.class).AllClientes()).withRel("Clientes"))).collect(Collectors.toList());

        return new CollectionModel<>(clientes,linkTo(methodOn(ClientController.class).AllClientes()).withSelfRel());
    }

    private Link linkTo(CollectionModel<EntityModel<Cliente>> allClientes) {
		// TODO Auto-generated method stub
		return null;
	}

	private Object linkTo(EntityModel<Cliente> entityModel) {
		// TODO Auto-generated method stub
		return null;
	}

	private ClientController methodOn(Class<ClientController> class1) {
		// TODO Auto-generated method stub
		return null;
	}

	@GetMapping(value = "/clientes/{id_cliente}",produces = "application/json; charset=UTF-8")
    public EntityModel<Cliente> one(@PathVariable Long id_cliente)
    {

        Cliente cliente = cRepository.findById(id_cliente).orElseThrow(()-> new ClienteNotFoundException(id_cliente));

        return cAssembler.toModel(cliente);
    }

    @GetMapping(value = "quartos/{id_quarto}/clientes",produces = "application/json; charset=UTF-8")
    public CollectionModel<EntityModel<Cliente>> allClienteByVoo(@PathVariable Long id_quarto)
    {
        List<Cliente> clientes = cRepository.findClienteByQuartoId(id_quarto);
        List<EntityModel<Cliente>> cResource;

        cResource = clientes.stream().map(cAssembler::toModel).collect(Collectors.toList());

        return new CollectionModel<>(cResource, linkTo(methodOn(ClientController.class).allClienteByVoo(id_quarto)).withSelfRel());

    }

    @GetMapping(value = "/quartos/{id_quarto}/clientes/{id_cleinte}",produces = "application/json; charset=UTF-8")
    public EntityModel<Cliente> ClienteByIdAndVoo_Id(@PathVariable("id_cleinte") Long id_cleinte,@PathVariable("id_quarto") Long id_quarto)
    {
        Cliente cliente = cRepository.findClienteByIdAndQuartoID(id_cleinte, id_quarto);

        return cAssembler.toModel(cliente);
    }


}