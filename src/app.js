import React from 'react';
import ReactDOM from 'react-dom';
import totoImg from './images/toto.jpg';
import './styles.scss';

const logoStyles = {
  width: '100px',
};


const App = () => (
  <div>
    <h2>Toto React App Starter</h2>
    <img src={totoImg} alt="Toto Logo" style={logoStyles} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
