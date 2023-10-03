import { BrowserRouter } from 'react-router-dom';

import { AppAudioContext, AppContext, AppThemeContext } from '@context/';

import { AppRouter } from './router';
import { GlobalStyle } from './style';


const App = () => (
  <AppContext>
    <BrowserRouter>
      <AppThemeContext>
        <GlobalStyle />
        <AppAudioContext>
          <AppRouter />
        </AppAudioContext>
      </AppThemeContext>
    </BrowserRouter>
  </AppContext>
);

export default App;
