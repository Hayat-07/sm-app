import React from 'react'
import { Form } from 'react-router-dom'
import "../authLayout.css";
function SignupForm() {
  return (
    <>
    <form className='authForm'>
      <label htmlFor="">
        <h6> Name</h6>
        <input type="text" placeholder='Name' name='name' />
      </label>
      <label htmlFor="">
      <input type="email" placeholder='Email' name='emil' />
      </label>
      <label htmlFor="">
      <input type="password" placeholder='password' name='password' />
      </label>
      <label htmlFor="">
      <input type="number" placeholder='phone' name='phone' />
      </label>
      <label htmlFor="">
      <input type="capta" placeholder='Capta' name='capta' />
      </label>
        <label htmlFor="">
        <button type='button'> Creat Account</button>
        </label>
        
        
       
       
    </form>
    </>
  )
}

export default SignupForm