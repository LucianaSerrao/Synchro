package reservas.voo;

@SuppressWarnings("serial")
public class CompanhiaNotFoundException extends RuntimeException{
	
	CompanhiaNotFoundException(Long id){
		super("Não é possível encontrar uma companhia com o ID:" + id);
	}

}
