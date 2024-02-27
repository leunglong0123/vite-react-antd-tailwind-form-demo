import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Nunito',
          fontSize: 16,
          colorPrimary: '#6B47ED',
          colorBgContainer: '#FFFFFF'
        },
        components: {
          Form: {
            labelFontSize: 18
          },
          Radio: {
            dotColorDisabled: '#D8D8D8',
            radioSize: 12,
            dotSize: 0,
            colorBorder: '#6B47ED'
          },
          Switch: {
            handleSize: 16,
            trackPadding: 4
          }
        }
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
