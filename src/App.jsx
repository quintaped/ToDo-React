import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header logoWidth="200px" titleText="Hello,world!"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <footer>
      copyright
    </footer>
    </div>
  );
}

export default App;
