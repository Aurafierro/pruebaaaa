var url = "http://localhost:8080/api/v1/producto/";

function listarProducto() {
  var capturarFiltro = document.getElementById("inputSearch").value;
  var urlLocal=url;
  if (capturarFiltro!=""){
    urlLocal+="busquedafiltro/"+capturarFiltro;
  }
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            console.log(result);
            var cuerpoTabla = document.getElementById("cuerpoTabla");
            cuerpoTabla.innerHTML = "";
            for (var i = 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");

                

                let celdaNombreProducto = document.createElement("td")
                let celdaDescripcion = document.createElement("td")
                let celdaCantidad = document.createElement("td")
                let celdaPrecio = document.createElement("td")
                let celdaIva = document.createElement("td")
                let celdaDescuento = document.createElement("td")
              
                let celdaEstado = document.createElement("td")
                let celdaOpcion = document.createElement("td");
                let botonEditarProducto = document.createElement("button");
                botonEditarProducto.value=result[i]["id_producto"];
                botonEditarProducto.innerHTML = "Editar";

                let botonEliminarProducto = document.createElement("button");
                botonEliminarProducto.innerHTML = "Eliminar";

                
        
        botonEditarProducto.onclick=function(e){
          $('#exampleModal').modal('show');
          consultarProductoID(this.value);
        }
        botonEditarProducto.className = "btn btn-warning editar-producto";


        
        botonEliminarProducto.innerHTML = "Eliminar";
        botonEliminarProducto.className = "btn btn-danger eliminar-producto";
        botonEliminarProducto.value = result[i]["id_producto"];
        botonEliminarProducto.onclick = function() {
            eliminarProducto(this.value); 
        };
                
       
       
                
          
        celdaNombreProducto.innerText = result[i]["nombre_del_producto"];
        celdaDescripcion.innerText = result[i]["descripcion"];
        celdaCantidad.innerText=result[i] ["cantidad"];
        celdaPrecio.innerText = result[i]["precio"];
        celdaIva.innerText = result[i]["porcentaje_iva"];
        celdaDescuento.innerText = result[i]["porcentaje_descuento"];
        celdaEstado.innerText = result[i]["estado"];
        
                
                

      
        trRegistro.appendChild(celdaNombreProducto);
        trRegistro.appendChild(celdaDescripcion);
        trRegistro.appendChild(celdaCantidad);
        trRegistro.appendChild(celdaPrecio);
        trRegistro.appendChild(celdaIva);
        trRegistro.appendChild(celdaDescuento);
        
        trRegistro.appendChild(celdaEstado);
        
                
                celdaOpcion.appendChild(botonEditarProducto);
                celdaOpcion.appendChild(botonEliminarProducto);
              
                
                trRegistro.appendChild(celdaOpcion);
               
        
                cuerpoTabla.appendChild(trRegistro);
            }
        },
        error: function (error) {
            alert("Error en la petición " + error);
        }
    })
}

function eliminarProducto(id_producto) {
  swal.fire({
      title: '¿Estás seguro?',
      text: "Esta opción no tiene marcha atrás",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor:'#3085d6',
      cancelButtonText:'Cancelar',
      cancelButtonColor:'#d33',
      confirmButtonText:'Sí, ¡Eliminar!',
  }).then((result) => {
      if (result.isConfirmed) {
          $.ajax({
              url: url + id_producto,
              type: "DELETE",
              success: function(result) {
                  swal.fire(
                      'Eliminado',
                      'El producto ha sido eliminado',
                      'success'
                  );
                  listarProducto(); // Recargar la lista de clientes después de eliminar uno
              },
              error: function(error) {
                  Swal.fire(
                      'Error',
                      'No se puede eliminar el registro',
                      'error'
                  );
              }
          });
      }
  });
}





function registrarProducto() {
    let nombre_del_producto = document.getElementById("nombre_del_producto").value;

    let descripcion = document.getElementById("descripcion").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio").value;
    let porcentaje_iva = document.getElementById("porcentaje_iva").value;
    let porcentaje_descuento = document.getElementById("porcentaje_descuento").value;
    
    let estado = document.getElementById("estado").value;

    // Verificar que los campos requeridos no estén vacíos
    if (nombre_del_producto && descripcion && cantidad && precio && porcentaje_iva && porcentaje_descuento && estado) {
        let formData = {
            "nombre_del_producto": nombre_del_producto,
            "descripcion": descripcion,
            "cantidad": cantidad,
            "precio": precio,
            "porcentaje_iva": porcentaje_iva,
            "porcentaje_descuento": porcentaje_descuento,
            
            "estado": estado
        };

        $.ajax({
            url: url,
            type: "POST",
            data: formData,
            success: function (result) {
                Swal.fire({
                    title: "¡Excelente!",
                    text: "Se guardó correctamente",
                    icon: "success"
                });
                limpiarProducto();
            },
            error: function (error) {
                Swal.fire("Error", "Error al guardar, " + error.responseText, "error");
            },
        });
    } else {
        Swal.fire({
            title: "¡Error!",
            text: "Llene todos los campos correctamente",
            icon: "error"
        });
    }
}



  //validar nombre_del_producto

function validarCampos() {
    var nombre_del_producto = document.getElementById("nombre_del_producto");
    return validarNombreProducto(nombre_del_producto);
  }
  function validarNombreProducto(cuadroNumero) {
  
    var valor = cuadroNumero.value;
    var valido = true;
    if (valor.length < 1 || valor.length > 15) {
      valido = false
    }
  
    if (valido) {
      //cuadro de texto cumple
      cuadroNumero.className = "form-control is-valid";
    } else {
      //cuadro de texto no cumple
      cuadroNumero.className = "form-control is-invalid";
    }
    return valido;
  
  }
  //Validardescripcion

