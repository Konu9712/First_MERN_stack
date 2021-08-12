import React,{useEffect,useState,useContext} from 'react'
import {useHistory} from "react-router-dom"
import {UserContext} from '../App'

const Signout = () => {
    
    const {state,dispatch} = useContext(UserContext);

    const history = useHistory();

    //Promisses
   useEffect(()=>{
        fetch('/signout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
            dispatch({type:"USER",payload:false})
            history.push("/signin",{replace:true});
            if( res.status != 200){
                history.push("/signin")    
            } 
        }).catch((e)=>{
            console.log(e)
        })
    })
    return (
        <>
         <h1>Logout page</h1>   
        </>
    )
}

export default Signout
