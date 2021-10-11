import React from 'react';
import {TopBar} from "./components/topbar/TopBar";
import {Home} from "./pages/home/Home";
import {Single} from "./pages/single/SIngle";
import {Write} from "./pages/write/Write";
import {Settings} from "./pages/settings/Settings";
import {Login} from "./pages/login/Login";
import {Register} from "./pages/register/Register";
import {HashRouter, Route, Switch} from "react-router-dom";

function App() {
    const user = false

    return (<HashRouter>
            <TopBar/>
            <Switch>
                <Route exact path={'/'} render={() => <Home/>}/>
                <Route path={'/register'}>
                    {user? <Home/> : <Register/>}
                </Route>
                <Route path={'/login'} render={() => <Login/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/write'} render={() => <Write/>}/>
                <Route path={'/post/:postid'} render={() => <Single/>}/>
            </Switch>
        </HashRouter>
    );
}

export default App;
