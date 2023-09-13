import { BrowserRouter } from 'react-router-dom';

import { AppContext, AppThemeContext } from '@context/';
import { GlobalStyle } from '@style/';

import { AppRouter } from './router';


const App = () => (
  <AppContext>
    <BrowserRouter>
      <AppThemeContext>
        <GlobalStyle />
        <AppRouter />
      </AppThemeContext>
    </BrowserRouter>
  </AppContext>
);

export default App;
