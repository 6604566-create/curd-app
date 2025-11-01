import React, { useState } from 'react'

const API = 'http://localhost:8000/api/user'

export default function UserForm(){
  const [form, setForm] = useState({name:'', email:'', address:''})
  const [status, setStatus] = useState(null)

  const handle = e => setForm({...form, [e.target.name]: e.target.value})

  const submit = async (e)=>{
    e.preventDefault()
    setStatus('saving')
    try{
      const res = await fetch(`${API}/create`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if(!res.ok) throw new Error(data.message || 'Failed')
      setStatus('saved')
      setForm({name:'', email:'', address:''})
      // optional: trigger a refresh via custom event
      window.dispatchEvent(new Event('users:refresh'))
    }catch(err){
      setStatus('error:'+err.message)
    }finally{
      setTimeout(()=>setStatus(null), 2000)
    }
  }

  return (
    <div className="card">
      <div className="card-header">Create User</div>
      <div className="card-body">
        <form onSubmit={submit} className="form">
          <label>Name <input name="name" value={form.name} onChange={handle} required /></label>
          <label>Email <input name="email" type="email" value={form.email} onChange={handle} required /></label>
          <label>Address <input name="address" value={form.address} onChange={handle} required /></label>
          <div className="form-actions">
            <button className="btn primary" type="submit">{status==='saving' ? 'Saving...' : 'Create'}</button>
            <button type="button" className="btn" onClick={()=>setForm({name:'',email:'',address:''})}>Reset</button>
          </div>
          {status && <div className="muted">{status}</div>}
        </form>
      </div>
    </div>
  )
}
