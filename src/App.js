import React from 'react';

import Header from '../src/components/header'

import { Container } from './styles'

function App() {
  return (
    <>
      
      <Container> 
      <Header />   
      <div className="App">     
        <div className="infoContent">
          <h1>Música para todos.</h1>
          <h4>Milhões de músicas à sua escolha. E nem precisa de cartão de crédito.</h4>
          <a href="/br/download/" id="generic-btn-premium"className="btnGreen">
							OBTENHA O SPOTIFY FREE
					</a>
        </div>
      </div>

      </Container>
    </>
  );
}

export default App;
