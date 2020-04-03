package reservas.hotel;

public class ClienteNotFoundException extends RunTimeException {
	
	ClienteNotFoundException(Long id_cliente){
		
		super("Não existe cliente com esse ID:" + id_cliente);
	}

}
