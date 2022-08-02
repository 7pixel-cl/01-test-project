import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import mixpanel from 'mixpanel-browser'
require('dotenv').config()

mixpanel.init('20ec7153c4806dff86b4d340eb8821e7', {
  debug : true
})



function App() {
  const [count, setCount] = useState(0)

let btnClick = () => {
mixpanel.track("Button Clicked", {
name: "Marco",
description: "JoVE Rocks",
count: count
}
)
}

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={btnClick}>
          Send data
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
