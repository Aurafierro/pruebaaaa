package com.shoeStore.ShoeStore.interfaces;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.shoeStore.ShoeStore.models.cliente;



@Repository
public interface ICliente  extends CrudRepository<cliente,String>{


	  List<cliente> findByIdentificacion(String identificacion);

	
}
