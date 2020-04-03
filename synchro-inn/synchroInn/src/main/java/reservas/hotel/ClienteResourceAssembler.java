
package reservas.hotel;

import java.lang.annotation.Annotation;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

@SuppressWarnings("rawtypes")
@Component
class ClienteResourceAssembler implements RepresentationModel{

    public EntityModel<Cliente> toModel(Cliente cliente){
        return new EntityModel<>(cliente, (linkTo(methodOn(ClientController.class).one(cliente.getId()))).withSelfRel(),
                                       (linkTo(methodOn(ClientController.class).AllClientes())).withRel("Clientes"));
    }

	private Object linkTo(EntityModel<Cliente> one) {
		// TODO Auto-generated method stub
		return null;
	}

	private Object linkTo(CollectionModel<EntityModel<Cliente>> collectionModel) {
		// TODO Auto-generated method stub
		return null;
	}

	private ClientController methodOn(Class<ClientController> class1) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Class<? extends Annotation> annotationType() {
		// TODO Auto-generated method stub
		return null;
	}
}