import { BrowserRouter } from 'react-router-dom';

import { AppAudioContext, AppContext, AppThemeContext } from '@context/';
import { GlobalStyle } from '@style/';

import { AppRouter } from './router';


const App = () => (
  <AppContext>
    <BrowserRouter>
      <AppThemeContext>
        <AppAudioContext>
          <GlobalStyle />
          <AppRouter />
        </AppAudioContext>
      </AppThemeContext>
    </BrowserRouter>
  </AppContext>
);

export default App;
