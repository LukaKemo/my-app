//scss
import './App.scss';

//route
import React, { Component, useEffect } from "react";
import { Route } from 'react-router-dom';

//komponente
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

//pages
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Event from './pages/Event/Event';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Admin from './pages/Admin/Admin';

//main App Component Class
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main>
            <Route exact path="/" component={Home} />
            <Route path="/events" component={Events} />
            <Route path="/event/:id" component={Event} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/admin" component={Admin} />
        </Main>
        <Footer />
      </>
    );
  }
}

export default App;
