import { BrowserRouter } from 'react-router-dom';

import { AppContext, AppThemeContext } from '@context/';

import { AppRouter } from './router';


const App = () => (
  <BrowserRouter>
    <AppContext>
      <AppThemeContext>
        <AppRouter />
      </AppThemeContext>
    </AppContext>

  </BrowserRouter>
);

export default App;
