var url = "http://localhost:8080/api/v1/producto/";

function listarProducto() {
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

                

                celdaNombreProducto.innerText = result[i]["nombreproducto"];
                celdaDescripcion.innerText = result[i]["descripcion"];
                celdaCantidad.innerText = result[i]["cantidad"];
                celdaPrecio.innerText = result[i]["precio"];
                celdaIva.innerText = result[i]["iva"];
                
                celdaEstado.innerText = result[i]["estado"];
                
                

                trRegistro.appendChild(celdaNombreProducto);
                trRegistro.appendChild(celdaDescripcion);
                trRegistro.appendChild(celdaCantidad);
                trRegistro.appendChild(celdaPrecio);
                trRegistro.appendChild(celdaIva);
                trRegistro.appendChild(celdaDescuento);
                trRegistro.appendChild(celdaEstado);

                cuerpoTabla.appendChild(trRegistro);
            }
        },
        error: function (error) {
            alert("Error en la petición " + error);
        }
    })
}


function registrarProducto() {
   
    let nombreproducto = document.getElementById("nombreproducto").value;
    let descripcion = document.getElementById("descripcion").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio").value;
    let iva = document.getElementById("iva").value;
    let descuento = document.getElementById("descuento").value;
    
    let estado = document.getElementById("estado").value

    // Verificar que los campos requeridos no estén vacíos
    if (nombreproducto && descripcion && cantidad && precio && iva && descuento &&  estado) {
        let formData = {
            "nombreproducto": nombreproducto,
            "descripcion": descripcion,
            "precio": precio,
            "iva": iva,
            "descuento": descuento,
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
