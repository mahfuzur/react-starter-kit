import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='bg-amber-700'>
      <h1 className='text-4xl border '>Dashboard</h1>
      <button className='bg-amber-900 text-amber-100 p-2 rounded'>
        <Link to='/logout'>Logout</Link>
      </button>
    </div>
  )
}

export default Dashboard
