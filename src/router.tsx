import { Routes, Route } from 'react-router-dom';

import { RequireAuth } from '@hocs/';
import { Layout } from '@layouts/';
import { MainPage, Login } from '@pages/';


export const AppRouter = () => (
  <Routes>
    <Route element={ <RequireAuth /> } path="/skypro-music">
      <Route element={ <Layout /> }>
        <Route index element={ <MainPage /> } />
      </Route>
    </Route>
    <Route element={ <Login /> } path="/login" />
  </Routes>
);
