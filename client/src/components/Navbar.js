import React,{useContext} from 'react'
//import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';   // <a href=""></a> anchore tag in React
import logo from '../images/logo.png';
import {UserContext} from '../App'

const Navbar = () => {
 
  const {state,dispatch} = useContext(UserContext);

  const RenderMenu = ()=>{

    if(state){
      return(
        <>
   <li className="nav-item">
    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/About">About</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/Contact">Contact</NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link" to="/Signout">Signout</NavLink>
  </li>
        </>
      )
    }
    else{
      return(
        <>
         <li className="nav-item">
    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/About">About</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/Contact">Contact</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/Signin">Signin</NavLink>
  </li>
 
  <form className="my-auto">
              
               
              <NavLink  to="/Signup" className="btn btn-primary">SignUp</NavLink>
              
          </form>
        </>
      )
    }
   
  }
  
    return (
        <>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark  ">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="logo"  width="180" height="40" style={{margin:0}}/>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                
                <RenderMenu/>
                
              </ul>
            
            </div>
        </div>
</nav>
        </>
    )
}

export default Navbar
