
import HomePage from './components/HomePage.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login.jsx'
import { UIRoutes } from './routes/UIRoutes.jsx';


function App() {
  


  return (
    <>
    <UIRoutes/>
    </>

//     <Router>
// <Routes>
//   <Route path='/' element={<HomePage/>}/>
//   <Route path='/login' element={<Login/>}/>
// </Routes>

//     </Router>
    // <HomePage/>

  )
}

export default App
