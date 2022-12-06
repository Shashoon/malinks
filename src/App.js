import './App.css';
import Header from './Header';
import Links from './Links';

function App() {


  return (
    <>
      <div className="App">
        <Header />

        <div className='container'>

          <div className='image-container'>
            <img src={require('./profile.jpg')} alt='User Avatar' />
          </div>

          <h1>Sharon Mazcka</h1>

          <Links />

          <div className='footer'>@Malinks</div>

        </div>
      </div>
    </>
  );
}

export default App;
