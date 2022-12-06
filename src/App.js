import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CompoIndex from './pages/ComponentPages/CompoIndex';
import MingoButton from './pages/ComponentPages/MingoButton';
import Home from './pages/Home/Home';
import Introduction from './pages/Home/Introduction';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/introduction' element={<Introduction />} />
        <Route exact path='/components' element={<CompoIndex />} />
        <Route exact path='/mingobtn' element={<MingoButton />} />
      </Routes>
    </Router>
  );
}

export default App;
