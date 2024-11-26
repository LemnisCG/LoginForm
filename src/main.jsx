import { StrictMode } from 'react'; //Detecta probelmas
import { createRoot } from 'react-dom/client'; //Renderizando react al dom
import App from './components/app';

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
