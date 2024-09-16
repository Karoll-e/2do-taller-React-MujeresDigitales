import "./App.css";
import ContadorClase from "./ContadorClase";
import ContadorFuncional from "./ContadorFuncional";
import DetalleProducto from "./DetalleProducto";
import ListaDeProductos from "./ListaDeProductos";
import Producto from "./Producto";
import Saludo from "./Saludo";

function App() {
  // lista productos ejercicio 4
  const productos = [
    { nombreProducto: "iPhone 16 Pro", precio: 999 },
    { nombreProducto: "AirPods 4", precio: 129 },
    { nombreProducto: "iPad Pro", precio: 999 },
  ];

  return (
    <div className="App">
      <div className="card-container">
        {/* Ejercicio 1 */}
        <div className="card">
          <h1>Saludo</h1>
          <Saludo nombre={"Karoll"} />
        </div>

        {/* Ejercicio 2 */}
        <div className="card">
          <h1>Producto</h1>
          <Producto nombreProducto={"Iphone 16"} precio={"799"} />
        </div>

        {/* Ejercicio 3 */}
        <div className="card">
          <h1>Contador Funcional</h1>
          <ContadorFuncional />
        </div>

        <div className="card">
          <h1>Contador Clase</h1>
          <ContadorClase />
        </div>

        {/* Ejercicio 4 */}
        <div className="card">
          <h1>Lista de Productos</h1>
          <ListaDeProductos productos={productos} />
        </div>

        {/* Ejercicio extra */}
        <div className="card">
          <h1>Detalle de Productos</h1>
          <DetalleProducto
            nombre="iPhone 16 Pro"
            precio={999}
            descripcion="El último iPhone con pantalla OLED de 6.7 pulgadas"
          />
          <DetalleProducto
            nombre="AirPods 4"
            precio={129}
            descripcion="Auriculares inalámbricos con cancelación de ruido"
          />
          <DetalleProducto
            nombre="iPad Pro"
            precio={999}
            descripcion="La tablet más avanzada de Apple"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
