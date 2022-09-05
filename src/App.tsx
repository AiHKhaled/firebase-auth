import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'
import UpdateProfile from './components/UpdateProfile'
import Home from './components/Home'
import PublicRoutes from './components/PublicRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Home />} />

            <Route path="/update-profile" element={<UpdateProfile />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
