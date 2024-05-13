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
		return productos.getId_producto();
	}

	@Override
	public List<productos> findAll() {
		List <productos> listaProducto = (List<productos>) data.findAll() ;
		
		return listaProducto;
	}

	
	
	@Override
	public Optional<productos> findOne(String id_producto) {
		Optional<productos>producto=data.findById(id_producto);
		
		return producto;
	}

	@Override
	public int delete(String id_producto) {
		data.deleteById(id_producto);
		return 1;
	}
	
	@Override
	public List<productos> filtroProdutos(String filtro) {
		List <productos> listaProducto=data.filtroProductos(filtro);
		return listaProducto;
	}


}