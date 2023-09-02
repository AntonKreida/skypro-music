import { BrowserRouter } from 'react-router-dom';

import { AppContext } from '@context/';

import { AppRouter } from './router';


const App = () => (
  <BrowserRouter>
    <AppContext>
      <AppRouter />
    </AppContext>
  </BrowserRouter>
);

export default App;
