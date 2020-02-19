import * as React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '..';

const Home: React.FC = () => (
  <div>
    <Header></Header>
    <Link to='/oracles' className="App-link">ask...</Link>
  </div>
);

export default Home;