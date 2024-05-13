package com.shoeStore.ShoeStore.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shoeStore.ShoeStore.interfaceService.IProductosService;
import com.shoeStore.ShoeStore.interfaceService.IVentaService;
import com.shoeStore.ShoeStore.models.estado;
import com.shoeStore.ShoeStore.models.productos;

@RequestMapping("/api/v1/cliente")
@RestController
@CrossOrigin
public class ventacontroller {

/*
	@Autowired
	   
	  private IVentaService ventaService;
		
	@PostMapping("/")
	public ResponseEntity<Object> save(@ModelAttribute("venta") productos venta) {
	 
	              
	        ventaService.save(venta);
			return new ResponseEntity<>(venta,HttpStatus.OK);
		}
		
		@GetMapping("/")
		public ResponseEntity<Object>findAll(){
			var ListaVenta = ventaService.findAll();
			return new ResponseEntity<>(ListaVenta, HttpStatus.OK);
		}
		
		//filtro
		@GetMapping("/busquedafiltro/{filtro}")
		public ResponseEntity<Object>findFiltro(@PathVariable String filtro){
			var Listaproducto = ventaService.filtroVenta(filtro);
			return new ResponseEntity<>(Listaproducto, HttpStatus.OK);
		}
		
		//@PathVariable recibe una variable por el enlace
		
		@GetMapping("/{id_productos}")
		public ResponseEntity<Object> findOne ( @PathVariable String id_venta ){
			var ventas= ventaService.findOne(id_venta);
			return new ResponseEntity<>(ventas, HttpStatus.OK);
		}
		@DeleteMapping("/{id_venta}")
		public ResponseEntity<Object> delete(@PathVariable String id) {
		    Optional<venta> optionalVenta = ventaService.findOne(id);
		    if (optionalVenta.isPresent()) {
		        productos productos = optionalVenta.get();
		        if (productos.getEstado() == estado.Activo) {
		        	productos.setEstado(estado.Desactivado);
		        	optionalVenta.save(productos);
		            return new ResponseEntity<>("Se ha desactivado correctamente", HttpStatus.OK);
		        } else {
		            return new ResponseEntity<>(" ya está desactivado", HttpStatus.BAD_REQUEST);
		        }
		    } else {
		        return new ResponseEntity<>("No se ha encontrado el producto", HttpStatus.BAD_REQUEST);
		    }
		}



		
			 
		@PutMapping("/{id_producto}")
		public ResponseEntity<Object> update(@PathVariable String id_venta, @ModelAttribute("venta") productos ventaUpdate) {
		    
		    // Verificar si hay campos vacíos
		    
		    if (ventaUpdate.contieneCamposVacios()) {
		        return new ResponseEntity<>("Todos los campos son obligatorios", HttpStatus.BAD_REQUEST);
		    }

		    var venta = ventaService.findOne(id_venta).orElse(null);
		    if (venta != null) {
		    	venta.setNombre_del_producto(ventaUpdate.getNombre_del_producto());
		    	venta.setDescripcion(ventaUpdate.getDescripcion());
		    	venta.setCantidad(ventaUpdate.getCantidad());
		    	venta.setPrecio(ventaUpdate.getPrecio());
		    	venta.setPorcentaje_iva(ventaUpdate.getPorcentaje_iva());
		    	venta.setPorcentaje_descuento(ventaUpdate.getPorcentaje_descuento());
		    	venta.setEstado(productosUpdate.getEstado());

		        productosService.save(ventaUpdate);
		        return new ResponseEntity<>("Guardado", HttpStatus.OK);
		    } else {
		        return new ResponseEntity<>("Error: producto no encontrado", HttpStatus.BAD_REQUEST);
		    }
		}
*/
}
