import './App.css';
import { useState } from 'react';
function App() {

  const movies = [
    "Superman",
    "Spiderman",
    "Batman",
    "Shaktiman",
    "Hanuman",
    "Ironman",
    "Hitman",
    "IDKman",

  ];
  const [mov, setMov] = useState(movies);
  const handleChange = (e) => {
    if (e.target.value === "") {
      setMov(movies);
      return;
    }
    const filtMov = mov.filter((m) => {
      return m.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setMov(filtMov);
  }

  return (
    <div className="App">
      <div className='head'>
        <h1>MovieMania</h1>
        <input type='text' placeholder='search' onChange={handleChange}></input>
      </div>
      <div className='container'>
        {mov.length == 0 ? <h4>Sorry, No movies Found</h4> : mov.map((name, index) => (
          <div className='card' key={index} id={"card" + index}>
            <p>{name}</p>
          </div>

        ))}
      </div>
    </div>
  );
}

export default App;
