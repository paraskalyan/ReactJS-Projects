import React, { useContext } from 'react';
import { gameContext } from './contexts';
import { questions } from './QuestionBank';
const EndScreen = () =>{
    const {score} = useContext(gameContext);
    return(
        <div className='endScreen'>
            <h3>Final Score:- {score}/{questions.length}</h3>
        </div>
    )
}

export default EndScreen;