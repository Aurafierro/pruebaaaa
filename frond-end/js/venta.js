//Se almacena la URL de la API
let url="http://localhost:8080/api/v1/venta/";

function listarVenta() {
    var busqueda = document.getElementById("buscar").value;
    var urlBusqueda = url;
    if (busqueda != "") {
        urlBusqueda += "busquedafiltro/" + busqueda;
    }
    $.ajax({
        url: urlBusqueda,
        type: "GET",
        success: function (result) {
            console.log(result);
            let cuerpoTablaVenta = document.getElementById("cuerpoTablaVenta");
            cuerpoTablaVenta.innerHTML = "";
            for (let i = 0; i < result.length; i++) {
                //se crea una etiqueta tr por cada registro
                let trRegistro = document.createElement("tr"); //fila por cada registro de la tabla
                let celdaId = document.createElement("td");
                let celdaIdCliente = document.createElement("td")
                let celdaTotalVenta = document.createElement("td");
                let celdaFechaVenta = document.createElement("td");
                let celdaEstado = document.createElement("td");

                celdaId.innerText = result[i]["id_venta"];

                celdaIdCliente.innerText = result[i]["cliente"]["nombre"]; // Aquí se cambió a "nombre"
                celdaTotalVenta.innerText = result[i]["total"];
                celdaFechaVenta.innerText = result[i]["fecha_venta"];
                celdaEstado.innerText = result[i]["estado"];

                trRegistro.appendChild(celdaId);
                trRegistro.appendChild(celdaIdCliente);
                trRegistro.appendChild(celdaTotalVenta);
                trRegistro.appendChild(celdaFechaVenta);
                trRegistro.appendChild(celdaEstado);

                let celdaOpcion = document.createElement("td");
                let botonEditarVenta = document.createElement("button");
                botonEditarVenta.value = result[i]["id_venta"];
                botonEditarVenta.innerHTML = " Editar";

                botonEditarVenta.onclick = function (e) {
                    $('#exampleModal').modal('show');
                    consultarVentaID(this.value);
                }
                botonEditarVenta.className = "btn btn-warning"

                celdaOpcion.appendChild(botonEditarVenta);
                trRegistro.appendChild(celdaOpcion);

                cuerpoTablaVenta.appendChild(trRegistro);


                let botonEliminarventa = document.createElement("button");
                botonEliminarventa.innerHTML = "Eliminar";
                botonEliminarventa.className = "btn btn-danger";

                let ventaIdParaEliminar = result[i]["id_venta"];
                botonEliminarventa.onclick = function () {
                    eliminarVenta(ventaIdParaEliminar);
                }
                celdaOpcion.appendChild(botonEliminarventa);
                trRegistro.appendChild(celdaOpcion)
            }
        },
        error:function(error){
            alert("Error en la peticion ${error}");
        }
    })
 
}

function RegistrarVenta() {
    
    let cliente = document.getElementById("cliente").value;
    let total = document.getElementById("total").value;
    let fecha_venta =document.getElementById("fecha_venta").value;
    let estado = document.getElementById("estado").value;
  
    
    let formData = {
        
        "cliente": cliente,
        "total": total,
        "fecha_venta": fecha_venta,
        "estado": estado
    };

    if(validarCampos()){

        $.ajax({
          url: url,
          type: "POST",
          data: formData,
          success: function(result){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Su venta se registró correctamente",
                showConfirmButton: false,
                timer: 1500
              
            });
          
          },
          error: function(error){
            Swal.fire("Alerta", "¡Error al guardar! "+error.responseText, "warning");
          }
        });
      }else{
     
        Swal.fire({
          title: "Error!",
          text: "Faltan campos por llenar",
          icon: "error"
        });
      }
}



function validarCampos() {
   
   
    var cliente = document.getElementById("cliente");  
    var total = document.getElementById("total");  
    var fecha_venta = document.getElementById("fecha_venta");  
    var estado = document.getElementById("estado");  
   
    

    return  validarCliente(cliente) && validarTotal(total) && validarFechaVenta(fecha_venta) && validarEstado(estado) ;
}
function validarCliente(campoCliente) {
    if (!campoCliente || !campoCliente.value) {
        return false;
    }

    let valor = campoCliente.value;
    let valido = true;
    if (valor.length <=0 || valor.length > 45) {
        valido = false;
    }

    if (valido) {
        campoCliente.className = "form-control is-valid";
    } else {
        campoCliente.className = "form-control is-invalid";
    }
    return valido;
}



function validarTotal(totalVenta) {
    if (!totalVenta || !totalVenta.value) {
        return false;
    }

    let valor = totalVenta.value;
    let valido = true;
    if (valor.length <0 || valor.length > 10) {
        valido = false;
    }

    if (valido) {
        totalVenta.className = "form-control is-valid";
    } else {
        totalVenta.className = "form-control is-invalid";
    }
    return valido;
}

function validarFechaVenta(fechaVenta) {
    if (!fechaVenta || !fechaVenta.value) {
        return false;
    }

    let valor = fechaVenta.value;
    let valido = true;
    if (valor.length <0 || valor.length > 15) {
        valido = false;
    }

    if (valido) {
        fechaVenta.className = "form-control is-valid";
    } else {
        fechaVenta.className = "form-control is-invalid";
    }
    return valido;
}

function validarEstado(Estado){
    let valor = Estado.value;
    let valido = true;
    if (valor.length <=0 || valor.length >9) {
        valido = false
    }
    if (valido) {
        Estado.className = "form-control is-valid"
    }
    else{
        Estado.className = "form-control is-invalid"
    }
    return valido;
}



function actualizarVenta() {
    var id_venta = document.getElementById("id_venta").value;

    let formData = {
        "cliente": document.getElementById("cliente").value,
        "total_venta": document.getElementById("total_venta").value,
        "fecha_venta": document.getElementById("fecha_venta").value,
        "estado": document.getElementById("estado").value
    };


    if(validarCampos()){
    $.ajax({
        url: url + id_venta,
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
            
            listarVenta(); 
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

function eliminarVenta(id_venta){
    swal.fire({
      title: '¿Estás seguro?',
      text: "Esta opción no tiene marcha atrás",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor:'#3085d6',
      cancelButtonText:'Cancelar',
      cancelButtonColor:'#d33',
      confirmButtonText:'Sí, !Eliminar!',
  
    }).then((result)=>{
      if (result.isConfirmed){
        $.ajax({
          url: url +id_venta,
          type: "DELETE",
          success: function(result){
            swal.fire(
              'Eliminado',
              'La venta ha sido eliminado ',
              'success'
            );
            listarVenta();//recarga la lista de ventas
          },
          error: function(error){
            Swal.fire(
              'Error',
              'No se puede eliminar el registro ',
              'Error',
            );
          }
        });
      }
    });
  }