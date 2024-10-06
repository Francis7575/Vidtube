import { Routes, Route } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { Login, Signup, Home, VideoDetail, ChannelDetail, SearchFeed, Layout } from './components'

const App = () => {
  const { handleLogin, handleSignup } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Route>
    </Routes>
  )
}

export default App