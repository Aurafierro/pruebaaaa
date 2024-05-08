var url = "http://localhost:8080/api/v1/cliente/";


function listarCliente() {
 
 /* var capturarFiltro = document.getElementById("inputSearch").value;
  var urlLocal=url;
  if (capturarFiltro!=""){
    urlLocal+="busquedafiltro/"+capturarFiltro;
  }*/
  
  $.ajax({
    url: urlLocal,
    type: "GET",
    success: function (result) {
      //success: funcion que se ejecuta
      //cuando la peticion tiene exito
      console.log(result);

      var cuerpoTabla = document.getElementById("cuerpoTabla");
      //Se limpia el cuepro de la tabla
      cuerpoTabla.innerHTML = "";
      //se hace un ciclo que recorra l arreglo con los datos
      for (var i = 0; i < result.length; i++) {
        //UNA ETIQUETA tr por cada registro
        var trResgistro = document.createElement("tr");

        
        var celdaTipoDocumento = document.createElement("th")
        let celdaIdentificacion = document.createElement("th")
        let celdaNombre = document.createElement("th")
        let celdaApellido = document.createElement("th")
        let celdaTelefono = document.createElement("th")
        let celdaCorreo = document.createElement("th")
        let celdaDireccion = document.createElement("th")
        let celdaCiudad = document.createElement("th")
        let celdaEstado = document.createElement("th")


        let celdaOpciones = document.createElement("th");
        let botonEditarCliente = document.createElement("button");
        botonEditarCliente.value=result[i]["id_cliente"];
        botonEditarCliente.innerHTML = "Editar";
        
        botonEditarCliente.onclick=function(e){
          $('#exampleModal').modal('show');
          consultarMedicoID(this.value);
        }

        botonEditarCliente.className = "btn btn-warning editar-cliente";

        
       
        celdaTipoDocumento.innerText = result[i]["tipo_documento"];
        celdaIdentificacion.innerText = result[i]["identificacion"];
        celdaNombre.innerText = result[i]["nombre"];
        celdaApellido.innerText = result[i]["apellido"];
        celdaTelefono.innerText = result[i]["telefono"];
        celdaCorreo.innerText = result[i]["correo"];
        celdaDireccion.innerText = result[i]["direccion"];
        celdaCiudad.innerText = result[i]["ciudad"]
        celdaEstado.innerText = result[i]["estado"];


      
        trResgistro.appendChild(celdaTipoDocumento);
        trResgistro.appendChild(celdaIdentificacion);
        trResgistro.appendChild(celdaNombre);;
        trResgistro.appendChild(celdaApellido);
        trResgistro.appendChild(celdaTelefono);
        trResgistro.appendChild(celdaCorreo);
        trResgistro.appendChild(celdaDireccion);
        trResgistro.appendChild(celdaCiudad);
        trResgistro.appendChild(celdaEstado);


        celdaOpciones.appendChild(botonEditarCliente);
        trResgistro.appendChild(celdaOpciones)

       
        cuerpoTabla.appendChild(trResgistro);


        //creamos un td por cada campo de resgistro

      }
    },
    error: function (error) {
      
      alert("Error en la petición " + error);
    }
  })
  
}

function registrarClientee() {


    let formData = {
      "tipo_documento": document.getElementById("tipo_documento").value,
      "identificación": document.getElementById("identificación").value,
      "nombre": document.getElementById("nombre").value,
      "apellido": document.getElementById("apellido").value,
      "telefono": document.getElementById("telefono").value,
      "correo": document.getElementById("correo").value,
      "direccion": document.getElementById("direccion").value,
      "ciudad": document.getElementById("ciudad").value,
      "estado": document.getElementById("estado")
  
    };
  
    let camposValidos = true;
    let camposRequeridos = [
        "tipo_documento",
        "identificacion",
        "nombre",
        "apellido",
        "telefono",
        "correo",
        "direccion",
        "ciudad",
        "estadoInput"
    ];
  
    
    if (camposValidos) {
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
                limpiarMedico();
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
  if (valor.length < 10 || valor.length > 15) {
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
    return validarCiudad(direccion);
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
