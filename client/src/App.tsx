
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './_root/pages'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'

function App() {
 

  return (
    <>
     <main>
        
        <Routes>
          //----------------Public Routes------------------
             <Route path='/sign-in' element={<SigninForm></SigninForm>}></Route>
             <Route path='/sign-up' element={<SignupForm></SignupForm>}></Route>



          //----------------Privet Routes------------------
          <Route path='./' element={<Home></Home>}></Route>

        </Routes>
     </main>
       
    </>
  )
}

export default App
