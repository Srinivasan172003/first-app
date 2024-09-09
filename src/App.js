import React from 'react';
import './App.css';
import Footer from './component/footer/footer';
import Header from './component/header/header';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <h1> hello</h1>
        <h4> getting react</h4>
      </div>
      <Header> this is header</Header>
      <Footer></Footer>
      </React.Fragment>
  );
}

export default App;
