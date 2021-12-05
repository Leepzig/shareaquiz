import './App.css';
import Login from './components/sessions/Login';
import Signup from './components/sessions/Signup';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NewQuiz from './components/Quizes/NewQuiz';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Share A Quiz!</h1>
      <Router>
        <Routes>
          <Route exact path = '/login' element={<Login />} />
          <Route exact path = '/signup' element={<Signup />} />
          <Route exact path = '/newquiz' element={<NewQuiz />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
