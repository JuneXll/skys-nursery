import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// Styles
import './App.css';
// Sections
import Home from './components/sections/Home';
import About from './components/sections/About';
import Inventory from './components/sections/Inventory';
import Delivery from './components/sections/Delivery';
import Contact from './components/sections/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// import NotFound from './components/sections/NotFound';

function App() {
  return (
    <div className="App">
      <Navigation/>
        <Container>
          <Home/>
          <About/>
          <Inventory/>
          <Delivery/>
          <Contact/>
        </Container>
      <Footer/>
    </div>
  );
}

export default App;

// {/* <Router>
//           <Switch>
//               <Container>
//                 {/* Main Pages */}
//                 <Route exact path='/' element={<Home/>}/>
//                 <Route exact path='/about-us' element={<About/>}/>
//                 <Route exact path='/inventory' element={<Inventory/>}/>
//                 <Route exact path='/delivery' element={<Delivery/>}/>
//                 <Route exact path='/contact-us' element={<Contact/>}/>
//               </Container>
//               <Route path='*' element={<NotFound/>}/>
//           </Switch>
//         </Router>  */}