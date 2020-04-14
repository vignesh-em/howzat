import React from 'react';
import './App.css';
import Viewer from "./viewer/Viewer";
import Login from "./login/Login";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" component={Viewer}/>
        </Switch>
    );
}

export default App;
