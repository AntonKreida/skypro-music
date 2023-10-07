import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { AppAudioContext, AppContext, AppThemeContext } from '@context/';

import { AppRouter } from './router';
import { GlobalStyle } from './style';
import { store } from './redux';


const App = () => (
  <Provider store={ store }>
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
  </Provider>
);

export default App;
