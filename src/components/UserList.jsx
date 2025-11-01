import React, { useEffect, useState } from 'react'

const API = 'http://localhost:8000/api/user'

export default function UserList(){
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchUsers = async ()=>{
    setLoading(true)
    try{
      const res = await fetch(`${API}`)
      if(!res.ok){
        const text = await res.text()
        throw new Error(text || 'Failed to fetch')
      }
      const data = await res.json()
      setUsers(data)
    }catch(err){
      setError(err.message)
    }finally{setLoading(false)}
  }

  useEffect(()=>{fetchUsers()}, [])

  return (
    <div className="card">
      <div className="card-header">Users</div>
      <div className="card-body">
        {loading && <div className="muted">Loading...</div>}
        {error && <div className="error">{error}</div>}
        {!loading && !error && users.length === 0 && (
          <div className="muted">No users yet. Create one!</div>
        )}
        <div className="user-grid">
          {users && users.map(u=> (
            <div key={u._id} className="user-card">
              <div className="user-name">{u.name}</div>
              <div className="user-email">{u.email}</div>
              <div className="user-address">{u.address}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="card-footer">
        <button className="btn" onClick={fetchUsers}>Refresh</button>
      </div>
    </div>
  )
}
