//scss
import './App.scss';

//route
import React, { Component, useEffect, useState } from "react";
import { Route } from 'react-router-dom';

//komponente
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


//pages
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Event from './pages/Event/Event';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Admin from './pages/Admin/Admin';

//main App Component Class
function App () {
    const [user, setUser] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  
    const handleLogin = e => {
      e.preventDefault();
      setUser(true);
    }

    const handleLogout = e => {
      e.preventDefault();
      setUser(false);
    }

    useEffect(() => {
      console.log(localStorage.getItem("authToken"));
      console.log(localStorage.getItem("isAdmin"));
    }, []);

    return (
      <>
        <Header />
        <Main>
            <Route exact path="/" component={Home} />
            <Route path="/events" component={Events} />
            <Route path="/event/:id" component={Event} />
            <Route path="/login" component={Login} handleLogin={handleLogin} render={props => <Login {...props} user={user.toString()} handleLogin={handleLogin} />} />
            <Route path="/register" component={Register} />
            <ProtectedRoute path="/admin" component={Admin}  />
        </Main>
        <Footer />
      </>
    );
  }


export default App;
