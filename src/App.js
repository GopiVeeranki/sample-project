import './App.css';
import React, { Fragment } from 'react'
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Search from './components/search/Search';
import Explore from './components/explore/Explore';
import Adventure from './components/adventure/Adventure';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar></Navbar>
        <Banner></Banner>
        <Search></Search>
        <Explore></Explore>
        <Adventure></Adventure>
        <Gallery></Gallery>
        <Contact></Contact>
        <Footer></Footer>
      </Fragment>
    </Router>
  )
}

export default App;
