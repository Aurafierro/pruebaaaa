var url = "http://localhost:8080/api/v1/cliente/";

function listarCliente() {
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

                

                let celdaTipoDocumento = document.createElement("td")
                let celdaIdentificacion = document.createElement("td")
                let celdaNombre = document.createElement("td")
                let celdaApellido = document.createElement("td")
                let celdaTelefono = document.createElement("td")
                let celdaCorreo = document.createElement("td")
                let celdaDireccion = document.createElement("td")
                let celdaCiudad = document.createElement("td")
                let celdaEstado = document.createElement("td")
                let celdaOpcion = document.createElement("td");
                let botonEditarCliente = document.createElement("button");
                botonEditarCliente.value=result[i]["id_cliente"];
                botonEditarCliente.innerHTML = "Editar";

                let botonEliminarCliente = document.createElement("button");
                botonEliminarCliente.innerHTML = "Eliminar";

                
        
        botonEditarCliente.onclick=function(e){
          $('#exampleModal').modal('show');
          consultarClienteID(this.value);
        }
        botonEditarCliente.className = "btn btn-warning editar-cliente";


        
        botonEliminarCliente.innerHTML = "Eliminar";
        botonEliminarCliente.className = "btn btn-danger eliminar-cliente";
        botonEliminarCliente.value = result[i]["id_cliente"];
        botonEliminarCliente.onclick = function() {
            eliminarCliente(this.value); // Pasar el id_cliente como argumento
        };
                
        let botonActivarCliente = document.createElement("button");
        botonActivarCliente.innerHTML = "Activar";
        botonActivarCliente.className = "btn btn-primary activar-cliente";
        botonActivarCliente.value = result[i]["id_cliente"];
        botonActivarCliente.onclick = function () {
            activarCliente(this.value); // Pasar el id_cliente como argumento
        };
        
        let botonDesactivarCliente = document.createElement("button");
        botonDesactivarCliente.innerHTML = "Desactivar";
        botonDesactivarCliente.className = "btn btn-dark desactivar-cliente";
        botonDesactivarCliente.value = result[i]["id_cliente"];
        botonDesactivarCliente.onclick = function () {
            desactivarCliente(this.value); // Pasar el id_cliente como argumento
        };
               
                
              



                celdaTipoDocumento.innerText = result[i]["tipo_documento"];
                celdaIdentificacion.innerText = result[i]["identificacion"];
                celdaNombre.innerText = result[i]["nombre"];
                celdaApellido.innerText = result[i]["apellido"];
                celdaTelefono.innerText = result[i]["telefono"];
                celdaCorreo.innerText = result[i]["correo"];
                celdaDireccion.innerText = result[i]["direccion"];
                celdaCiudad.innerText = result[i]["ciudad"];
                celdaEstado.innerText = result[i]["estado"];
                
                
                

                trRegistro.appendChild(celdaTipoDocumento);
                trRegistro.appendChild(celdaIdentificacion);
                trRegistro.appendChild(celdaNombre);
                trRegistro.appendChild(celdaApellido);
                trRegistro.appendChild(celdaTelefono);
                trRegistro.appendChild(celdaCorreo);
                trRegistro.appendChild(celdaDireccion);
                trRegistro.appendChild(celdaCiudad);
                trRegistro.appendChild(celdaEstado);
                
                celdaOpcion.appendChild(botonEditarCliente);
                celdaOpcion.appendChild(botonEliminarCliente);
                celdaOpcion.appendChild(botonDesactivarCliente);
                celdaOpcion.appendChild(botonActivarCliente);
                
                
              
                trRegistro.appendChild(celdaOpcion);
               
               
        
        
                cuerpoTabla.appendChild(trRegistro);
            }
        },
        error: function (error) {
            alert("Error en la petición " + error);
        }
    })
}

