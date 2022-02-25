import './App.css';
import Login from './pages/Login';
import Main from './pages/Main'
import {Routes,Route} from 'react-router-dom'
import DetailCard from './component/DetailCard';

function App() {
  return (
    <Routes>
      <Route path = '/' element={<Login/>}/>
      <Route path = '/Main/*' element={<Main/>}>    
        <Route path = ':id' element={<DetailCard/>}/>
      </Route>
      <Route path = '/Main/type/:genre/*' element={<Main/>}>    
        <Route path = ':id' element={<DetailCard/>}/>
      </Route>
    </Routes>
  );
}

export default App;
