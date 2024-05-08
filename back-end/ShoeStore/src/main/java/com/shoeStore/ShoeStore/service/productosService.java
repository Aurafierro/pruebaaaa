package com.shoeStore.ShoeStore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shoeStore.ShoeStore.interfaceService.IProductosService;
import com.shoeStore.ShoeStore.interfaces.IProductos;
import com.shoeStore.ShoeStore.models.productos;

@Service
public class productosService implements IProductosService {

	
	@Autowired
	private IProductos data;



	@Override
	public String save(productos productos) {
		data.save(productos);
		return productos.getId_productos();
	}

	@Override
	public List<productos> findAll() {
		List <productos> listaProducto = (List<productos>) data.findAll() ;
		
		return listaProducto;
	}

	
	
	@Override
	public Optional<productos> findOne(String id_productos) {
		Optional<productos>producto=data.findById(id_productos);
		
		return producto;
	}

	@Override
	public int delete(String id_productos) {
		data.deleteById(id_productos);
		return 1;
	}
	


}