import './App.css';
import logo from './spacex.png';

function App() {
  return (
    <div className='App'>
      <img
        src={logo}
        alt='spacex logo'
        style={{ width: 300, display: 'block', margin: 'auto' }}
      />
    </div>
  );
}

export default App;
