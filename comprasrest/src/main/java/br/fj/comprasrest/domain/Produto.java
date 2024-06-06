package br.fj.comprasrest.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Produto {
	
	int id;
	String descricao;	
	Float preco;
	String imagem;
	String categoria;
	
	@Id
	@Column(name = "ID")
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	@Column(name = "DESCRICAO")
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	@Column(name = "PRECO")
	public Float getPreco() {
		return preco;
	}
	public void setPreco(Float preco) {
		this.preco = preco;
	}
	@Override
	public String toString() {
		return "Produto [id=" + id + ", descricao=" + descricao + ", preco=" + preco + "]";
	}
	
	@Column(name = "IMAGEM")
	public String getImagem() {
		return imagem;
	}
	public void setImagem(String imagem) {
		this.imagem = imagem;
	}
	
	@Column(name = "CATEGORIA")
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
}
