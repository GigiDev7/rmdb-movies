import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

// Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <Router>
      <Header />
      <Routes> 
        <Route path='/' element={<Home />}></Route>
        <Route path='/:movieId' element={<Movie/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
