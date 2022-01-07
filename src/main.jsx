import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import './style.css'
import './app.css'

const rootElement = document.querySelector('#root')
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
)