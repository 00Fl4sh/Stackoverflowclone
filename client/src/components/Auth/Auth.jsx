import React, { useState } from 'react'
import logo2 from "../../assets/logo2.png";
import AuthAbout from './AuthAbout';
import "./Auth.css"

const Auth = () => {  
  const [isSignup, setIsSignup] = useState(false)
  
  const HandleChange =()=>{
    setIsSignup(!isSignup)
  }
  return (
    <section className='auth-section'>
        {isSignup && <AuthAbout/>}
      <div className='auth-container-2'>
      {!isSignup && <img src={logo2} alt='logo2' width={40} className='login-logo' style={{marginTop:'200px', marginLeft:'50%'}}></img>}

        <form >
          {
            isSignup && 
            <label htmlFor="Display">
                  <h4>Display Name</h4>
                  <input id='Display' placeholder="" />
            </label>
          
          }
          
          <label htmlFor="Email">
              <h4 className='sign-box'>Email</h4>
              <input type="Email"  name='name' id='Email'/>
              </label>
          <label htmlFor="password">
              <h4 className='sign-box password'>Password</h4>
              <input type="password"  name='password' id='password'/>
          </label>
                  <span className='span'>
                    {!isSignup && <h5>Forgot Password?</h5>}
                  </span>
          <button className='auth-btn' type='submit'>{isSignup ? 'Sign Up':'Login'}</button>
            {
              isSignup && 
              <label htmlFor='check'>
              <input type="checkbox" id='check'/>
               <p id="check"> Opt-in to receive occasional <br/>
              product update, user research invitation, <br />company annoiuncements and digests</p>
            </label>
            }
            </form>
            { isSignup ? 'Already have an account' : "Don't have an account ?"}
            <button  type='button' className='handle-switch-btn' onClick={HandleChange}>{ isSignup ? 'Sign up':'Login' }</button>
      </div>

    </section>
  )
}

export default Auth
