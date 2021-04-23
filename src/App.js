//scss
import './App.scss';

//route
import React, { Component } from "react";
import { Route , Switch, Link, NavLink} from 'react-router-dom';

//komponente
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

//pages
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Event from './pages/Event/Event';

const PageNotFound = () =>(
  <div>404! - Loading page fail!<Link href="/home"></Link></div>
)

//main App Component Class
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main>
          <Switch>
            <Route path="/home" component={Home} exact={true} />
            <Route path="/events" component={Events} exact={true} />
            <Route path="/event" component={Event} exact={true} />
            <Route component={PageNotFound}/>
          </Switch>
        </Main>
        <Footer />
      </>
    );
  }
}

export default App;
