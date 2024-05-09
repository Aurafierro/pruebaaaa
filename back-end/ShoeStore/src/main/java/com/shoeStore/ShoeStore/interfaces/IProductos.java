package com.shoeStore.ShoeStore.interfaces;



import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.shoeStore.ShoeStore.models.productos;



public interface IProductos  extends CrudRepository<productos,String>{
	 @Query("SELECT p FROM productos p WHERE p.nombre_del_producto LIKE %?1%")
	List<productos> filtroProductos(String filtro);

	 

}
