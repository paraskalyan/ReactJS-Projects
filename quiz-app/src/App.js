import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Quiz from './Quiz';
import { useContext, useState } from 'react';
import { gameContext } from './contexts';
import EndScreen from './EndScreen';
function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>QUIZZERY- Best quiz game for the smartest</h1>

      <gameContext.Provider value={{gameState, setGameState, score, setScore}}> 
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "finish" && <EndScreen />}
      </gameContext.Provider>
    </div>
  );
}

export default App;
