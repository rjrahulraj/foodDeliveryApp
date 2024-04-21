
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

function App() {


  return (
    <>
    <div className='app'>
        <Navbar></Navbar> 
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/cart' element={<Cart></Cart>} />
          <Route path='/placeorder' element={<Placeorder></Placeorder>} />
          <Route path='/login' element={<LoginPopup></LoginPopup>} />
        </Routes>   
        <Footer></Footer>
    </div>
    </>
  )
}

export default App
