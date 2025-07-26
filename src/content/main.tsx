import './index.css';
import { createRoot } from 'react-dom/client'
import App from './App'

const root = document.createElement("div");
root.id = "darkto";
document.body.appendChild(root);

createRoot(root).render(
  <App />
)
