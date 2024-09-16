import React from "react";

function Producto({nombreProducto, precio}){
    return(
        <div>
            <h3>{nombreProducto}</h3>
            <p>Precio: ${precio}</p>
        </div>
    )
}

export default Producto;