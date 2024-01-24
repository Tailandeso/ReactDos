import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"; 
import ItemListContainer from "./components/ItemListContainer"; 
import './components/Styles/styleGlobal.jsx'; 
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from './components/Contacto';
import Trolley from './components/Trolley';
import { ShoppingCartProvider } from './context/shoppingCartContext.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <ShoppingCartProvider>
      <NavBar />
      <div style={{ marginTop: '25px', padding: '25px', marginBottom: '25px' }}>
        <Routes>
          <Route exact path='/' element={<ItemListContainer />}/>
          <Route exact path='/contacto' element={<Contacto />}/>
          <Route exact path='/carrito' element={<Trolley />}/>
          <Route exact path='/producto/:id' element={<ItemDetailContainer />}/>
          <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />}/>
        </Routes>
      </div>

      </ShoppingCartProvider>
    </BrowserRouter>
  )
}



export default App;
