import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import './data.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route element=<Home/> path="/"/>
      <Route element=<Recipes/> path="/recipes"/>
      <Route element=<RecipeDetails/> path="/recipes/:recipeId"/>
    </Routes>
  </BrowserRouter>
  </>
  );
