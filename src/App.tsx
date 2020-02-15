import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import OracleList from './components/OracleList';
import Store from './store/Store';

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<Header name="Ironsworn" />
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<div className="App-content">
				<OracleList oracles={Store.oracles} />
			</div>
		</div>
	);
}

export default App;
