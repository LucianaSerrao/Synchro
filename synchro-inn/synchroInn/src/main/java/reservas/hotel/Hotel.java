package reservas.hotel;

import javax.persistence.*;

@Entity
public class Hotel {

	private @Id @GeneratedValue(strategy = GenerationType.SEQUENCE) Long id;
	private String nome;
	private String UF;
	private int estrela;
	
	public Hotel() {
		// TODO Auto-generated constructor stub
		
	}
	
	public Hotel(String nome, String UF, int estrela) {
		this.nome = nome;
		this.estrela = estrela;
		this.UF = UF;
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

	public String getUF() {
		return UF;
	}

	public void setUF(String uF) {
		UF = uF;
	}

	public int getEstrela() {
		return estrela;
	}

	public void setEstrela(int estrela) {
		this.estrela = estrela;
	}

}
