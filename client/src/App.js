import React, {createContext,useReducer} from 'react';
import "./App.css"
import {Route, Switch } from 'react-router-dom';     // Single page application [No refresh]
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Error from './components/Error';
import Signout from './components/Signout';

import {initialState,reducer} from '../src/reducer/useReducer';


 //Context API
 export const UserContext = createContext();

const Routing = () =>{
   return(
     <Switch >
     <Route exact  path="/">
        <Home/>
     </Route>
     
     <Route path="/About">
        <About/>
     </Route>

     <Route path="/Contact">
        <Contact/>
     </Route>

     <Route path="/Signin">
         <Signin/>
     </Route>

     <Route path="/Signup">
        <Signup/>
     </Route>
     <Route path="/Signout">
        <Signout/>
     </Route>

     <Route>
        <Error />
     </Route>
</Switch>
   )
}


const App = () => {
  const [state, dispatch] = useReducer(reducer,initialState);

  return (
   
<div>

<UserContext.Provider value={{state,dispatch}}>
     
      <Navbar/>
      <Routing/>
   
 </UserContext.Provider>

    </div>
  )
}

export default App
