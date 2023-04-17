import React, { useContext, useState } from 'react';
import { questions } from './QuestionBank';
import { gameContext } from './contexts';
const Quiz = () => {
    const {setGameState, setScore, score} = useContext(gameContext);
    const [option, setOption] = useState(0);
    const [currQuestion, setCurrQuestion] = useState(0);
    const nextQuestion = () => {
        if(option === questions[currQuestion].answer){
            setScore(score + 1);
        }
        setCurrQuestion(currQuestion + 1);
    }
    const finishGame = () => {
        if(option === questions[currQuestion].answer){
            setScore(score + 1);
        }
        setGameState('finish');

    }
    return(
    <div className='Quiz'>
        <h3>{questions[currQuestion].que}</h3>
        <button onClick={()=>setOption("A")}>{questions[currQuestion].optionA}</button>
        <button onClick={()=>setOption("B")}>{questions[currQuestion].optionB}</button>
        <button onClick={()=>setOption("C")}>{questions[currQuestion].optionC}</button>
        <button onClick={()=>setOption("D")}>{questions[currQuestion].optionD}</button>
        {option === questions[currQuestion].answer && <p>Correct Answer</p>}
        {currQuestion === questions.length - 1 ? <button onClick={finishGame}>Finish</button> : <button onClick={nextQuestion} id='nxtBtn'>Next question</button>}
    </div>  
    )
}

export default Quiz;