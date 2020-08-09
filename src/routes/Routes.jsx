import React from "react";
import { Route, Switch} from "react-router-dom";
import SignIn from "../components/pages/Sign-In";
import {Chat} from "../components/pages/Chat";

import {ProtectedRouter} from "./ProtectedRoute";


export default function () {
    return (
        <Switch>
            <Route path={'/'} exact component={SignIn}/>
            <ProtectedRouter path={'/chat'}  component={Chat}/>
        </Switch>
    )
}

