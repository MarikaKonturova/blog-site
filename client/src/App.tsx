import React, {useContext} from 'react';
import {TopBar} from "./components/topbar/TopBar";
import {Home} from "./pages/home/Home";
import {Single} from "./pages/single/SIngle";
import {Write} from "./pages/write/Write";
import {Settings} from "./pages/settings/Settings";
import {Login} from "./pages/login/Login";
import {Register} from "./pages/register/Register";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {Context} from "./context/Context";

function App() {
    const {state} = useContext(Context)
    const {user} = state
    return (<HashRouter>
            <TopBar/>
            <Switch>
                <Route exact path={'/'} render={() => <Home/>}/>
                <Route path={'/register'}>{user ? <Redirect to={'/'}/> : <Register/>}</Route>
                <Route path={'/login'}>{user ? <Redirect to={'/'}/> : <Login/>}</Route>
                <Route path={'/write'}>{!user ? <Redirect to={'/login'}/> : <Write/>}</Route>
                <Route path={'/settings'}>{!user ? <Redirect to={'/login'}/> : <Settings/>}                </Route>
                <Route path={'/post/:postid'} render={() => <Single/>}/>
            </Switch>
        </HashRouter>
    );
}

export default App;
