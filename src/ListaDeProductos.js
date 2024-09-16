import React from "react";
import Producto from './Producto'; 

const ListaDeProductos = ({ productos }) => {
    return (
        <div>
            {productos.map((producto, index) => (
                <Producto 
                    key={index} 
                    nombreProducto={producto.nombreProducto} 
                    precio={producto.precio} 
                />
            ))}
        </div>
    );
};

export default ListaDeProductos;