import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from '../src/App.jsx'
import './main.css'

const rootElement = document.querySelector('#root')
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
)