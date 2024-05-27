import Home from './pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { Login, Signup, Forgotpassword } from './components'
import { LoginData } from './types/types'

const App = () => {
  const { loggedIn, handleLogin, handleSignup, handleLogout, username } = useAuth();

  const handleLoginWrapper = (formData: LoginData, rememberMe: boolean) => {
    handleLogin(formData, rememberMe);
  };

  return (
    <Routes>
      <Route path="/" element={<Home loggedIn={loggedIn} onLogout={handleLogout} username={username}/>} />
      <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <Login onLogin={handleLoginWrapper} />} />
      <Route path="/forgot-password" element={loggedIn ? <Navigate to="/" /> : <Forgotpassword />} />
      <Route path="/signup" element={loggedIn ? <Navigate to="/" /> : <Signup onSignup={handleSignup} />} />
    </Routes>
  )
}

export default App