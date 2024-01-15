import React, {   SetStateAction, createContext,useState } from 'react'


export interface val {
    allProfile:[],
    setAllProfile:React.Dispatch<SetStateAction<[]>>
  }

export  const UserContext = createContext<val|null>(null);





const Context=({children})=> {
    
    const[allProfile,setAllProfile]=useState<[]>([]);

   
 

  return (
   <>
   <UserContext.Provider value={{allProfile,setAllProfile }}>
         
         {children}
        
   </UserContext.Provider>
   </>
  )
}

export default Context