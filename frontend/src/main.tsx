import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ContextProvider } from './context/Context.tsx'
import { UserProvider } from './context/userContext.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <UserProvider>
      <ContextProvider>
        <Toaster position='bottom-right' />
        <App />
      </ContextProvider>
    </UserProvider>
  </Router>
)
