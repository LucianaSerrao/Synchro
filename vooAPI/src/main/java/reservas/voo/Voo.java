package reservas.voo;


import javax.persistence.*;

import lombok.Data;

@Data
@Entity
public class Voo {
	
	private @Id @GeneratedValue(strategy = GenerationType.SEQUENCE) Long id;
	private String nome;
	private String origem;
	private float valor;
	private String destino;
	private String dia;
	private String horario;
	private int num_vagas;
	private int vaga_ocupada;
	private int numVagaLivre;
	@ManyToOne
	Companhia companhia;
	
	public Voo() {
		
	}
	
	public Voo(String origem, float valor, String destino, String dia, String horario, int num_vagas, int vaga_ocupada, Companhia companhia) {
		this.origem = origem;
        this.valor = valor ;
        this.destino = destino;
        this.dia = dia;
        this.horario = horario;
        this.num_vagas = num_vagas;
        this.vaga_ocupada = vaga_ocupada;
        this.companhia = companhia;

        this.numVagaLivre = (this.num_vagas - this.vaga_ocupada);

        this.nome = this.companhia.getCode() + origem.substring(0,2) + destino.substring(0,2) + dia.substring(0,2).toUpperCase() + horario.substring(0,2);
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

	public String getOrigem() {
		return origem;
	}

	public void setOrigem(String origem) {
		this.origem = origem;
	}

	public float getValor() {
		return valor;
	}

	public void setValor(float valor) {
		this.valor = valor;
	}

	public String getDestino() {
		return destino;
	}

	public void setDestino(String destino) {
		this.destino = destino;
	}

	public String getDia() {
		return dia;
	}

	public void setDia(String dia) {
		this.dia = dia;
	}

	public String getHorario() {
		return horario;
	}

	public void setHorario(String horario) {
		this.horario = horario;
	}

	public int getNum_vagas() {
		return num_vagas;
	}

	public void setNum_vagas(int num_vagas) {
		this.num_vagas = num_vagas;
	}

	public int getVaga_ocupada() {
		return vaga_ocupada;
	}

	public void setVaga_ocupada(int vaga_ocupada) {
		this.vaga_ocupada = vaga_ocupada;
	}

	public int getNumVagaLivre() {
		return numVagaLivre;
	}

	public void setNumVagaLivre(int numVagaLivre) {
		this.numVagaLivre = numVagaLivre;
	}

	public Companhia getCompanhia() {
		return companhia;
	}

	public void setCompanhia(Companhia companhia) {
		this.companhia = companhia;
	}

}
