
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './_root/pages'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'

function App() {
 

  return (
    <>
     <main>
        
        <Routes>
          //----------------Public Routes------------------
           <Route element={<AuthLayout/>}>

             <Route path='/sign-in' element={<SigninForm></SigninForm>}></Route>
             <Route path='/sign-up' element={<SignupForm></SignupForm>}></Route>

           </Route>



          //----------------Privet Routes------------------
           <Route element={<RootLayout/>}>
            
             <Route path='/home' element={<Home></Home>}></Route>
           
           </Route>
    

        </Routes>
     </main>
       
    </>
  )
}

export default App
