import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { FontsStyle } from '@style/';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <FontsStyle />
    <App />
  </StrictMode>
);