import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CompoIndex from './pages/ComponentPages/CompoIndex';
import MingoButton from './pages/ComponentPages/MingoButton';
import MingoCards from './pages/ComponentPages/MingoCards';
import MingoPagination from './pages/ComponentPages/MingoPagination';
import MingoSearchBar from './pages/ComponentPages/MingoSearchBar';
import MingoTabs from './pages/ComponentPages/MingoTabs';
import MingoTags from './pages/ComponentPages/MingoTags';
import ProgressBar from './pages/ComponentPages/ProgressBar';
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
        <Route exact path='/mingotabs' element={<MingoTabs />} />
        <Route exact path='/mingotags' element={<MingoTags />} />
        <Route exact path='/mingosearch' element={<MingoSearchBar />} />
        <Route exact path='/pagination' element={<MingoPagination />} />
        <Route exact path='/cards' element={<MingoCards />} />
        <Route exact path='/progressbar' element={<ProgressBar />} />
      </Routes>
    </Router>
  );
}

export default App;
