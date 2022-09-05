import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/context'

const Signup = () => {
  const { signup } = useAuthContext()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordConfirmRef =
    useRef() as React.MutableRefObject<HTMLInputElement>

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (passwordRef.current!.value !== passwordConfirmRef.current!.value) {
      return setError('passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      navigate('/')
      await signup(emailRef.current!.value, passwordRef.current!.value)
    } catch (error) {
      setError('failed to create account')
      console.error(error)
    }
    setLoading(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <span> {error} </span>}
        <input type="email" placeholder="email" ref={emailRef} />
        <input type="password" placeholder="password" ref={passwordRef} />
        <input
          type="password"
          placeholder="password"
          ref={passwordConfirmRef}
        />

        <button disabled={loading}> sign up</button>
        <span>
          already have an account? <Link to="/login">Login</Link>{' '}
        </span>
      </form>
    </div>
  )
}

export default Signup
