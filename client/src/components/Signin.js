import React,{ useState,useContext } from 'react'
import signinimage from '../images/signinimage.png'
import {NavLink, useHistory} from 'react-router-dom'
import { UserContext } from '../App';

const Signin = () => {

    const {state,dispatch} = useContext(UserContext);

const history = useHistory();

const [email, setEmail] = useState('');
const [password, SetPassword] = useState('');

const loginUser = async (e) =>{
    e.preventDefault();

  const res =  await fetch('/signin',{
    method:"POST",
    headers:{
        "Content-Type" : "application/json"
    },
    body:JSON.stringify({
        email,password                          
    })
   
})

  const data = await res.json();
 
  if(res.status === 422 || !data){
      window.alert("Wrong Credentials");
      console.log("Invalid")
  } else{
      dispatch({type:"USER",payload:true})
       window.alert("Welcome");
       history.push("/")
  }
}

    return (
<>
<section className="signin  ">
                <div className="container position-block card  mx-md-auto signin-card">
                    <div className="signin-form row p-3">
                    <div className="signin-image col-12 col-md-6  text-center">
                                <figure>
                                    <img src={signinimage} alt="logo" className="signinimage"/>
                                </figure>
                                <NavLink to="/signup" className="signin-image-link text-decoration-none"> I am a New User !</NavLink>
                            </div>
                            <form method="POST" className="register-form col-12 col-md-6  " id="register-form">
                                     <h2 className="form-title ">SignIn</h2>
                               
                                
                                <div className="form-group my-3">
                                    <label className="label" htmlFor="email">
                                    <i className="zmdi zmdi-email material-icons-name mx-2"></i>
                                    </label>
                                    <input type="text" name="email" id="email" autoComplete="off"
                                   value={email}
                                   onChange={(e)=> setEmail(e.target.value)}
                                   placeholder="Your E-mail"
                                    style={{width:"90%"}}
                                    />
                                                   
                                </div>
                                

                                <div className="form-group my-3">
                                    <label className="label" htmlFor="password">
                                    <i className="zmdi zmdi-lock material-icons-name mx-2"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                   value={password}
                                   onChange={(e)=> SetPassword(e.target.value)}
                                   placeholder="Password"
                                    style={{width:"90%"}}
                                    />
                                    
                                </div>
                         

                                <div className="form-group form-button">
                                    <input type="submit" name="Signin" className="form-submit btn btn-primary"
                                    onClick={loginUser}
                                    value="Sign-In" />

                                </div>

                            </form>
    
                    </div>
                   
                </div>
            </section>  


</>
    )
}

export default Signin
