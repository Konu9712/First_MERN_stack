import React from 'react'
import home_img from '../images/home_img.png'

const Home = () => {
    return (
<>
<div className="home_div">
<div className="home_page  row ">

     <div className="home_text col-md-6 col-11  my-md-auto d-block  my-4 text-center">
         <h2 className=" mx-5 animate__animated animate__fadeInUp  " style={{color:"#fff"}}>Welcome</h2>
         <h1 className=" mx-5 animate__animated animate__fadeInUp ">We are the <span style={{color:"#F43300"}}>MERN</span> Developer</h1>
      </div>

      <div className="home_div col-md-6 col-11 ">
        <img  className="home_image my-5 mx-auto d-block animate__animated animate__fadeIn" src={home_img} alt = "home_image"/>
      </div>


         

  </div>

</div>

</>
    )
}

export default Home
