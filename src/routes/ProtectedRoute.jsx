import React from 'react'
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

export const ProtectedRouter = ({component: Component, ...res}) => {
    const {token} = useSelector(state=>state.reducer)
    if(token){
        return <Route {...res} render={props=><Component {...props}/>}/>
    }else{
        return <Redirect to={'/'}/>
    }
}