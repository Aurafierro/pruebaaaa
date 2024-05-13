package com.shoeStore.ShoeStore.models;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class productos {

	
	@Id
	@GeneratedValue(strategy=GenerationType.UUID)
	@Column(name="id_producto", nullable= false, length = 36)
	private String id_producto;
	
	
	@Column(name="nombre_del_producto", nullable= true, length = 45)
	private String nombre_del_producto;
	
	@Column(name="descripcion", nullable= false, length = 45)
	private String descripcion;

	@Column(name="cantidad", nullable= false)
	private int cantidad;
	
	@Column (name = "precio", nullable = false, precision = 9, scale = 2)
	private BigDecimal precio;

	@Column(name="porcentaje_iva", nullable= false, length = 20)
	private int porcentaje_iva;
	
	@Column(name="porcentaje_descuento", nullable= false, length = 20)
	private int porcentaje_descuento;

	@Enumerated(EnumType.STRING)
	@Column(name="estado", nullable= false, length =10)
	private estado estado;

	
	

	public productos() {
		super();
	}




	public productos(String id_producto, String nombre_del_producto, String descripcion, int cantidad,
			BigDecimal precio, int porcentaje_iva, int porcentaje_descuento,
			com.shoeStore.ShoeStore.models.estado estado) {
		super();
		this.id_producto = id_producto;
		this.nombre_del_producto = nombre_del_producto;
		this.descripcion = descripcion;
		this.cantidad = cantidad;
		this.precio = precio;
		this.porcentaje_iva = porcentaje_iva;
		this.porcentaje_descuento = porcentaje_descuento;
		this.estado = estado;
	}




	public String getId_producto() {
		return id_producto;
	}




	public void setId_producto(String id_producto) {
		this.id_producto = id_producto;
	}




	public String getNombre_del_producto() {
		return nombre_del_producto;
	}




	public void setNombre_del_producto(String nombre_del_producto) {
		this.nombre_del_producto = nombre_del_producto;
	}




	public String getDescripcion() {
		return descripcion;
	}




	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}




	public int getCantidad() {
		return cantidad;
	}




	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}




	public BigDecimal getPrecio() {
		return precio;
	}




	public void setPrecio(BigDecimal precio) {
		this.precio = precio;
	}




	public int getPorcentaje_iva() {
		return porcentaje_iva;
	}




	public void setPorcentaje_iva(int porcentaje_iva) {
		this.porcentaje_iva = porcentaje_iva;
	}




	public int getPorcentaje_descuento() {
		return porcentaje_descuento;
	}




	public void setPorcentaje_descuento(int porcentaje_descuento) {
		this.porcentaje_descuento = porcentaje_descuento;
	}




	public estado getEstado() {
		return estado;
	}




	public void setEstado(estado estado) {
		this.estado = estado;
	}




	public boolean contieneCamposVacios() {
		// TODO Auto-generated method stub
		return false;
	}

	
}
