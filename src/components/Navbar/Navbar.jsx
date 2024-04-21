
import styles from './Navbar.module.css'
import { assets } from '../../assets/assets'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const navbar = () => {

     const [menu,setMenu]=useState("home");

  return (
     <div className={styles.navbar}>
     <Link to='/'>
      <h2>Delish Dish</h2>
     </Link>
     <ul className={styles.navbarMenu}>
         <li onClick={()=>{setMenu("home")}} className={menu==="home"?`${styles.active}`:""}> <Link to="/">Home</Link> </li>
         <li onClick={()=>{setMenu("menu")}} className={menu==="menu"?`${styles.active}`:""}>Menu</li>
         <li onClick={()=>{setMenu("mobile-app")}} className={menu==="mobile-app"?`${styles.active}`:""}>mobile-app</li>
         <li onClick={()=>{setMenu("contact")}} className={menu==="contact"?`${styles.active}`:""}>contact us</li>
     </ul>
     <div className={styles.navbarRight}>
          <img src={assets.search_icon} alt="" />
          <div className={styles.navbarSearchIcons}>
               <Link to="/cart">
               <img src={assets.basket_icon} alt="" />
               <div className={styles.dot}></div>
               </Link>
          </div>
          <button > <Link to='/login'>Log in</Link>  </button>
     </div>
   </div>
  )
}

export default navbar
