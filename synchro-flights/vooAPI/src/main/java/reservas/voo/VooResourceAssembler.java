package reservas.voo;


import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

@Component
class VooResourceAssembler implements org.springframework.hateoas.server.RepresentationModelAssembler<Voo,EntityModel<Voo>> {
    @Override
    public EntityModel<Voo> toModel(Voo voo){
        return new EntityModel<>(voo,linkTo(methodOn(VooController.class).one(voo.getId())).withSelfRel(),
                linkTo(methodOn(VooController.class).AllVoos("Origem","Destino",0)).withRel("Voos"));
    }

}