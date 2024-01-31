import './App.scss';
import {useEffect, useState} from "react"
import { auth } from './Config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
// Component
import Header from './Components/Header/index'
import Footer from './Components/Footer/index'
// Pages
import Register from "../src/Pages/auth/register"
import Auth from "../src/Pages/auth"
import Frontened from './Pages/frontened'
import Routes from './Pages/Routes'
import Login  from "../src/Pages/auth/login"
function App() {
  // const [user,setUser]=useState({})
// useEffect(()=>{
  // onAuthStateChanged(auth, (user) => {
    // if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
    //  setUser(user)
      // ...
    // } else {
      // User is signed out
      // setUser(null)
      // alert("user is signout")
      // ...
    // }
  // });
// },[])

// if (user===null){
  // return (

    // <Auth/>
    // <Register/>
    // <Login/> 
  // )
// }
  return (
    <>
    <Header/>
    <main>
      {/* <Routes/> */}
      <Frontened/>
    </main>
     <Footer/>
   
   </>
  );
}


export default App;
