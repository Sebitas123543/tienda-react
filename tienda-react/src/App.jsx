import ProductoCard from './components/ProductoCard';
import { productos } from './data/producto';
import './App.css';
import { useState } from "react";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  const disponibles = productos.filter(producto => producto.stock > 0);
  const hayAgotados = productos.some(producto => producto.stock === 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

 const productosFiltrados = productos.filter(producto => {
  const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
  const coincideCategoria = categoria === "Todas" || producto.categoria === categoria;
  const coincideStock = !soloDisponibles || producto.stock > 0;
  return coincideNombre && coincideCategoria && coincideStock;
});

  const productosOrdenados = [...productosFiltrados].sort(
  (a, b) => a.precio - b.precio);


  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      <input
  type="text"
  placeholder="Buscar producto..."
  value={busqueda}
  onChange={(evento) => {
    setBusqueda(evento.target.value);
  }}
/>

    <select
  value={categoria}
  onChange={(evento) => setCategoria(evento.target.value)}
>
  <option value="Todas">Todas</option>
  <option value="Perifericos">Periféricos</option>
  <option value="Pantallas">Pantallas</option>
  <option value="Hardware">Hardware</option>
  <option value="Audio">Audio</option>
  <option value="Muebles">Muebles</option>
</select>

<label>
  <input
    type="checkbox"
    checked={soloDisponibles}
    onChange={(evento) => setSoloDisponibles(evento.target.checked)}
  />
  Mostrar solamente disponibles
</label>

<button
  onClick={() => {
    setBusqueda("");
    setCategoria("Todas");
    setSoloDisponibles(false);
  }}
>
  Limpiar filtros
</button>

      <p>Productos encontrados: {productosFiltrados.length}</p>

      <p>Productos disponibles: {disponibles.length}</p>
      <p>Valor del inventario: ${valorInventario}</p>
      <p>{hayAgotados ? 'Hay productos agotados' : 'Todos los productos tienen stock'}</p>

      <section className="productos">
        {productosOrdenados.map(producto => (
  <ProductoCard key={producto.id} producto={producto} />
))}
      </section>

      {
  productosFiltrados.length === 0
    ? <p>No se encontraron productos.</p>
    : null
}

      <h2>Disponibles</h2>
      <section className="productos">
        {disponibles.map(producto => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </section>
    </main>
  );
}

export default App;