function eliminarCliente(id_cliente) {
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
              url: url + id_cliente,
              type: "DELETE",
              success: function(result) {
                  swal.fire(
                      'Eliminado',
                      'El cliente ha sido eliminado',
                      'success'
                  );
                  listarCliente(); // Recargar la lista de clientes después de eliminar uno
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





function registrarCliente() {
    let tipoDocumento = document.getElementById("tipo_documento").value;

    let identificacion = document.getElementById("identificacion").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let direccion = document.getElementById("direccion").value;
    let ciudad = document.getElementById("ciudad").value;
    let estado = document.getElementById("estado").value;

    // Verificar que los campos requeridos no estén vacíos
    if (tipoDocumento && identificacion && nombre && apellido && telefono && correo && direccion && ciudad && estado) {
        let formData = {
            "tipo_documento": tipoDocumento,
            "identificacion": identificacion,
            "nombre": nombre,
            "apellido": apellido,
            "telefono": telefono,
            "correo": correo,
            "direccion": direccion,
            "ciudad": ciudad,
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
                limpiarCliente();
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



  //ValidadIdentificación

function validarCampos() {
    var identificacion = document.getElementById("identificacion");
    return validarIdentificacion(nombre);
  }
  function validarIdentificacion(cuadroNumero) {
  
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
  //Validadnombre

function validarCampos() {
  var nombre = document.getElementById("nombre");
  return validarNombre(nombre);
}
function validarNombre(cuadroNumero) {

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

//ValidadApellido
function validarCampos() {
  var apellido = document.getElementById("apellido");
  return validarApellido(apellido);
}
function validarApellido(cuadroNumero) {
  
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

//ValidadTelefono
function validarCampos() {
  var telefono = document.getElementById("telefono");
  return validarTelefono(telefono);
}
function validarTelefono(cuadroNumero) {
  
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

//ValidadCorreo
function validarCampos() {
  var correo = document.getElementById("correo");
  return validarCorreo(correo);
}
function validarCorreo(cuadroNumero) {
  
  var valor = cuadroNumero.value;
  var valido = true;
  if (valor.length < 5 || valor.length > 100) {
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
//ValidadDireccion


function validarCampos() {
  var direccion = document.getElementById("direccion");
  return validarDireccion(direccion);
}
function validarDireccion(cuadroNumero) {
  
  var valor = cuadroNumero.value;
  var valido = true;
  if (valor.length < 10  || valor.length > 200) {
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

//ValidadCiudad


function validarCampos() {
    var ciudad = document.getElementById("ciudad");
    return validarCiudad(ciudad);
  }
  function validarCiudad(cuadroNumero) {
    
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

function consultarClienteID(id_cliente) {
  $.ajax({
      url: url + id_cliente,
      type: "GET",
      success: function(result) {
          document.getElementById("tipo_documento").value = result["tipo_documento"];
          document.getElementById("identificacion").value = result["identificacion"];
          document.getElementById("nombre").value = result["nombre"];
          document.getElementById("apellido").value = result["apellido"];
          document.getElementById("telefono").value = result["telefono"];
          document.getElementById("correo").value = result["correo"];
          document.getElementById("direccion").value = result["direccion"];
          document.getElementById("ciudad").value = result["ciudad"];
          document.getElementById("estado").value = result["estado"];
      }
  });
}




function consultarClienteID(id_cliente){
  //alert(id);
  $.ajax({
      url:url+id_cliente,
      type:"GET",
      success: function(result){
          
          document.getElementById("id_cliente").value=result["id_cliente"];
          document.getElementById("tipo_documento").value=result["tipo_documento"];
          document.getElementById("identificacion").value=result["identificacion"];
          document.getElementById("nombre").value=result["nombre"];
          document.getElementById("apellido").value=result["apellido"];
          document.getElementById("telefono").value=result["telefono"];
          document.getElementById("direccion").value=result["direccion"];
          document.getElementById("correo").value=result["correo"];
          document.getElementById("ciudad").value=result["ciudad"];
          document.getElementById("estado").value=result["estado"];
      }
  });
}

//Cuando le damos click al boton de guardar, este llamara a la function UpdateCliente por medio del onclick******
function actualizarCliente() {
  var id_cliente = document.getElementById("id_cliente").value;

  let formData = {
      "tipo_documento": document.getElementById("tipo_documento").value,
      "identificacion": document.getElementById("identificacion").value,
      "nombre": document.getElementById("nombre").value,
      "apellido": document.getElementById("apellido").value,
      "telefono": document.getElementById("telefono").value,
      "direccion": document.getElementById("direccion").value,
      "ciudad": document.getElementById("ciudad").value,
      "correo": document.getElementById("correo").value,
      "estado": document.getElementById("estado").value
  };



  if(validarCampos()){
  $.ajax({
      url: url + id_cliente,
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
          
          listarCliente(); //Lista los clientes después de actualizar
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

function activarCliente(id_cliente) {
  let formData = {
      "estado": "Activo" // Cambiar "activo" a "Activo"
  };

  $.ajax({
      url: url + id_cliente,
      type: "PUT",
      data: formData,
      success: function (result) {
          Swal.fire({
              title: "¡Excelente!",
              text: "El cliente ha sido activado correctamente",
              icon: "success"
          });
          listarCliente(); // Recargar la lista de clientes después de activar uno
      },
      error: function (error) {
          Swal.fire("Error", "Error al activar el cliente", "error");
      }
  });
}

function desactivarCliente(id_cliente) {
  let formData = {
      "estado": "Desactivado" // Cambiar "activo" a "Activo"
  };

  $.ajax({
      url: url + id_cliente,
      type: "PUT",
      data: formData,
      success: function (result) {
          Swal.fire({
              title: "¡Excelente!",
              text: "El cliente ha sido desactivado correctamente",
              icon: "success"
          });
          listarCliente(); // Recargar la lista de clientes después de activar uno
      },
      error: function (error) {
          Swal.fire("Error", "Error al desactivar el cliente", "error");
      }
  });
}