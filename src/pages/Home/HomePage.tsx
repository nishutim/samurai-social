import React, { FC } from 'react';
import { HomePageWrapper, Layout } from './style';
import { Container } from '../../components/styled';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Content from '../../components/Content/Content';

const HomePage: FC = () => {
   return (
      <HomePageWrapper>
         <Header />
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
      </HomePageWrapper>
   );
}

export default HomePage;