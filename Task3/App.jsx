import React, { useState } from 'react'
import UserCard from './UserCard'
import './App.css'

const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [users, setUsers] = useState([])

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && name.trim() && email.trim()) {
      setUsers([...users, { name, email }])
      setName('')
      setEmail('')
    }
  }

  return (
    <div className="app-container">
      <h1>User Card Generator</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className="card-container">
        {users.map((user, index) => (
          <UserCard key={index} name={user.name} email={user.email} />
        ))}
      </div>
    </div>
  )
}

export default App
