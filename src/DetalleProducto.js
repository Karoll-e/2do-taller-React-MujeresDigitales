import React from "react";

const DetalleProducto = ({ nombre, precio, descripcion }) => {
  return (
    <div>
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <p>{descripcion}</p>
    </div>
  );
};

export default DetalleProducto;