function validarCampos() {
  var descripcion = document.getElementById("descripcion");
  return validarDescripcion(descripcion);
}
function validarDescripcion(cuadroNumero) {

  var valor = cuadroNumero.value;
  var valido = true;
  if (valor.length < 1 || valor.length > 15) {
    valido = false
  }

  if (valido) {
    //cuadro de texto cumple
    cuadroNumero.className = "form-control is-valid";
  } else {
    //cuadro de texto no cumple
    cuadroNumero.className = "form-control is-invalid";
  }
  return valido;

}

//Validar precio
function validarCampos() {
  var precio = document.getElementById("precio");
  return validarPrecio(precio);
}
function validarPrecio(cuadroNumero) {
  
  var valor = cuadroNumero.value;
  var valido = true;
  if (valor.length < 1 || valor.length > 11) {
    valido = false
  }

  if (valido) {
    //cuadro de texto cumple
    cuadroNumero.className = "form-control is-valid";
  } else {
    //cuadro de texto no cumple
    cuadroNumero.className = "form-control is-invalid";
  }
  return valido;

}

//validar cantidad
function validarCampos() {
  var cantidad = document.getElementById("cantidad");
  return validarCantidad(cantidad);
}
function validarCantidad(cuadroNumero) {
  
  var valor = cuadroNumero.value;
  var valido = true;
  if (valor.length < 10 || valor.length > 12) {
    valido = false
  }

  if (valido) {
    //cuadro de texto cumple
    cuadroNumero.className = "form-control is-valid";
  } else {
    //cuadro de texto no cumple
    cuadroNumero.className = "form-control is-invalid";
  }
  return valido;

}



//Validadivq


function validarCampos() {
    var porcentaje_iva = document.getElementById("porcentaje_iva");
    return validarIva(porcentaje_iva);
  }
  function validarIva(cuadroNumero) {
    
    var valor = cuadroNumero.value;
    var valido = true;
    if (valor.length < 4  || valor.length > 100) {
      valido = false
    }
  
    if (valido) {
      //cuadro de texto cumple
      cuadroNumero.className = "form-control is-valid";
    } else {
      //cuadro de texto no cumple
      cuadroNumero.className = "form-control is-invalid";
    }
    return valido;
  
  }

  function validarCampos() {
    var porcentaje_descuento = document.getElementById("porcentaje_descuento");
    return validarDescuento(porcentaje_descuento);
  }
  function validarDescuento(cuadroNumero) {
    
    var valor = cuadroNumero.value;
    var valido = true;
    if (valor.length < 4  || valor.length > 100) {
      valido = false
    }
  
    if (valido) {
      //cuadro de texto cumple
      cuadroNumero.className = "form-control is-valid";
    } else {
      //cuadro de texto no cumple
      cuadroNumero.className = "form-control is-invalid";
    }
    return valido;
  
  }
//ValidadEstado
//ValidadEstado
function validarEstado() {
    var estado = document.getElementById("estado");
    return validarEstado(estado);
}

function validarEstado(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;
    if (valor.length < 1  || valor.length > 1) {
        valido = false
    }

    if (valido) {
        //cuadro de texto cumple
        cuadroNumero.className = "form-control is-valid";
    } else {
        //cuadro de texto no cumple
        cuadroNumero.className = "form-control is-invalid";
    }
    return valido;
}

function consultarProductoID(id_producto) {
  $.ajax({
      url: url + id_producto,
      type: "GET",
      success: function(result) {
          document.getElementById("nombre_del_producto").value = result["nombre_del_producto"];
          document.getElementById("descripcion").value = result["descripcion"];
          document.getElementById("cantidad").value = result["cantidad"];
          document.getElementById("precio").value = result["precio"];
          document.getElementById("porcentaje_iva").value = result["porcentaje_iva"];
          document.getElementById("porcentaje_descuento").value = result["porcentaje_descuento"];
        
          document.getElementById("estado").value = result["estado"];
      }
  });
}





//Cuando le damos click al boton de guardar, este llamara a la function UpdateCliente por medio del onclick******
function actualizarProducto(id_producto) {
  

  let formData = {
      "nombre_del_producto": document.getElementById("nombre_del_producto").value,
      "descripcion": document.getElementById("descripcion").value,
      "cantidad": document.getElementById("cantidad").value,
      "precio": document.getElementById("precio").value,
      "porcentaje_iva": document.getElementById("porcentaje_iva").value,
      "porcentaje_descuento": document.getElementById("porcentaje_descuento").value,
      
      "estado": document.getElementById("estado").value
  };



  if(validarCampos()){
  $.ajax({
      url: url + id_producto,
      type: "PUT",
      data: formData,
      success: function(result) {
          Swal.fire({
              title: "Excelente",
              text: "Su registro se actualizó correctamente",
              icon: "success"
          });
          
          var modal = document.getElementById("exampleModal"); 
          modal.style.display = "hide";
          
          listarProducto(); //Lista los clientes después de actualizar
      },
      error: function(error) {
          Swal.fire("Error", "Error al guardar", "error");
      }  
  });
  }else{
      Swal.fire({
          title: "Error!",
          text: "Complete los campos correctamente",
          icon: "error"
      });
      }
}

