import React from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import Store from '../../store/Store';
import { Home, OracleList } from '..';

const App = () => {
	return (
		<div className="App">

			{/* <header className="App-header">
				<Header name="Ironsworn" />
				<img src={logo} className="App-logo" alt="logo" />
			</header> */}

			<div className="App-content">


				<Home/>
				<OracleList oracles={Store.oracles}/>

			</div>
		</div>
	);
}

export default App;
