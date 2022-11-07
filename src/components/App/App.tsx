import React, { FC, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { useAppDispatch } from '../../hooks/redux';
import { checkAuth } from '../../store/reducers/auth/thunk-creators';
import Preloader from '../Preloader/Preloader';
import AppRouter from '../../router/AppRouter';

const App: FC = () => {
  const [initialized, setInitialized] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth())
      .then(() => setInitialized(true));
  }, []);

  if (!initialized) return <Preloader />

  return <AppRouter />
}

export default App;