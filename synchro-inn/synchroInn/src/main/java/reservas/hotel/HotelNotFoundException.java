package reservas.hotel;

public class HotelNotFoundException extends RunTimeException {

	HotelNotFoundException(Long id_hotel) {
		super("Não existe hotel com o ID:" + id_hotel);
	}

}
