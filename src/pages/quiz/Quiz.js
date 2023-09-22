import React, { useEffect, useReducer } from 'react'
import "./quiz.css";
import Main from '../../quizcomponents/main/Main';
import Loader from '../../quizcomponents/loader/Loader';
import Error from '../../quizcomponents/error/Error';
import Startscreen from '../../quizcomponents/startscreen/Startscreen';
import Questions from '../../quizcomponents/questions/Questions';
import NextButton from '../../quizcomponents/nextbutton/NextButton';
import Progress from '../../quizcomponents/progress/Progress';
import FinishedScreen from '../../quizcomponents/finishedscreen/FinishedScreen';
import TimeWrapper from '../../quizcomponents/timer/TimeWrapper';
import Timer from '../../quizcomponents/timer/Timer';


const SEC_PER_QUESTION = 5;

const initialState = {
  question:[],
   
  // 'loading', 'error', 'ready', 'active', 'finished'
  status:"loading",
  index: 0,
  answer: null,
  points:0,
  highscore:0,
  secondsRemaining:10,

}

 function reducer(state, action) {
  switch(action.type) {
    
    case "dataReceived":
      return {
        ...state,
        question: action.payload[1].question,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "start":
      return{
        ...state,
        status: "active",
        secondsRemaining: state.question.length * SEC_PER_QUESTION,
      };

    case "newAnswer":
      const question = state.question.at(state.index);
      return{
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points,
      };

    case "nextQuestion":
      return{
        ...state,
        index: state.index + 1,
        answer:null,
      };

    case "finishQuiz":
      return{
        ...state,
        status:"finished",
        highscore: state.points > state.highscore ? state.points : state.highscore,
      };
    
      case "restart":
        return{
          ...initialState,
          question:state.question,
          status:"ready",

          //OR
          // return{
          //   ...state,
          //   points:0,
          //   highscore:0,
          //   index:0,
          //   answer:null,
          //   status:"ready",
          // }

        };

      case "tick":
        return{
          ...state,
          secondsRemaining: state.secondsRemaining - 1,
          status: state.secondsRemaining === 0 ? "finished" : state.status,
        }

    default:
     throw new Error("Action unknown");
  }

 }

export default function Quiz() {
  //destructure question and status state to make life easy
  const [{ question ,status, index, answer, points, highscore, secondsRemaining}, dispatch] = useReducer(reducer, initialState)

  const numQuestions = question.length;
  const maxPossiblePoints = question.reduce((prev, cur) => prev + cur.points, 0)

  // useEffect(() => {
  //   fetch("http://localhost:8000/questions")
  //   .then(res => res.json())
  //   .then(data => dispatch({type: "dataReceived", payload: data}))
  //   .catch(err => dispatch({type: "dataFailed"}))
  // }, [])

  useEffect(()=>{
    fetch("http://localhost:5000/courses")
    .then(res => res.json())
    .then(data => dispatch({type: "dataReceived", payload: data}))
  }, [])

  // console.log(courses)

  // const [isLoading, setIsLoading] = useState(false)
  //   useEffect(()=>{
  //       setTimeout(() => {
  //           setIsLoading(true)
  //       }, 1000);
  //   })

  return (
    <div className='quizWrapper'>
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <Startscreen numQuestions={numQuestions}  dispatch={dispatch} />}
        {status === "active" && (
          <>
          <Progress 
          index={index} 
          numQuestions={numQuestions}
          points={points}
          answer={answer}
          maxPossiblePoints={maxPossiblePoints} />
          <Questions 
          question = {question[index]} 
          answer={answer} 
          dispatch={dispatch} 
          />
          <TimeWrapper>
          <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
          <NextButton 
          dispatch={dispatch} 
          answer={answer}
          index={index}
          numQuestions={numQuestions}
          />
          </TimeWrapper>
          </>
        )}
        {status === "finished" && 
        (
        <FinishedScreen 
        points={points}
        highscore={highscore} 
        dispatch={dispatch}
        maxPossiblePoints={maxPossiblePoints} />
        )}
      </Main>
    </div>
  )
}
