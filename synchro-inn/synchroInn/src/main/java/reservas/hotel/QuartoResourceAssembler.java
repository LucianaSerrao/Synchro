
package reservas.hotel;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

@Component
public class QuartoResourceAssembler implements RepresentationModel<Quarto, EntityModel<Quarto>>{

    
    public EntityModel<Quarto> toModel(Quarto quarto){
        return new EntityModel<Quarto>(quarto,linkTo(methodOn(QuartoController.class).one(quarto.getId())).withSelfRel(),
                                           linkTo(methodOn(QuartoController.class).AllQuartos()).withRel("Quartos"));
    }

	private Object linkTo(CollectionModel<EntityModel<Quarto>> allQuartos) {
		// TODO Auto-generated method stub
		return null;
	}

	private Object linkTo(EntityModel<Quarto> one) {
		// TODO Auto-generated method stub
		return null;
	}

	private QuartoController methodOn(Class<QuartoController> class1) {
		// TODO Auto-generated method stub
		return null;
	}


}