import React, { useEffect } from 'react'

export default function Timer({dispatch, secondsRemaining}) {
  const min = Math.floor(secondsRemaining / 60)
  const seconds = secondsRemaining % 60

  useEffect(() => {
   const id = setInterval( () => {
     dispatch({type:"tick"})
    }, 1000)

    return () => clearInterval(id)
  }, [dispatch]);

  return (
    <div className='timer'>
     {min < 10 && "0"}
     {min}:{seconds < 10 && "0"}
     {seconds}
    </div>
  )
}
