import React from 'react'
import Button from './components/Button'
import Form from './components/Form'
import LoginForm from './components/LoginForm'
import TextUpdater from './components/TextUpdater'
import UserCard from './components/UserCard'
import { useState } from 'react'
function App() {
  const [user, setUser] = useState({ name: '', email: '' })

  const handleLogin = (name, email) => {
    setUser({ name, email })
  }

  return (
<div className=" h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
  <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to the App</h1>
  
  <Button className="mb-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition" />
  <br />
  <div className="h-full max-h-max flex justify-center gap-6 w-full">
    <div className="bg-white shadow-lg rounded-lg p-6">
      <LoginForm onLogin={handleLogin} />
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6">
      <UserCard name={user.name} email={user.email} />
      <TextUpdater />
      <Form />
    </div>
  </div>
  
</div>

  )
}

export default App