package com.shoeStore.ShoeStore.interfaces;



import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.shoeStore.ShoeStore.models.venta;

@Repository
public interface IVenta extends CrudRepository<venta,String>{
   @Query("SELECT v FROM venta v JOIN "
			
    + "v.cliente c "
    + " WHERE c.id_cliente LIKE %?1% ") 
    List<venta> filtroVenta(@Param("filtroVenta")String filtro_venta); 

}