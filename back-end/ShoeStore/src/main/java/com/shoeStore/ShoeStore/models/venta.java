package com.shoeStore.ShoeStore.models;

import java.time.LocalDate;
import java.util.Date;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity(name="venta")
public class venta {

	 @Id
	    @GeneratedValue(strategy = GenerationType.UUID)
	    @Column(name = "id_venta", nullable = false, length = 36)
	    private String id_venta; 

	    @Column(name = "total", nullable = false, length = 45)
	    private String total; 

	    @Column (name = "fecha_venta", nullable = false)
	    private LocalDate fecha_venta;

	    @Column(name = "estado", nullable = false, length = 10)
	    private estado estado; 


	    @ManyToOne
	    @JoinColumn(name="id_cliente")
	    private cliente cliente;


		public venta() {
			super();
		}


		public venta(String id_venta, String total, LocalDate fecha_venta, com.shoeStore.ShoeStore.models.estado estado,
				com.shoeStore.ShoeStore.models.cliente cliente) {
			super();
			this.id_venta = id_venta;
			this.total = total;
			this.fecha_venta = fecha_venta;
			this.estado = estado;
			this.cliente = cliente;
		}


		public String getId_venta() {
			return id_venta;
		}


		public void setId_venta(String id_venta) {
			this.id_venta = id_venta;
		}


		public String getTotal() {
			return total;
		}


		public void setTotal(String total) {
			this.total = total;
		}


		public LocalDate getFecha_venta() {
			return fecha_venta;
		}


		public void setFecha_venta(LocalDate fecha_venta) {
			this.fecha_venta = fecha_venta;
		}


		public estado getEstado() {
			return estado;
		}


		public void setEstado(estado estado) {
			this.estado = estado;
		}


		public cliente getCliente() {
			return cliente;
		}


		public void setCliente(cliente cliente) {
			this.cliente = cliente;
		}


  

	
	
}
