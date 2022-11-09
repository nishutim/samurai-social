import React, { FC, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { checkAuth } from '../../store/reducers/auth/thunk-creators';
import Preloader from '../Preloader/Preloader';
import AppRouter from '../../router/AppRouter';
import { auth_selectError } from '../../store/reducers/auth/selectors';
import GlobalError from '../GlobalError/GlobalError';

const App: FC = () => {
  const error = useAppSelector(auth_selectError);

  const [initialized, setInitialized] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth())
      .then(() => setInitialized(true));
  }, []);

  if (!initialized) return <Preloader />
  if (error) return <GlobalError error={error} />

  return <AppRouter />
}

export default App;