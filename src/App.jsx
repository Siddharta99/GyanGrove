import React from 'react'
import { useState } from 'react'
import Main from './Components/Main'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-600 py-10'>
      <h1 className='text-center text-3xl sm:text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 '>Game Of Thrones</h1>

      <Main />
    </div>
  )
}

export default App