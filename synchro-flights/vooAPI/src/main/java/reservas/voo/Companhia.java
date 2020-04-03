package reservas.voo;

import javax.persistence.*;

@Entity
public class Companhia {
	
	private @Id @GeneratedValue(strategy = GenerationType.SEQUENCE) Long id;
	private String nome;
	private String code;
	
	public Companhia() {
		
	}
	
	public Companhia(String nome, String code) {
		this.nome = nome;
		this.code = code;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}
	
	
}
