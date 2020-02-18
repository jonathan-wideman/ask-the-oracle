import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';
import Store from '../../store/Store';
import { Home, OracleList } from '..';
import Oracle from '../oracle/Oracle';

const App = () => {
	return (
		<Router>
			<div className="App">
				<div className="App-nav">
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/oracles'>Oracles</Link>
						</li>
					</ul>
				</div>
				<div className="App-content">
					<Switch>
						<Route exact path='/' component={Home}></Route>
						<Route exact path='/oracles'><OracleList oracles={Store.oracles}/></Route>
						<Route exact path='/oracles/:id'><Oracle/></Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
