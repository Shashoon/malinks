import { useState } from 'react';
import './App.css';
import Header from './Header';
import Links from './Links';
import Modal from './Modal';

function App() {
  const [links, setLinks] = useState([
    {
      title: 'My Portfolio',
      url: '',
      icon: ''
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sharon-mazcka/',
      icon: ''
    },
    {
      title: 'GitHub',
      url: 'https://github.com/Shashoon',
      icon: ''
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/_Shashoo',
      icon: ''
    }
  ]);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }



  return (
    <>
      <div className="App">
        <Header toggleModal={toggleModal} />

        <div className='container'>

          <div className='image-container'>
            <img src={require('./profile.jpg')} alt='User Avatar' />
          </div>

          <h1>Sharon Mazcka</h1>

          <Links />

          {showModal ? <Modal toggleModal={toggleModal} /> : null}

          <div className='footer'>@Malinks</div>

        </div>
      </div>
    </>
  );
}

export default App;
