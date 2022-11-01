import React, { FC, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { AppWrapper } from './style';
import { Container } from '../styled/Container';
import { Layout } from './style';
import NavBar from '../NavBar/NavBar';
import Content from '../Content/Content';
import UsersService from '../../services/usersService';

interface Props { }

const App: FC<Props> = () => {
  const [auth, setAuth] = useState(false);

  const handleHeaderBtnClick = () => {
    setAuth(auth => !auth)
  }

  return (
    <AppWrapper>
      <Header
        auth={auth}
        onBtnClick={handleHeaderBtnClick} />
      <Layout>
        <Container
          minHeight={'100%'}
          flex={'1 1 auto'}
          display={'flex'}
        >
          <NavBar />
          <Content />
        </Container>
      </Layout>
    </AppWrapper>
  );
}

export default App;