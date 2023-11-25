import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { IndexRoutes } from './routes/index.routes'
import { Provider } from 'react-redux'
import store from './redux/store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
        <IndexRoutes />
  </React.StrictMode>
    </Provider>
  ,
)
