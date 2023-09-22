import React from 'react'

export default function Startscreen({ numQuestions, dispatch }) {
  return (
    <div className='start'>
       <h3>Welcome to iLearn Quiz Portal!</h3>
       <h3>{numQuestions} questions to test your React mastery</h3>
       <button className='btn btn-ui' onClick={() => dispatch({type: "start"})}>Let's start</button>
    </div>
  )
}
