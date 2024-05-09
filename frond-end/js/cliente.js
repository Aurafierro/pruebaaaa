var url = "http://localhost:8080/api/v1/cliente/";

function listarCliente() {
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
        
        botonEditarCliente.onclick=function(e){
          $('#exampleModal').modal('show');
          consultarClienteID(this.value);
        }

        botonEditarCliente.className = "btn btn-warning editar-cliente";


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
              
        
               
               
        
        
                cuerpoTabla.appendChild(trRegistro);
            }
        },
        error: function (error) {
            alert("Error en la petición " + error);
        }
    })
}


function registrarCliente() {
    let tipoDocumento = document.getElementById("tipo_documento").value;

    let identificacion = document.getElementById("identificacion").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido_cliente").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let direccion = document.getElementById("direccion_cliente").value;
    let ciudad = document.getElementById("ciudad").value;
    let estado = document.getElementById("estado_cliente").value;

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


function consultarClienteID(id){
    //alert(id);
    $.ajax({
        url:url+id,
        type:"GET",
        success: function(result){
           
            document.getElementById("tipo_documento").value=result["tipo_documento"];
            document.getElementById("identificacion").value=result["identificacion"];
            document.getElementById("nombre").value=result["nombre"];
            document.getElementById("apellido_cliente").value=result["apellido_cliente"];
           
            document.getElementById("telefono").value=result["telefono"];
            document.getElementById("correo").value=result["correo"];
            document.getElementById("direccion").value=result["direccion_cliente"];
            document.getElementById("ciudad").value=result["ciudad"];
            document.getElementById("estado").value=result["estado_cliente"];
        }
    });
  }
  
  
  
  function actualizarCliente() { 
    var id_cliente=document.getElementById("id_cliente").value
    let formData={
        "tipo_documento": document.getElementById("tipo_documento").value,
        "identificacion": document.getElementById("identificacion").value,
        "nombre": document.getElementById("nombre").value,
        "apellido_cliente": document.getElementById("apellido_cliente").value,
        "telefono": document.getElementById("telefono").value,
        "correo": document.getElementById("correo").value,
        "direccion_cliente": document.getElementById("direccion_cliente").value,
        "ciudad": document.getElementById("ciudad").value,
        "estado_cliente": document.getElementById("estado_cliente").value
  };
  
  if (validarCampos()) {
    $.ajax({
        url:url+id_cliente,
        type: "PUT",
        data: formData,
      
        
        success: function(result) {
          
            // Manejar la respuesta exitosa según necesites
            Swal.fire({
                title: "¡Excelente!",
                text: "Se guardó correctamente",
                icon: "success"
              });
            // Puedes hacer algo adicional como recargar la lista de médicos
            listarCliente();
        },
        error: function(error) {
            // Manejar el error de la petición
            Swal.fire({
                title: "¡Error!",
                text: "No se guardó",
                icon: "error"
              });
        },
        error: function (error) {
          Swal.fire("Error", "Error al guardar, " + error.responseText, "error");
      }
    });
    } else {
    Swal.fire({
        title: "¡Error!",
        text: "Llene todos los campos correctamente",
        icon: "error"
      });
    }
    function validarCampos() {
      // Obtener los valores de los campos
      var tipo_documento = document.getElementById("tipo_documento").value;
      var identificacion = document.getElementById("identificacion").value;
      var nombre = document.getElementById("nombre").value;
      var apellido_cliente = document.getElementById("apellido_cliente").value;
      var telefono = document.getElementById("telefono").value;
      var correo = document.getElementById("correo").value;
      var direccion_cliente = document.getElementById("direccion_cliente").value;
      var ciudad = document.getElementById("ciudad").value;
      var estado_cliente = document.getElementById("estado_cliente").value;
    
      // Verificar si algún campo está vacío
      if (tipo_documento === '' || identificacion === '' || nombre === '' || apellido_cliente === '' || telefono === '' || correo === '' || direccion_cliente === '' || estado_cliente === '') {
        return false; // Al menos un campo está vacío
      } else {
        return true; // Todos los campos están llenos
      }
    }
    
  }
  