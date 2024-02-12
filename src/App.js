import React from 'react';
import MyNav from './components/navbar/MyNav.jsx'
import MyFooter from './components/footer/MyFooter.jsx'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
        <MyNav/>
        <Container>
          <p className='p-4 fw-bold'> ciao</p>
        </Container>
        <MyFooter/>
        {/* <Main/> */}

    </div>
  );
}

export default App;
