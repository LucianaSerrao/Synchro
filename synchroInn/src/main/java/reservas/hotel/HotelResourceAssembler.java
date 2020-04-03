package reservas.hotel;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.RepresentationModelAssembler;
import org.springframework.stereotype.Component;


@Component
public class HotelResourceAssembler implements RepresentationModel<Hotel, EntityModel<Hotel>> {
	
	
	public EntityModel<Hotel> toModel(Hotel hotel){
		return new EntityModel<>(hotel, linkTo(methodOn(HotelController.class).one(hotel.getId())).withSelfRel(),
				linkTo(methodOn(HotelController.class).AllHoteis()).withRel("Hoteis"));
	}

	private Object linkTo(CollectionModel<EntityModel<Hotel>> allHoteis) {
		// TODO Auto-generated method stub
		return null;
	}

	private Object linkTo(EntityModel<Hotel> one) {
		// TODO Auto-generated method stub
		return null;
	}

	private HotelController methodOn(Class<HotelController> class1) {
		// TODO Auto-generated method stub
		return null;
	}

	public reservas.hotel.EntityModel<Cliente> toModel(Cliente cliente) {
		// TODO Auto-generated method stub
		return null;
	}

	

}
