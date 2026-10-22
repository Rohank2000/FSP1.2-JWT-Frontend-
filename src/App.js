import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import useFetch from './useFetch';

function App() {
  const [secret, setSecret] = useState("");

  const handleClick = async () => {
    const fetchResponse = await fetch('https://fsp11-jwt.vercel.app/admin/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ secret }),
      }
    );

    const fetchData = await fetchResponse.json();
    console.log(fetchData);
    localStorage.setItem('fetchKey', fetchData.token);
  }
  return (
    <div className="App">
      <input value={secret} onChange={(event) => setSecret(event.target.value)} placeholder='Enter Secret value' />
      <button onClick={handleClick}>Log In</button>
    </div>
  );
}

export default App;
