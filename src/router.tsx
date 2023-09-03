import { Routes, Route } from 'react-router-dom';

import { RequireAuth } from '@hocs/';
import { Layout } from '@layouts/';
import {
  MainPage, Login, SignIn, NotFound, Favorites
} from '@pages/';


export const AppRouter = () => (
  <Routes>
    <Route element={ <RequireAuth /> } path="/skypro-music">
      <Route element={ <Layout /> }>
        <Route index element={ <MainPage /> } />
        <Route element={ <Favorites /> } path="/skypro-music/favorites" />
        <Route element={ <NotFound /> } path="*" />
      </Route>
    </Route>
    <Route element={ <Login /> } path="/login" />
    <Route element={ <SignIn /> } path="/signIn" />
  </Routes>
);
