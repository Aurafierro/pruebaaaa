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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.shoeStore.ShoeStore.interfaceService.IClienteService;
import com.shoeStore.ShoeStore.models.cliente;
import com.shoeStore.ShoeStore.models.estado;



@RequestMapping("/api/v1/cliente")
@RestController
@CrossOrigin
public class clientecontroller {


	@Autowired
	   
	  private IClienteService clienteService;
		
	@PostMapping("/")
	public ResponseEntity<Object> save(@ModelAttribute("cliente") cliente cliente) {
		    
		    List<cliente> clientes = clienteService.filtroClienteI(cliente.getIdentificacion());
		    if (!clientes.isEmpty()) {
		        return new ResponseEntity<>("El cliente ya tiene un ingreso activo", HttpStatus.BAD_REQUEST);
		    }
		    if (cliente.getIdentificacion().equals("")) {

	            return new ResponseEntity<>("Tú identificación  es un campo obligatorio", HttpStatus.BAD_REQUEST);
	        }

	        if (cliente.getNombre().equals("")) {
	            
	            return new ResponseEntity<>("El  nombre es un campo obligatorio", HttpStatus.BAD_REQUEST);
	        }

	        if (cliente.getApellido().equals("")) {
	            
	            return new ResponseEntity<>("El  apellido es un campo obligatorio", HttpStatus.BAD_REQUEST);
	        }

	        if (cliente.getTelefono().equals("")) {
	            
	            return new ResponseEntity<>("El numero de télefono es un campo obligatorio", HttpStatus.BAD_REQUEST);
	        }
	        
	        if (cliente.getDireccion().equals("")) {

	            return new ResponseEntity<>("La dirección es  obligatoria", HttpStatus.BAD_REQUEST);
	        }

	        if (cliente.getCiudad().equals("")) {
	            
	            return new ResponseEntity<>("El nombre de tu ciudad es un campo obligatorio", HttpStatus.BAD_REQUEST);
	        }
            if (cliente.getCorreo().equals("")) {
	            
	            return new ResponseEntity<>("El correo es un campo obligatorio", HttpStatus.BAD_REQUEST);
	        }
	        if (cliente.getEstado().equals("")) {
	            
	            return new ResponseEntity<>("El estado es un campo obligatorio", HttpStatus.BAD_REQUEST);
	        }
	        
	        
			clienteService.save(cliente);
			return new ResponseEntity<>(cliente,HttpStatus.OK);
		}
		
		@GetMapping("/")
		public ResponseEntity<Object>findAll(){
			var ListaCliente = clienteService.findAll();
			return new ResponseEntity<>(ListaCliente, HttpStatus.OK);
		}
		
		//filtro
		@GetMapping("/busquedafiltro/{filtro}")
		public ResponseEntity<Object> findFiltro(@PathVariable String filtro, @RequestParam("valor") String valor) {
		    List<cliente> listaClientes;
		    if (filtro.equals("ciudad")) {
		        listaClientes = clienteService.filtroClienteCiudad(valor);
		    } else if (filtro.equals("nombre")) {
		        listaClientes = clienteService.filtroClienteI(valor);
		    } else {
		        return new ResponseEntity<>("Filtro no válido", HttpStatus.BAD_REQUEST);
		    }
		    return new ResponseEntity<>(listaClientes, HttpStatus.OK);
		}

		
		//@PathVariable recibe una variable por el enlace
		
		@GetMapping("/{id_cliente}")
		public ResponseEntity<Object> findOne ( @PathVariable String id_cliente ){
			var cliente= clienteService.findOne(id_cliente);
			return new ResponseEntity<>(cliente, HttpStatus.OK);
		}
		@DeleteMapping("/{id}")
		public ResponseEntity<Object> delete(@PathVariable String id) {
		    Optional<cliente> optionalCliente = clienteService.findOne(id);
		    if (optionalCliente.isPresent()) {
		        cliente cliente = optionalCliente.get();
		        if (cliente.getEstado() == estado.Activo) {
		            cliente.setEstado(estado.Desactivado);
		            clienteService.save(cliente);
		            return new ResponseEntity<>("Se ha desactivado correctamente", HttpStatus.OK);
		        } else {
		            return new ResponseEntity<>("El cliente ya está desactivado", HttpStatus.BAD_REQUEST);
		        }
		    } else {
		        return new ResponseEntity<>("No se ha encontrado el cliente", HttpStatus.BAD_REQUEST);
		    }
		}



		
			 
				@PutMapping("/{id_cliente}")
				public ResponseEntity<Object> update(@PathVariable String id_cliente, @ModelAttribute("cliente") cliente clienteUpdate) {
				    
					// Verificar si hay campos vacíos
					
					if (clienteUpdate.contieneCamposVacios()) {
						return new ResponseEntity<>("Todos los campos son obligatorios", HttpStatus.BAD_REQUEST);
					}

					var cliente = clienteService.findOne(id_cliente).get();
					if (cliente != null) {
				        if (!cliente.getIdentificacion().equals(clienteUpdate.getIdentificacion())) {
				            // El número de documento se está cambiando, verificar si ya está en uso
				            List<cliente> clientesConMismoDocumento = clienteService.filtroClienteI(clienteUpdate.getIdentificacion());
				            if (!clientesConMismoDocumento.isEmpty()) {
				                // Si hay otros médicos con el mismo número de documento, devuelve un error
				                return new ResponseEntity<>("El cliente ya tiene un ingreso activo", HttpStatus.BAD_REQUEST);
				            }
				        }


						cliente.setTipo_documento(clienteUpdate.getTipo_documento());
						cliente.setIdentificacion(clienteUpdate.getIdentificacion());
						cliente.setNombre(clienteUpdate.getNombre());
						
						cliente.setApellido(clienteUpdate.getApellido());
						cliente.setTelefono(clienteUpdate.getTelefono());
						cliente.setCiudad(clienteUpdate.getCiudad());
						cliente.setDireccion(clienteUpdate.getDireccion());
						cliente.setEstado(clienteUpdate.getEstado());

						clienteService.save(cliente);
						return new ResponseEntity<>("Guardado", HttpStatus.OK);

					} else {
						return new ResponseEntity<>("Error cliente no encontrado", HttpStatus.BAD_REQUEST);
					}
				}
		}