// import React, { createContext,useContext,useEffect,useState } from 'react'
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from '../Config/firebase'
// const AuthContext = createContext
// export default function AuthContextProvider({Children}) {

//     const [user , setUser]=useState({})
//     const [isAuthenticated,setIsAuthenticated]=useState(false)
//     useEffect(()=>{
//       onAuthStateChanged(auth, (user) => {
//         if (user) {
//           // User is signed in, see docs for a list of available properties
//           // https://firebase.google.com/docs/reference/js/auth.user
//           // const uid = user.uid;
//           setUser(user)
//           setIsAuthenticated(true)
//           // ...
//         } else {
//          alert("user is siginout")
//         }
//       });
//     },[])
//     return (
//     <AuthContext.Provider value={{user,isAuthenticated}}>
//         {Children}
//     </AuthContext.Provider>
//   )
// }
// export const useAuthContext=()=>{
//     return useContext(AuthContext);
// }