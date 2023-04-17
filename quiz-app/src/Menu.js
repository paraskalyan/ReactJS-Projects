import React, { useContext, useState } from 'react';
import { gameContext } from './contexts';
const Menu = ()=>{
    const { gameState, setGameState} = useContext(gameContext);
    return(
        <div className='Menu'>
            <button onClick={()=>setGameState("quiz")}>Start Quiz</button>
        </div>
    )
}

export default Menu;