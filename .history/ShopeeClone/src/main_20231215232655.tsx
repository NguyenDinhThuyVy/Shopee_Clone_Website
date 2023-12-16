import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
ReactDOM.createRoot(document.getElementById('root')!).render(
  const queryClient = new QueryClient()
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </BrowserRouter>
  </React.StrictMode>
)
