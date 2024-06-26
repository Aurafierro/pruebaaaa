package com.shoeStore.ShoeStore.interfaceService;

import java.util.List;
import java.util.Optional;

import com.shoeStore.ShoeStore.models.productos;

public interface IProductosService {

	public String save(productos productos);

	public List<productos> findAll();

	public Optional<productos> findOne(String id_producto);

	public int delete(String id_producto);

	public List<productos> filtroProdutos(String filtro);

	
	
	
	
	

}
