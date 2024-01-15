import React, { useContext,useEffect,useState  } from 'react'
import { UserContext} from '../../allContext/Context';

function SigninForm() {

  const {allProfile,setAllProfile}=useContext(UserContext);
  
  const[profile,setProfile]=useState({});
  console.log(allProfile);



  const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
       
         const name=e.target.name;
         const value=e.target.value;
       
         setProfile({...profile,[name]:value});
               console.log(profile);
  }

  const handleForm=(e:React.FormEvent<HTMLFormElement>)=>{
         e.preventDefault();
         console.log(Object.values(profile).length);
         if((Object.values(profile).length)>=3){
          setAllProfile([...allProfile,profile]);
           
         }else{
          alert("Please fillUp all input fields");
         }
         
  }


useEffect(()=>{
  console.log("allProfile : ",allProfile);
},[allProfile]);



  return (
    <>
    <form className='authForm' onSubmit={handleForm}>
       
      

        <label htmlFor="Email"> Email  </label>
        <input type="email" placeholder='Email' name='emil'  onChange={onChange} />
      

        <label htmlFor="Password"> Password</label>
        <input type="password" placeholder='password' name='password'   onChange={onChange}/>
    

        <label htmlFor="capta">capta </label>
        <input type="capta" placeholder='Capta' name='capta'   onChange={onChange}/>
      
        

        
          <button type='submit'> Creat Account</button>
          
        
        
       
       
    </form>
    </>
  )
}

export default SigninForm