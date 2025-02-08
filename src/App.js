import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Registre from './component/pages/registre/Registre';
import Home from './component/pages/home/Home'
import Product from './component/pages/product/Product'
import Searchbar from './component/pages/Searchbar/Searchbar';
import Header from './component/Header/header';
import Container from './component/Container/Container';
import Admin from './component/pages/admin-dashboard/Admin';
import Acces from './component/pages/registre/Acces';

function App() {

  return (
    <Router>
      <Header/>
      <Container>
       <Routes>
         <Route path="/admin-dashboard" element={<Admin/>}/>  
         <Route path="/Registre" element={<Registre/>}/>   
         <Route path="/Product" element={<Product/>}/>
         <Route path="/" element={<Home/>}/> 
         <Route path="/Searchbar" element={<Searchbar/>}/>   
         <Route path="/acces" element={<Acces />} />  
       </Routes>
      </Container>
    </Router>
  
  );
}

export default App;
