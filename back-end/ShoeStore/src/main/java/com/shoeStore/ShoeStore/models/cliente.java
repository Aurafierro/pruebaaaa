package com.shoeStore.ShoeStore.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class cliente {

	

	@Id
	@GeneratedValue(strategy=GenerationType.UUID)
	@Column(name="id_liente", nullable= false, length = 36)
	private String id_cliente;

	@Column(name="tipo_documento", nullable= false, length = 20)
	private tipo_documento tipo_documento;

	@Column(name="identificacion", nullable= false, length = 10)
	private String identificacion;

	@Column(name="nombre", nullable= false, length = 45)
	private String nombre;

	@Column(name="apellido", nullable= true, length = 45)
	private String apellido;

	@Column(name="telefono", nullable= false, length = 13)
	private String telefono;

	@Column(name="ciudad", nullable= false, length = 45)
	private String ciudad;
	
	@Column(name="direccion", nullable= false, length = 45)
	private String direccion;
	

	@Column(name="corrreo", nullable= false, length = 45)
	private String correo;
	
	
	@Column(name="estado", nullable= false, length =10)
	private estado estado;


	public cliente() {
		super();
	}


	public cliente(String id_cliente, com.shoeStore.ShoeStore.models.tipo_documento tipo_documento,
			String identificacion, String nombre, String apellido, String telefono, String ciudad, String direccion,
			String correo, com.shoeStore.ShoeStore.models.estado estado) {
		super();
		this.id_cliente = id_cliente;
		this.tipo_documento = tipo_documento;
		this.identificacion = identificacion;
		this.nombre = nombre;
		this.apellido = apellido;
		this.telefono = telefono;
		this.ciudad = ciudad;
		this.direccion = direccion;
		this.correo = correo;
		this.estado = estado;
	}


	public String getId_cliente() {
		return id_cliente;
	}


	public void setId_cliente(String id_cliente) {
		this.id_cliente = id_cliente;
	}


	public tipo_documento getTipo_documento() {
		return tipo_documento;
	}


	public void setTipo_documento(tipo_documento tipo_documento) {
		this.tipo_documento = tipo_documento;
	}


	public String getIdentificacion() {
		return identificacion;
	}


	public void setIdentificacion(String identificacion) {
		this.identificacion = identificacion;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getApellido() {
		return apellido;
	}


	public void setApellido(String apellido) {
		this.apellido = apellido;
	}


	public String getTelefono() {
		return telefono;
	}


	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}


	public String getCiudad() {
		return ciudad;
	}


	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}


	public String getDireccion() {
		return direccion;
	}


	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}


	public String getCorreo() {
		return correo;
	}


	public void setCorreo(String correo) {
		this.correo = correo;
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
