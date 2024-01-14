
import './authLayout.css';
import { Outlet, Navigate} from 'react-router-dom';


function AuthLayout() {
  let isAuthenticated = false;
 
  return (
    <>
    {
      isAuthenticated? (<Navigate to={"/home"}/>) :
     
     ( <>

        <section className='authLayout'>
          <>
          <Outlet></Outlet>
          </>
          <div>Image div</div>
        </section>
    
      </>
      )
    }
    </>
  )
}

export default AuthLayout