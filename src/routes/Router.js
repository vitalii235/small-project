import React from 'react'
import {BrowserRouter as Router,} from "react-router-dom";
import Switcher from './Routes'
import Header from "../components/common/Header";

export const MainRouter = ({children}) => {
    return <Router>
        <Header/>
        <Switcher/>
    </Router>
}