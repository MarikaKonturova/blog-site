import React from 'react';
import './App.css';
import {TopBar} from "./topbar/TopBar";
import {Home} from "./pages/home/Home";

function App() {
    return (<>
            <TopBar/>
            <Home/>
        </>
    );
}

export default App;
