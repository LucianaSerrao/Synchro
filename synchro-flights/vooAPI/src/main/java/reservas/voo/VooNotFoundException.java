package reservas.voo;

@SuppressWarnings("serial")
class VooNotFoundException extends RuntimeException {

    VooNotFoundException(Long id) {
        super("Não foi possivel encontrar um Voo com o ID: " + id );
    }
}