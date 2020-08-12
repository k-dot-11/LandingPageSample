import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './components/sections/Header';
import Hero from './components/sections/Hero';
import LandingPage from './pages/LandingPage';

function App() {
  return (
   <BrowserRouter>
      <Switch>
        <Route path="/">
         <LandingPage/>
        </Route>
      </Switch>
   </BrowserRouter>
  );
}

export default App;
