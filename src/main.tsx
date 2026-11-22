import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import arEG from 'antd/locale/ar_EG'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      locale={arEG}
      direction="rtl"
      theme={{
        token: {
          colorPrimary: '#1877F2',
          colorSuccess: '#42B883',
          colorError: '#E41E3F',
          colorWarning: '#F59E0B',
          borderRadius: 8,
          fontFamily: 'Tajawal, Arial, sans-serif',
          colorBgLayout: '#F0F2F5',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
