import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './authConfig';
import { MsalProvider } from '@azure/msal-react';

import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react';

const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </StrictMode>
);