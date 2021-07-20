import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import BeersList from './components/BeersList';
import Home from './components/Home';

import './App.css';
import BeerDetail from './components/BeerDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <nav >
          <ul className='nav'>
            <li>
              <Link to="/">homepage</Link>
            </li>
            <li>
              <Link to="/beers">beers list</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/beers">
            <BeersList />
          </Route>
          <Route exact path="/beers/:id">
            <BeerDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;