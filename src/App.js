import React from 'react';
import './index.css';
import MyNav from './components/navbar/MyNav.jsx';
import MyFooter from './components/footer/MyFooter.jsx';
import Welcome from './components/welcome/Welcome.jsx';
import CardContainer from './components/cardContainer/CardContainer.jsx';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
        <MyNav/>
        <Container>
          <Welcome/>
          <CardContainer/>
        </Container>
        
        <MyFooter/>
        {/* <Main/> */}

    </div>
  );
}

export default App;
