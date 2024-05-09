package com.shoeStore.ShoeStore.interfaceService;

import java.util.List;
import java.util.Optional;

import com.shoeStore.ShoeStore.models.cliente;



public interface IClienteService   {


	public String save(cliente cliente);
    public List <cliente> findAll();
	public Optional<cliente> findOne(String id);
	public int delete (String id);
	
    public List<cliente> filtroCliente(String filtro);
	
	 
	
	
	

}
