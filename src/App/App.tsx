import { useState } from 'react'
import hangman0 from '../assets/hangman0.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'

// TODO: what about favicon?

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.wrapper}>
        <div className={styles.gallows}>
            <img src={hangman0} alt="image of gallows" />
            <h1>HANGMAN GAME</h1>
        </div>
        <div>
            <div className='underscores'>
                <p>_ _ _ _ _</p>
            </div>
            <div className='question'>
                <p>Here is a question randomly generated for you?</p>
            </div>
            <div className='wrong-guess'>
                <p>Incorrect guesses: 0/6</p>
            </div>
            <div>

            </div>
        </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
