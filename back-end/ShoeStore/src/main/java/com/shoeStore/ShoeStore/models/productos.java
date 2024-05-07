package com.shoeStore.ShoeStore.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class productos {

	
	@Id
	@GeneratedValue(strategy=GenerationType.UUID)
	@Column(name="id_productos", nullable= false, length = 36)
	private String id_productos;
	
	
	@Column(name="nombre_del_producto", nullable= false, length = 20)
	private String nombre_del_producto;
	
	@Column(name="descripcion", nullable= false, length = 20)
	private String descripcion;

	@Column(name="cantidad", nullable= false, length = 20)
	private int cantidad;
	
	@Column(name="precio", nullable= false, length = 20)
	private double precio;
	
	@Column(name="porcentaje_iva", nullable= false, length = 20)
	private int porcentaje_iva;
	
	@Column(name="porcentaje_descuento", nullable= false, length = 20)
	private int porcentaje_descuento;

	public productos() {
		super();
	}

	public productos(String id_productos, String nombre_del_producto, String descripcion, int cantidad, double precio,
			int porcentaje_iva, int porcentaje_descuento) {
		super();
		this.id_productos = id_productos;
		this.nombre_del_producto = nombre_del_producto;
		this.descripcion = descripcion;
		this.cantidad = cantidad;
		this.precio = precio;
		this.porcentaje_iva = porcentaje_iva;
		this.porcentaje_descuento = porcentaje_descuento;
	}

	public String getId_productos() {
		return id_productos;
	}

	public void setId_productos(String id_productos) {
		this.id_productos = id_productos;
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

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
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
	
	
}
