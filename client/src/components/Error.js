import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
<>
<div id="notfound">
    <div className="notfound">
        <div className="notfound-404 ">
            <h1 className=" text-404 z-index-3 position-absolute top-50 start-50 translate-middle"
            style={{fontSize:"300px"}}
            >404</h1>
            <div className="position-absolute top-50 start-50 translate-middle text-center">
                <h1 className=" error-text ">WE ARE SORRY, PAGE NOT FOUND !</h1><br/> <br/>
                <p>THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED, HAD IT'S NAME CHANGED OR IS TEMPORARILY UAVAILABLE</p>
                <NavLink to="/" className="btn btn-primary rounded-pill"> Back to Home </NavLink>      
            </div>
          
        </div>
    </div>
</div>          
</>
    )
}

export default Error
