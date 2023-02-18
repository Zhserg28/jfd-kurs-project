import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Users from "./components/users";
import Main from "./components/main";
import Login from "./components/login";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>                
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={Users} />
            </Switch>
        </div>
    );
}

export default App;
