package reservas.hotel;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public class ClienteRepository extends JpaRepository<Cliente, Long> {
	List<Cliente> findClienteByQuartoId(Long id_quarto);
	
	Cliente findClienteByIdAndQuartoID(Long id_cliente, Long id_quarto);

}
