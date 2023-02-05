import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'dummyToken')
      navigate('/dashboard')
    } else {
      alert('Incorrect username or password')
    }
  }

  return (
    <div className='bg-amber-700'>
      <h1 className='text-4xl border '>Login</h1>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <Link to='/dashboard'>Dashboard</Link>
    </div>
  )
}

export default Login
