
package reservas.voo;

@SuppressWarnings("serial")
class ClienteNotFoundException extends RuntimeException {

    ClienteNotFoundException(Long id) {
        super("Não é possivel encontrar um cliente com o ID: " + id);
    }
}