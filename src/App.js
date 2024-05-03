import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Slider from './components/slider';
import ProductList from './components/productslist';
import About from './components/about';
import { Routes,Route } from 'react-router-dom';
import ProductDetails from './components/productdetails';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          <Slider />
      <ProductList/>
          </>
        }/>
        <Route path="/About" element={<About/>}/>
        <Route path="product/:ProductId" element={<ProductDetails/>}/>
      </Routes>
      
    </div>
  );
}

export default App;