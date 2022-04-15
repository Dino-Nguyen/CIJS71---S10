import { Route, Routes } from 'react-router-dom'
import About from './component/insideHome/About.js'
import Cart from './component/insideHome/Cart.js'
import Login from './component/insideAuth/Login.js'
import Products from './component/insideHome/Products.js'
import Profile from './component/insideHome/Profile.js'
import Register from './component/insideAuth/Register'
import Auth from './component/Auth.js'
import Home from './component/Home.js'
// import './App.css';

function App() {
  return (
    <div className="App">
      
     <Routes>
           <Route path='/auth' element={<Auth/>}>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
           </Route>
           <Route path='/' element={<Home/>}>
               
           </Route>
     </Routes>
    </div>
  );
}

export default App;
