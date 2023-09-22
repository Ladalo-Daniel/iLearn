// import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Quiz from './pages/quiz/Quiz';
import {createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './quizcomponents/layout/Layout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={ <Layout /> }>
       <Route index element={<Home />} />
       <Route path='/quiz' element={<Quiz />} />
    </Route>
  ))
  return (
   <RouterProvider router={router} />
  );
}

export default App;
