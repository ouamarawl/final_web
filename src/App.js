import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Registre from './component/registre/Registre';


function App() {

  return (
    <Router>
       <Routes>
         <Route path='/' element={<Registre/>}/>         
       </Routes>
    </Router>
  
  );
}

export default App;
