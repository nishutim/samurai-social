import React, { FC, useEffect } from 'react';
import { HomePageWrapper, Layout } from './style';
import { Container } from '../../components/styled';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Content from '../../components/Content/Content';
import { useAppDispatch } from '../../hooks/redux';
import { fetchAuthUserData } from '../../store/reducers/auth/thunk-creators';

const HomePage: FC = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchAuthUserData());
   }, []);

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