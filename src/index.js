import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from './user';
import Contact from './Contact';
import NotFound from './NotFound';
import { Route, NavLink, BrowserRouter as Router,Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


const routing = (
  <Router>
    <div className="div_routes">
      <ul className="ul_routes" >
        <li>
          <NavLink activeClassName="activeColor" to="/">Home</NavLink>
        </li>
        <li style={{paddingLeft:"5em"}}>
          <NavLink activeClassName="activeColor" to="/users">Users</NavLink>
        </li>
        <li style={{paddingLeft:"5em"}}>
          <NavLink activeClassName="activeColor" to="/contacts">Contact</NavLink>
        </li>
      </ul>
      <Switch>
	      <Route exact path="/" component={App} />
	      <Route exact path="/users/" component={Users} />
	      <Route path="/users/:id" component={Users} />
	      <Route path="/contacts" component={Contact} />
	      <Route component={NotFound} />
	  </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();