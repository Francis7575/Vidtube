import { Routes, Route } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { Login, Signup, Home, VideoDetail, ChannelDetail, SearchFeed } from './components'

const App = () => {
  const { handleLogin, handleSignup } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Routes>
  )
}

export default App