import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Thisweek from './components/Thisweek';
import Battle from './components/Battle';
import Popular from './components/Popular';
import Popularbattle from './components/Populatbattle';
import Mylist from './components/Mylist';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render () {
    return(
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">This Week</Link></li>
              <li><Link to="/Battle/">Battle</Link></li>
              <li><Link to="/Popular/">Popular</Link></li>
              <li><Link to="/Popularbattle/">Popular battle</Link></li>
              <li><Link to="/Mylist/">My list</Link></li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/Battle/">
            <Battle/>
          </Route>
          <Route path="/Popular/">
            <Popular/>
          </Route>
          <Route path="/Popularbattle/">
            <Popularbattle/>
          </Route>
          <Route path="/Mylist/">
            <Mylist/>
          </Route>
          <Route path="/">
            <Thisweek/>
          </Route>
        </Switch>
      </Router>

    );
  }
}

export default App;