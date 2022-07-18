import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap";
import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemListContainerFiltrado from './Components/ItemListContainerFiltrado';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/producto/:id" element={<ItemDetailContainer />} />
      <Route path="/producto/:categoria1/:categoria2" element={<ItemListContainerFiltrado />} />
    </Routes>
  </BrowserRouter>
)
;