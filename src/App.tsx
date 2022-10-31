import React from 'react';
import { AppWrapper } from './components/styled/AppWrapper';
import { Container } from './components/styled/Container';

function App() {
  return (
    <AppWrapper>
      <header>
        <Container>
          Hello
        </Container>
      </header>
      <button>World</button>
    </AppWrapper>
  );
}

export default App;