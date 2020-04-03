package reservas.voo;

import javax.persistence.*;

@Entity
public class Cliente {
	
	private @Id @GeneratedValue(strategy = GenerationType.SEQUENCE) Long id;
	private String nome;
	private int idade;
	private String sexo;
	@ManyToOne
	private Voo voo;
	
	
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
	public int getIdade() {
		return idade;
	}
	public void setIdade(int idade) {
		this.idade = idade;
	}
	public String getSexo() {
		return sexo;
	}
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	public Voo getVoo() {
		return voo;
	}
	public void setVoo(Voo voo) {
		this.voo = voo;
	}

}
