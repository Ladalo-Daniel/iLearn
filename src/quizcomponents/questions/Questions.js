import React from 'react'
import Options from '../options/Options'

export default function Questions({question, answer, dispatch, courses}){
    console.log(question)
  return (
     <div>
         <h4>{question.question}</h4>
         <Options question={question} answer={answer} dispatch={dispatch} courses={courses} />
     </div>
    
  )
}
