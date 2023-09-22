import React from 'react'

export default function Progress({index, numQuestions, points, maxPossiblePoints, answer}) {
  return (
    <header className='progress'>
      <progress
       max={numQuestions} 
       value={index + Number(answer !== null)}
       >
      </progress>
      <p>Question <strong>{index + 1}/{numQuestions}</strong> </p>
      <p>Score <strong>{points}/{maxPossiblePoints}</strong></p>
    </header>
  )
}
