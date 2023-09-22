import React from 'react'

export default function NextButton({dispatch, answer, index, numQuestions}) {

    if(answer === null) return null;
    
  if(index < numQuestions - 1) return (
    <button className='btn-next' onClick={()=> dispatch({type:"nextQuestion"})}>
        Next
    </button>
  );

  if(index === numQuestions - 1) return (
    <button className='btn-next' onClick={()=> dispatch({type:"finishQuiz"})}>
        Finish
    </button>
  )
}
