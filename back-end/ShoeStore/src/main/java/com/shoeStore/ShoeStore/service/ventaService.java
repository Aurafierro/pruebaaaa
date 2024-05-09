package com.shoeStore.ShoeStore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shoeStore.ShoeStore.interfaceService.IVentaService;

import com.shoeStore.ShoeStore.interfaces.IVenta;

import com.shoeStore.ShoeStore.models.venta;

@Service
public class ventaService implements IVentaService{

	
	@Autowired
	private IVenta data;



	@Override
	public String save(venta venta) {
		data.save(venta);
		return venta.getId_venta();
	}

	@Override
	public List<venta> findAll() {
		List <venta> listaventa = (List<venta>) data.findAll() ;
		
		return listaventa;
	}

	
	
	@Override
	public Optional<venta> findOne(String id_venta) {
		Optional<venta>venta=data.findById(id_venta);
		
		return venta;
	}

	@Override
	public int delete(String id_venta) {
		data.deleteById(id_venta);
		return 1;
	}
	
}

