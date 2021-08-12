import React, { useEffect, useState } from 'react'
import profile_img from '../images/profile_img.png'
import {useHistory} from "react-router-dom"

const About = () => {

const history = useHistory();

const [aboutData, setAoutData] = useState({});

    const callAbout = async ()=>{
        try{
            const res  = await fetch('/about',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            const data = await res.json();
            console.log(data)
            setAoutData(data);
            if( res.status === 404){
                history.push("/signin")    
            } 
        }catch(e){
            console.log(e);
            console.log("CallaboutError")
        }
    }

  useEffect(() => {
     callAbout();
  },[]);

    return (
<>
   <div className="container card emp-profile mt-4 ">
       <form method="GET">
           <div className="row">
               <div className="col-md-4">
                   <img src={profile_img} alt="profile" width="200" />
               </div>
                <div className="col-md-6">
                    <div className="profile-header">
                     <h5>{aboutData.name}</h5>
                     <h6>{aboutData.work}</h6>
                     <p className="profile-rating mt-3 mb-5"> RANKING: <span>1/10</span></p>
                   
                     <ul className="nav nav-tabs" id="nav-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" href="#home-tab" id="home-tab-tab" data-bs-toggle="tab" data-bs-target="#home-tab" type="button" role="tab" aria-controls="home-tab" aria-selected="true">About</a>
                        </li>
                        <li className="nav-item">
                             <a className="nav-link" href="#profile-tab" id="profile-tab-tab" data-bs-toggle="tab" data-bs-target="#profile-tab" type="button" role="tab" aria-controls="profile-tab" aria-selected="false">Timeline</a>
                        </li>
                        
                        </ul>
                    </div>
                </div>

                <div className="col-md-2 mt-md-4 mt-3 mx-auto d-block ">
                    <input type="submit" className="profile-edit-btn btn btn-warning " name="btnAndMore" value="Edit Profile" />
                </div>

           </div>

            <div className="row ">
               
                <div className="col-md-4 mx-3">
                    <div className="profile-work">
                    <p>WORK LINKS</p>
                    <a href="https://animate.style/#usage" className="text-decoration-none "  target="_konu">Google</a> <br/> <br/>
                    <a href="https://animate.style/#usage" className="text-decoration-none "  target="_konu">Google</a> <br/> <br/>
                    <a href="https://animate.style/#usage" className="text-decoration-none "  target="_konu">Google</a> <br/> <br/>
                    <a href="https://animate.style/#usage" className="text-decoration-none "  target="_konu">Google</a> <br/> <br/>

                    </div>
                </div>

                <div className="col-md-7  about-info">
                    <div className=" tab-content profile-tab" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="home-tab" role="tabpanel" aria-labelledby="home-tab-tab">
                          <div className="row">
                            <div className="col-6">
                                <label>User ID</label>
                            </div>
                            <div className="col-6">
                                <p>{aboutData._id}</p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-6">
                                <label>Name</label>
                            </div>
                            <div className="col-6">
                                <p>{aboutData.name}</p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-6">
                                <label>Email</label>
                            </div>
                            <div className="col-6">
                                <p>{aboutData.email}</p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-6">
                                <label>Phone</label>
                            </div>
                            <div className="col-6">
                                <p>{aboutData.phone}</p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-6">
                                <label>Profession</label>
                            </div>
                            <div className="col-6">
                                <p>{aboutData.work}</p>
                            </div>
                          </div>


                        </div>


                        <div className="tab-pane fade" id="profile-tab" role="tabpanel" aria-labelledby="profile-tab-tab">
                          <div className="row">
                            <div className="col-6">
                                <label>Experience</label>
                            </div>
                            <div className="col-6">
                                <p>Expert</p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-6">
                                <label>Total Projects</label>
                            </div>
                            <div className="col-6">
                                <p>58</p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-6">
                                <label>English level</label>
                            </div>
                            <div className="col-6">
                                <p>Fluent</p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-6">
                                <label>Availablity</label>
                            </div>
                            <div className="col-6">
                                <p>6 months</p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-6">
                                <label>Profession</label>
                            </div>
                            <div className="col-6">
                                <p>Developer</p>
                            </div>
                          </div>



                        </div>

                    </div>
                </div>
                
                
                

            </div>


       </form> 
   </div>      

</>
    )
}

export default About
