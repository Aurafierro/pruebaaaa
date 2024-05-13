package com.shoeStore.ShoeStore.interfaceService;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.shoeStore.ShoeStore.models.productos;
import com.shoeStore.ShoeStore.models.venta;


@Service
public interface IVentaService {

	  public String save (venta venta);
	    public List <venta>findAll();
	    public List<venta> filtroVenta(String filtro_venta);
	   
	    public Optional <venta> findOne (String id_venta);
	    public int delete (String id_venta);
	    


	
	

}
