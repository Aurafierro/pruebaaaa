package com.shoeStore.ShoeStore.controller;

import java.util.List;
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

import com.shoeStore.ShoeStore.models.estado;
import com.shoeStore.ShoeStore.models.productos;


@RequestMapping("/api/v1/producto")
@RestController
@CrossOrigin
public class productoscontroller {

	@Autowired
	   
	  private IProductosService productosService;
		
	@PostMapping("/")
	public ResponseEntity<Object> save(@ModelAttribute("productos") productos productos) {
		    
		   
		    if (productos.getNombre_del_producto().equals("")) {

	            return new ResponseEntity<>("El nombre del producto es un campo obligatorio", HttpStatus.BAD_REQUEST);
	        }

	        if (productos.getDescripcion().equals("")) {
	            
	            return new ResponseEntity<>("La descripcion es campo obligatorio", HttpStatus.BAD_REQUEST);
	        }

	        if (productos.getCantidad() == 0) {
	            return new ResponseEntity<>("La cantidad es un campo obligatorio", HttpStatus.BAD_REQUEST);
	        }

	        if (productos.getPrecio() == 0.0) {
	            return new ResponseEntity<>("El precio es un campo obligatorio", HttpStatus.BAD_REQUEST);
	        }

	        if (productos.getPorcentaje_iva() == 0) {
	            return new ResponseEntity<>("El porcentaje de IVA es un campo obligatorio", HttpStatus.BAD_REQUEST);
	        }

	        if (productos.getPorcentaje_descuento() == 0) {
	            return new ResponseEntity<>("El porcentaje de descuento es un campo obligatorio", HttpStatus.BAD_REQUEST);
	        }
   
	        if (productos.getEstado().equals("")) {
	            
	            return new ResponseEntity<>("El estado es un campo obligatorio", HttpStatus.BAD_REQUEST);
	        }
	        
	        
	        productosService.save(productos);
			return new ResponseEntity<>(productos,HttpStatus.OK);
		}
		
		@GetMapping("/")
		public ResponseEntity<Object>findAll(){
			var ListaProducto = productosService.findAll();
			return new ResponseEntity<>(ListaProducto, HttpStatus.OK);
		}
		
		//filtro
		/*@GetMapping("/busquedafiltro/{filtro}")
		public ResponseEntity<Object>findFiltro(@PathVariable String filtro){
			var Listacliente = clienteService.filtroCliente(filtro);
			return new ResponseEntity<>(Listacliente, HttpStatus.OK);
		}*/
		
		//@PathVariable recibe una variable por el enlace
		
		@GetMapping("/{id_productos}")
		public ResponseEntity<Object> findOne ( @PathVariable String id_productos ){
			var productos= productosService.findOne(id_productos);
			return new ResponseEntity<>(productos, HttpStatus.OK);
		}
		@DeleteMapping("/{id_produtos}")
		public ResponseEntity<Object> delete(@PathVariable String id) {
		    Optional<productos> optionalProductos = productosService.findOne(id);
		    if (optionalProductos.isPresent()) {
		        productos productos = optionalProductos.get();
		        if (productos.getEstado() == estado.Activo) {
		        	productos.setEstado(estado.Desactivado);
		        	productosService.save(productos);
		            return new ResponseEntity<>("Se ha desactivado correctamente", HttpStatus.OK);
		        } else {
		            return new ResponseEntity<>("El producto ya está desactivado", HttpStatus.BAD_REQUEST);
		        }
		    } else {
		        return new ResponseEntity<>("No se ha encontrado el producto", HttpStatus.BAD_REQUEST);
		    }
		}



		
			 
		@PutMapping("/{id_producto}")
		public ResponseEntity<Object> update(@PathVariable String id_productos, @ModelAttribute("producto") productos productosUpdate) {
		    
		    // Verificar si hay campos vacíos
		    
		    if (productosUpdate.contieneCamposVacios()) {
		        return new ResponseEntity<>("Todos los campos son obligatorios", HttpStatus.BAD_REQUEST);
		    }

		    var producto = productosService.findOne(id_productos).orElse(null);
		    if (producto != null) {
		        producto.setNombre_del_producto(productosUpdate.getNombre_del_producto());
		        producto.setDescripcion(productosUpdate.getDescripcion());
		        producto.setCantidad(productosUpdate.getCantidad());
		        producto.setPrecio(productosUpdate.getPrecio());
		        producto.setPorcentaje_iva(productosUpdate.getPorcentaje_iva());
		        producto.setPorcentaje_descuento(productosUpdate.getPorcentaje_descuento());
		        producto.setEstado(productosUpdate.getEstado());

		        productosService.save(producto);
		        return new ResponseEntity<>("Guardado", HttpStatus.OK);
		    } else {
		        return new ResponseEntity<>("Error: producto no encontrado", HttpStatus.BAD_REQUEST);
		    }
		}

}
