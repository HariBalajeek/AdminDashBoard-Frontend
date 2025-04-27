import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { JobProvider } from './context/JobContext.jsx'

createRoot(document.getElementById('root')).render(
 <JobProvider>
   <BrowserRouter>
    <App />
  </BrowserRouter>
 </JobProvider>

)
