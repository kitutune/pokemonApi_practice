import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider, useDispatch } from 'react-redux';
import store from 'stores/Store';
import App from 'App';
// import "./index.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
