//scss
import './App.scss';

//route
import React, { Component } from "react";
import { Route } from 'react-router-dom';

//komponente
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

//pages
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Event from './pages/Event/Event';

//main App Component Class
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main>
          <Route path="/home" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/event" component={Event} />
        </Main>
        <Footer />
      </>
    );
  }
}

export default App;
