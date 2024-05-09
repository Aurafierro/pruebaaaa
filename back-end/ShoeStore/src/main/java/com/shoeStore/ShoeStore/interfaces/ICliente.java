package com.shoeStore.ShoeStore.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;


import com.shoeStore.ShoeStore.models.cliente;




@Repository
public interface ICliente  extends CrudRepository<cliente,String>{


	@Query("SELECT c FROM cliente c WHERE "
	        + "c.nombre LIKE %?1% OR "
	        + "c.apellido LIKE %?1% OR "
	        + "c.ciudad LIKE %?1% OR "
	        + "c.ciudad LIKE %?1%")
	List<cliente> filtroCliente(String filtro);


	
	
				
		


	
}
