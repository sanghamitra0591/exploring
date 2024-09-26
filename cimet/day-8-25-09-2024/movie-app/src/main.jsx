import { createRoot } from 'react-dom/client'
import App from './Pages/App';
// import './index.css'
import { BrowserRouter } from 'react-router-dom';
import MediaContextProvider from './Context/MediaContext';

createRoot(document.getElementById('root')).render(
  <MediaContextProvider>
    <BrowserRouter>
      < App />
    </BrowserRouter>
  </MediaContextProvider>

)
