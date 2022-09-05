import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/context'

const Home = () => {
  const { currentUser, signout } = useAuthContext()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await signout()
    navigate('/login')
  }
  return (
    <div>
      {currentUser && (
        <>
          <button onClick={handleLogout}>logout</button>
          <span>welcome Home {currentUser.email}</span>
        </>
      )}
      home
    </div>
  )
}

export default Home
