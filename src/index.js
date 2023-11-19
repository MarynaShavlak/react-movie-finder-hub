import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'react-avatar';
import { ToastContainer } from 'react-toastify';
import { App } from 'components/App';
import GlobalStyle from 'components/GlobalStyle';

import { getRandomColors } from 'utils/getRandomColors';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <BrowserRouter basename="/react-movie-finder-hub/">
        <ConfigProvider colors={getRandomColors()}>
          <App />
        </ConfigProvider>
        <ToastContainer
          position="top-right"
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover={false}
          theme="dark"
          autoClose={3000}
        />
      </BrowserRouter>
      <GlobalStyle />
    </>
  </React.StrictMode>
);
