
import {
  BrowserRouter as Router,


  NavLink, Route, Switch
} from "react-router-dom";
import './App.css';
import Games from './Game-Component/Games';


function App() {
  return (
    <>
      <main className="container">
        <Router>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            Game Store!
            <NavLink to="/games" className="nav-link" activeClassName="active">Games</NavLink>

            <NavLink to="/games" className="nav-link" activeClassName="active">Consoles</NavLink>

            <NavLink to="/games" className="nav-link" activeClassName="active">T-Shirts</NavLink>

            <NavLink to="/games" className="nav-link" activeClassName="active">Your Cart</NavLink>

          </nav>

          <Switch>
            <Route path="/games">
              <Games />
            </Route>

          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
