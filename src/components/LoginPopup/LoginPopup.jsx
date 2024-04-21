
import { useState } from 'react'
import styles from './LoginPopup.module.css'



const LoginPopup = () => {

     const [currState, setcurrState] = useState("login")

     return (
          <div className={styles.LoginPopup}>
               <form className={styles.loginContainer}>
                    <div className={styles.title}>
                         <h2>{currState==="signup"?"Sign Up":"Login"}</h2>
                    </div>
                    <div className={styles.loginInput}>
                         {currState === "signup" &&
                              <input type='text' placeholder='Name' required></input>}
                         <input type="email" placeholder='Email' ></input>
                         <input type="password" placeholder='Password' ></input>
                    </div>
                    <button >{currState === "signup" ? "Create Account" : "Login"}</button>
                    <div className={styles.loginCondition}>
                         <input type="checKbox" />
                         <p>By continuing, I agree to terms and condition.</p>
                    </div>
                    <div className={styles.userLogin}>
                 
                    {
                         currState === "login" ? <p>Create a new account? <span onClick={() => {
                              setcurrState("signup")

                         }}>Click here</span> </p> : <p>Already have a account ?<span onClick={() => {
                              setcurrState("login")

                         }}>Login Here</span></p>
                    }
                            
                    </div>
               </form>
          </div>
     )
}

export default LoginPopup
