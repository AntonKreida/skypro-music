import { BrowserRouter } from 'react-router-dom';

import { AppContext, AppThemeContext } from '@context/';
import { GlobalStyle } from '@style/';

import { AppRouter } from './router';


const App = () => (
  <BrowserRouter>
    <AppContext>
      <AppThemeContext>
        <GlobalStyle />
        <AppRouter />
      </AppThemeContext>
    </AppContext>

  </BrowserRouter>
);

export default App;
