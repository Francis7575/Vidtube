import Home from './pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { Login, Signup, Forgotpassword, VideoDetail, ChannelDetail, SearchFeed } from './components'
import { LoginData } from './types/types'

const App = () => {
  const { loggedIn, handleLogin, handleSignup, handleLogout } = useAuth();

  const handleLoginWrapper = (formData: LoginData, rememberMe: boolean) => {
    handleLogin(formData, rememberMe);
  };

  return (
    <Routes>
      <Route path="/" element={loggedIn ? <Home loggedIn={loggedIn} onLogout={handleLogout} /> : <Navigate to="/login" />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <Login onLogin={handleLoginWrapper} />} />
      <Route path="/forgot-password" element={<Forgotpassword />} />
      <Route path="/signup" element={loggedIn ? <Navigate to="/" /> : <Signup onSignup={handleSignup} />} />
      <Route path="/search/:searchTerm" element={<SearchFeed  />} />
    </Routes>
  )
}

export default App