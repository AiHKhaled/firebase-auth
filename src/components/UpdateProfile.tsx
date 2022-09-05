import { reload } from 'firebase/auth'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/context'

const UpdateProfile = () => {
  const { emailUpdate, passwordUpdate, currentUser } = useAuthContext()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordConfirmRef =
    useRef() as React.MutableRefObject<HTMLInputElement>

  const handleUpdate = async (e: any) => {
    e.preventDefault()
    if (passwordRef.current!.value !== passwordConfirmRef.current!.value) {
      return setError('passwords do not match')
    }
    const promises = []
    setLoading(true)
    setError('')

    if (emailRef.current!.value !== currentUser.email) {
      promises.push(emailUpdate(emailRef.current.value))
    }
    if (passwordRef.current!.value) {
      promises.push(passwordUpdate(passwordRef.current!.value))
    }

    Promise.all(promises)
    reload(currentUser)
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        setError('update failed')
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <form onSubmit={handleUpdate}>
        {error && <span> {error} </span>}
        <input type="email" placeholder="email" ref={emailRef} />
        <input type="password" placeholder="password" ref={passwordRef} />
        <input
          type="password"
          placeholder="password"
          ref={passwordConfirmRef}
        />

        <button disabled={loading}> confirm</button>
      </form>
    </div>
  )
}

export default UpdateProfile
