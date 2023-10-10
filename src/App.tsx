import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { AppAudioContext, AppContext, AppThemeContext } from '@context/';

import { AppRouter } from './router';
import { GlobalStyle } from './style';
import { store, persistor } from './redux';


const App = () => (
  <Provider store={ store }>
    <PersistGate loading={ null } persistor={ persistor } />
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
