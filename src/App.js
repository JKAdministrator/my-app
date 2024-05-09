import './App.css';
import ProductPage from './ProductPage/ProductPage';
function App() {
  return (
    <div className="App">
        <ProductPage
          nombre='Basic Quiksilver Talle S '
          descripcion='
          Remera manga corta &#13;&#10;
          Color: Gris &#13;&#10;
          Talle: S &#13;&#10;
          Tela: Jersey Snow &#13;&#10;
          Fit: Regular &#13;&#10;
          TELA: 50% Poliéster, 25% Algodón, 25% Viscosa'
          precio={17400}
          sku='QSL-12345-S-BL'
          cantidadDisponible={10}
        ></ProductPage>
      <footer className='footer'>
        Trabajo Practico Unidad 3
      </footer>
    </div>
  );
}

export default App;
