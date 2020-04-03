package reservas.hotel;

import org.hibernate.ResourceClosedException;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;


@RestController
public class HotelController {

        private final HotelRepository hRepository;
        private final HotelResourceAssembler hAssembler;

        HotelController(HotelRepository hRepository, HotelResourceAssembler hAssembler){
            this.hRepository = hRepository;
            this.hAssembler = hAssembler;
        }
        @CrossOrigin(origins = "http://localhost:3000")
        @GetMapping(value = "/hoteis",produces = "application/json; charset=UTF-8")
        public CollectionModel<EntityModel<Hotel>> AllHoteis(){

            List<EntityModel<Hotel>> hoteis = hRepository.findAll().stream()
                    .map(hotel -> new EntityModel<>(hotel,
                            linkTo(methodOn(HotelController.class).one(hotel.getId())).withSelfRel(),
                            linkTo(methodOn(HotelController.class).AllHoteis()).withRel("Hoteis"))).collect(Collectors.toList());

            return new CollectionModel<>(hoteis,linkTo(methodOn(HotelController.class).AllHoteis()).withSelfRel());
        }

        private Object linkTo(EntityModel<Hotel> one) {
			// TODO Auto-generated method stub
			return null;
		}
		private Object linkTo(CollectionModel<EntityModel<Hotel>> allHoteis) {
			// TODO Auto-generated method stub
			return null;
		}
		private HotelController methodOn(Class<HotelController> class1) {
			// TODO Auto-generated method stub
			return null;
		}
		@GetMapping(value = "/hoteis/{id_hotel}",produces = "application/json; charset=UTF-8")
        public EntityModel<Hotel> one(@PathVariable Long id_hotel){

            Hotel hoteis = hRepository.findById(id_hotel).orElseThrow(()-> new HotelNotFoundException(id_hotel));

            return hAssembler.toModel(hoteis);

        }

}