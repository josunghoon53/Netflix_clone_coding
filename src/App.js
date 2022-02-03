import './App.css';
import Login from './pages/Login';
import Main from './pages/Main'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path = '/' element={<Login/>}/>
      <Route path = '/Main' element={<Main/>}/>
    </Routes>
  );
}

export default App;
