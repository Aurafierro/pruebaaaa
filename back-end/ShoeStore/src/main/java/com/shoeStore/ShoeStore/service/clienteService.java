package com.shoeStore.ShoeStore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.shoeStore.ShoeStore.interfaceService.IClienteService;
import com.shoeStore.ShoeStore.interfaces.ICliente;
import com.shoeStore.ShoeStore.models.cliente;





@Service
public class clienteService implements IClienteService {

	
	@Autowired
	private ICliente data;



	@Override
	public String save(cliente cliente) {
		data.save(cliente);
		return cliente.getId_cliente();
	}

	@Override
	public List<cliente> findAll() {
		List <cliente> listaCliente = (List<cliente>) data.findAll() ;
		
		return listaCliente;
	}

	
	
	@Override
	public Optional<cliente> findOne(String id_cliente) {
		Optional<cliente>cliente=data.findById(id_cliente);
		
		return cliente;
	}

	@Override
	public int delete(String id_cliente) {
		data.deleteById(id_cliente);
		return 1;
	}
	 @Override
	    public List<cliente> filtroCliente(String filtro) {
	    	List <cliente> listaCliente=data.filtroCliente(filtro);
			return listaCliente;
	

	    }
}
