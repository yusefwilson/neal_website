import { useState } from 'react'

export default function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='bg-red-400'>NEAL</nav>
      <h1>New England Armwrestling League</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}