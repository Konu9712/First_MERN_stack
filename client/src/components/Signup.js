import React, { useState }  from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import signupimage from '../images/signupimage.png';




const Signup = () => {
    const history = useHistory();
    
    const [user,setUser] = useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
    });
    
    let name,value;
    const handleInputs = (e) =>{
    // console.log(e);
    name=e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value});
}

const PostData  = async (e) =>{
    e.preventDefault();

    const {name, email, phone, work, password, cpassword} = user;
    
    const res = await fetch("/register",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            name,email,phone, work, password, cpassword                             
        })
       
    })
    const data = await res.json();
    console.log(data);
    
        if(res.status === 422 || !data){
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
    } else{
        window.alert("Confirm Registration");
        console.log("Confirm Registration");
        history.push("signin")
    }
   
}
    
    return (
        <>
            <section className="signup  ">
                <div className="container position-block card  my-5 mx-auto">
                    <div  className="signup-form row p-3">
                       
                            <form method="POST" className="register-form col-12 col-md-6  " id="register-form">
                                     <h2 className="form-title ">SignUp</h2>
                               
                                <div className="form-group my-1">
                                    <label className="label" htmlFor="name">
                                    <i className="zmdi zmdi-account material-icons-name mx-2"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off"
                                    placeholder="Your Name"
                                    value={user.name}
                                    onChange={handleInputs}
                                    style={{width:"90%"}}
                                    />
                                    
                                </div>
                                <div className="form-group my-3">
                                    <label className="label" htmlFor="email">
                                    <i className="zmdi zmdi-email material-icons-name mx-2"></i>
                                    </label>
                                    <input type="text" name="email" id="email" autoComplete="off"
                                    placeholder="Your E-mail"
                                    value={user.email}
                                    onChange={handleInputs}
                                    style={{width:"90%"}}
                                    />
                                    
                                </div>
                                <div className="form-group my-3">
                                    <label className="label" htmlFor="phone">
                                    <i className="zmdi zmdi-phone-in-talk material-icons-name mx-2"></i>
                                    </label>
                                    <input type="number" name="phone" id="phone" autoComplete="off"
                                    placeholder="Your Phone Number"
                                    value={user.phone}
                                    onChange={handleInputs} 
                                    style={{width:"90%"}}
                                    />
                                    
                                </div>
                                <div className="form-group my-3">
                                    <label className="label" htmlFor="work">
                                    <i className="zmdi zmdi-slideshow material-icons-name mx-2"></i>
                                    </label>
                                    <input type="text" name="work" id="work" autoComplete="off"
                                    placeholder="Your Work"
                                    value={user.work}
                                    onChange={handleInputs}
                                    style={{width:"90%"}}
                                    />
                                    
                                </div>

                                <div className="form-group my-3">
                                    <label className="label" htmlFor="password">
                                    <i className="zmdi zmdi-lock material-icons-name mx-2"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                    placeholder="Password"
                                    value={user.password}
                                    onChange={handleInputs}                                    
                                    style={{width:"90%"}}
                                    />
                                    
                                </div>
                                <div className="form-group my-3">
                                    <label className="label" htmlFor="cpassword">
                                    <i className="zmdi zmdi-lock-outline material-icons-name mx-2"></i>
                                    </label>
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                    placeholder="Confirm Password"
                                    value={user.spassword}
                                    onChange={handleInputs}
                                    style={{width:"90%"}}
                                    />
                                    
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="Signup" className="form-submit btn btn-primary"
                                    value="Register"
                                    onClick={PostData} />

                                </div>

                            </form>
                            <div className="signup-image col-12 col-md-6  my-auto text-center">
                                <figure>
                                    <img src={signupimage} alt="logo" className="signupimage"/>
                                </figure>
                                <NavLink to="/signin" className="signup-image-link text-decoration-none ">Already have an account</NavLink>
                            </div>
                            
                    </div>
                   
                </div>
            </section>  
        </>
    )
}

export default Signup
