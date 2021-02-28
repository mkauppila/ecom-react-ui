import logo from './logo.svg'
import './App.css'

function App() {
  const fetchData = () => {
    console.log('hello fetch some data')
    return fetch('http://localhost:3001/products', {
      method: 'GET',
      headers: {
        'x-version': '0.0.2',
      },
    })
      .then(e => e.json())
      .then(body => console.log(body))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={async event => {
            event.preventDefault()
            return fetchData()
          }}
        >
          Fetch data
        </button>
      </header>
    </div>
  )
}

export default App
