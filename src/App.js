import React, { Component } from 'react';
import './css/style.css';

import Nav from './component/Nav';
import Intro from './component/Intro';
import Profile from './component/Profile';
import Idea from './component/Idea';
import Capabilities from './component/Capabilities';
import Footer from './component/Footer';

import {Helmet} from 'react-helmet';
import Image2 from './images/2.jpeg';
import {Routes, Route} from 'react-router-dom';


class App extends Component{
  render() {
    return (
      <div className="content">
        <Helmet>
            <link rel="icon" href={Image2} />
            <title>Daus Portofolio</title>
            <script src="https://kit.fontawesome.com/4c536a6bd5.js" crossorigin="anonymous"></script>
            <script src="https://kit.fontawesome.com/3f64b12415.js" crossorigin="anonymous"></script>
        </Helmet>
        <Nav />
        <Routes>
          <Route exact path='/intro-react-cv'element={<Intro />} />
          <Route path='/profile'element={<Profile />} />
          <Route path='/idea'element={<Idea />} />
          <Route path='/capabilities'element={<Capabilities />} />
        </Routes>

        <Footer />
      </div>
    );
  };
};

export default App;
