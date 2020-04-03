package reservas.voo;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

@Component
class ClienteResourceAssembler implements org.springframework.hateoas.server.RepresentationModelAssembler<Cliente,EntityModel<Cliente>> {

    @Override
    public EntityModel<Cliente> toModel(Cliente cliente){
        return new EntityModel<>(cliente, linkTo(methodOn(ClienteController.class).one(cliente.getId())).withSelfRel(),
                linkTo(methodOn(ClienteController.class).AllClientes()).withRel("Clientes"));
    }
}