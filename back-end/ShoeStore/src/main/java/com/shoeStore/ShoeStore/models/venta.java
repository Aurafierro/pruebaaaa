package com.shoeStore.ShoeStore.models;

import java.util.Date;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class venta {

	@Id
	@GeneratedValue(strategy=GenerationType.UUID)
	@Column(name="id_venta", nullable= false, length = 36)
	private String id_venta;

	@ManyToOne
	@JoinColumn (name="id_cliente")
	private cliente cliente;
	
	
	@Column(name="total", nullable= false, length = 45)
	private String total;

	@Column(name="estado", nullable= false, length = 11)
	private estado_venta estado;
	
	@Column(name="fecha_venta", nullable=false)
	private Date fecha_venta;

	public venta() {
		super();
	}

	public venta(String id_venta, com.shoeStore.ShoeStore.models.cliente cliente, String total, estado_venta estado,
			Date fecha_venta) {
		super();
		this.id_venta = id_venta;
		this.cliente = cliente;
		this.total = total;
		this.estado = estado;
		this.fecha_venta = fecha_venta;
	}

	public String getId_venta() {
		return id_venta;
	}

	public void setId_venta(String id_venta) {
		this.id_venta = id_venta;
	}

	public cliente getCliente() {
		return cliente;
	}

	public void setCliente(cliente cliente) {
		this.cliente = cliente;
	}

	public String getTotal() {
		return total;
	}

	public void setTotal(String total) {
		this.total = total;
	}

	public estado_venta getEstado() {
		return estado;
	}

	public void setEstado(estado_venta estado) {
		this.estado = estado;
	}

	public Date getFecha_venta() {
		return fecha_venta;
	}

	public void setFecha_venta(Date fecha_venta) {
		this.fecha_venta = fecha_venta;
	}
	
	
}
