package reservas.voo;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

@Component
class CompanhiaResouceAssembler implements  org.springframework.hateoas.server.RepresentationModelAssembler<Companhia, EntityModel<Companhia>> {
    @Override
    public EntityModel<Companhia> toModel (Companhia companhia){

        return new EntityModel<>(companhia,linkTo(methodOn(CompanhiaController.class).one(companhia.getId())).withSelfRel(),
                linkTo(methodOn(CompanhiaController.class).AllCompanhias()).withRel("Companhias"));
    }
}