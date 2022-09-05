import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/context'

const Login = () => {
  const { login, currentUser } = useAuthContext()
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>('')

  const navigate = useNavigate()
  const handleLogin = async (e: any) => {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await login(emailRef.current!.value, passwordRef.current!.value)
      navigate('/')
    } catch (error) {
      setError('wrong email or password')
    }
    setLoading(false)
  }

  return (
    <div>
      {error && <span>{error}</span>}
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="purpose" ref={emailRef} />
        <input type="password" placeholder="purpose" ref={passwordRef} />

        <button disabled={loading}> login</button>
      </form>
      <span>
        fogot password <Link to="/update-password">reset</Link>
      </span>
      <span>
        dont have account yet
        <Link to="/signup">sign up</Link>
      </span>
    </div>
  )
}

export default Login
