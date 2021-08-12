import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom"


const Contact = () => {
    const history = useHistory();

    const [userData, setUserData] = useState({name:"", email:"",phone:"",message:""});

    const callContact = async ()=>{
        try{
            const res  = await fetch('/getdata',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                
            });
            const data = await res.json();
            console.log(data);
            setUserData({...userData, name:data.name, email:data.email,phone:data.phone});

            if( res.status === 404){
                history.push("/signin")    
            } 
        }catch(e){
            console.log(e);
            console.log("CallaboutError")
        }
    }

  useEffect(() => {
     callContact();
  },[]);

const handleInputs = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData, [name]:value })
}
const contactForm = async (e)=>{
    e.preventDefault();
    
    const {name,email,phone,message} = userData;

  const res = await fetch("/contact",{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          name,email,phone,message
      })
  });
  const data = await res.json();

  if(!data){
      console.log("message not send")
  }else{
      alert("Message Sent");
      setUserData({...userData,message:""});
  }
}

    return (
<>
    <div className="contact_info">
        <div className="container-fluid">
            <div className="row mx-5 my-3 d-flex justify-content-center align-items-center">

                    <div className="contact_info_item card col-10 col-md-3 mx-1 mx-md-5 justify-content-start">
                        <div className="row justify-content align-items-center my-3 mx-2">
                            <div className="col">
                            <i className="zmdi zmdi-smartphone-iphone zmdi-hc-2x"></i>
                            </div>
                            <div className="col ">
                                    
                                <div className="contact_info_title my-1">
                                         <b>Phone</b>
                                </div>
                                <div className="contact_info_text my-1">
                                      +1117887
                                </div>

                            </div>
                        </div>                     
                    </div>

                    <div className="contact_info_item card col-10 col-md-3 mx-1 mx-md-5 justify-content-start">
                        <div className="row justify-content align-items-center my-3 mx-2">
                            <div className="col">
                            <i className="zmdi zmdi-email zmdi-hc-2x"></i>
                            </div>
                            <div className="col ">
                                    
                                <div className="contact_info_title my-1">
                                     <b> E-mail</b>
                                </div>
                                <div className="contact_info_text my-1">
                                      konu@gmail.com
                                </div>

                            </div>
                        </div>                     
                    </div>
                    <div className="contact_info_item card col-10 col-md-3 mx-1 mx-md-5 justify-content-start">
                        <div className="row justify-content align-items-center my-3 mx-2">
                            <div className="col">
                            <i className="zmdi zmdi-pin zmdi-hc-2x"></i>
                            </div>
                            <div className="col ">
                                    
                                <div className="contact_info_title my-1">
                                     <b> Address</b>
                                </div>
                                <div className="contact_info_text my-1">
                                      Surat,GUJ,IND
                                </div>

                            </div>
                        </div>                     
                    </div>

                
            </div>
        </div>
    </div>

    {/* -----------------Form------------------- */}

<div className="contact_form ">
    <div className="container ">
        <div className="row">
            <div className="col-lg-10 mx-auto ">
                <div className="contact_form_container card py-3">
                    <div className="contact_form_title mx-3">
                        <h2><b>Get in Touch</b></h2>
                    </div>
                    
            <form method = "POST" id="contact_form">
                <div className="row px-3 py-1">
                     <div className="contact_form_name  col-md-4 col-12 d-flex justify-content-center align-items-center ">
                        <input type="text" id="contact_form_name"
                        className="contact_form_name input_field border px-2"
                        placeholder="Your Name"
                        value={userData.name}
                        name="name"
                        onChange={handleInputs}
                        required= {true}/>
                     </div>
                     <div className="contact_form_email col-md-4 col-12 d-flex justify-content-center align-items-center ">
                        <input type="text" id="contact_form_email"
                        className="contact_form_email input_field border px-2"
                        placeholder="Your E-mail"
                        value={userData.email}
                        name="email"
                        onChange={handleInputs}
                        required= {true}/>
                     </div>
                     <div className="contact_form_phone col-md-4 col-12 d-flex justify-content-center align-items-center ">
                        <input type="number" id="contact_form_phone"
                        className="contact_form_phone input_field border px-2"
                        placeholder="Your Phone Number"
                        value={userData.phone}
                        name="phone"
                        onChange={handleInputs}
                        required= {true}/>
                     </div>

                </div>
                    <div className="row">
                        <div className="contact_form_text">
                            <textarea className="text_field contact_form_message mx-md-3 mx-1 p-2 " id="" 
                            value={userData.message}
                            name="message"
                            onChange={handleInputs}
                            placeholder="Message" style={{height:"200px", width:"97%"}}>

                            </textarea>

                        </div>
                   </div>
                   <div className="contact_form_button mx-3 my-2">
                       <button type="submit" 
                       onClick={contactForm}
                       className=" contact_submit_button btn btn-success">Send Message</button>

                   </div>

            </form>
         </div>

            </div>

        </div>

    </div>

</div>



</>
    )
}

export default Contact
