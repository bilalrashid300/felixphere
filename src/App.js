import React from 'react';
import {  Layout } from 'antd';
import './App.css';
import Home from './Pages/Home';

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import "./assets/fonts/Poppins-Regular.ttf";

import About from './Pages/About';
import More from './Pages/More';



const App = () => (

  <BrowserRouter>
<Layout className="mainLayout">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<About />} />
      <Route path="/tokenomics" element={<More />} />

    </Routes>
    </Layout>

  </BrowserRouter>



     
);

export default App;