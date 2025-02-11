import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { Provider } from 'react-redux';
import { Counter } from './features/counter/Counter.jsx'
import store from '../src/app/store';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Counter />
    </Provider>
  </StrictMode>,
)
