import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import './App.css';
import Store from '../../store/Store';
import { Home, OracleList } from '..';
import Oracle from '../oracle/Oracle';

const App = () => {
	return (
		<Router basename='/ask-the-oracle'>
			<div className="App">
				<div className="App-nav">
					<NavLink exact to='/' className="Nav-link" activeClassName="Nav-link-active">Home</NavLink>
					<NavLink exact to='/oracles' className="Nav-link" activeClassName="Nav-link-active">Oracles</NavLink>
				</div>
				<div className="App-content">
					<Switch>
						<Route exact path='/' component={Home}></Route>
						<Route exact path='/oracles'><OracleList oracles={Store.oracles} /></Route>
						<Route exact path='/oracles/:id'><Oracle /></Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
