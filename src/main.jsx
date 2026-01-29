import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
import arEG from 'antd/locale/ar_EG';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ConfigProvider
          locale={arEG}
          direction="rtl"
          theme={{
            token: {
              colorPrimary: '#2563eb',
              borderRadius: 8,
              fontFamily: "'Cairo', 'Segoe UI', Tahoma, sans-serif",
            },
          }}
        >
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
