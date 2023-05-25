import logo from './logo.svg';
import Home from './components/Home';
import SignUp from './components/SignUp'
import Login from './components/Login'
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import './App.css';
import AddProducts from './components/AddProducts';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route path="/signup" Component={SignUp}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/add-products" Component={AddProducts}></Route>
        <Route path="cart" Component={Cart}/>
        <Route Component={NotFound}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
