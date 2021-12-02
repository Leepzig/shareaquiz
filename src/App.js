import './App.css';
import Login from './components/sessions/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Share A Quiz!</h1>
      <Router>
        <Routes>
          <Route exact path = '/login' element={<Login />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
