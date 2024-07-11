import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { Login, Signup, Forgotpassword, VideoDetail, ChannelDetail, SearchFeed } from './components'
import { LoginData } from './types/types'

const App = () => {
  const { handleLogin, handleSignup } = useAuth();
  const handleLoginWrapper = (formData: LoginData, rememberMe: boolean) => {
    handleLogin(formData, rememberMe);
  };

  return (
    <Routes>
      <Route path="/Vidtube" element={<Home />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/login" element={<Login onLogin={handleLoginWrapper} />} />
      <Route path="/forgot-password" element={<Forgotpassword />} />
      <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Routes>
  )
}

export default App