import ReactDOM from 'react-dom/client';
import App from './components/app';
import { GlobalStyles } from './global.styled';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
