import React,{useState} from "react";
import Board from "./components/board";
import Boardbutton from "./components/Boardbutton";
import './App.css';

function App(){
    return (<div className="bodybackground">
        <div className="gamename"> <h4> <i><u>TIC TAC TOE</u></i></h4></div>
        <div className="boardlook2"><Board/></div>
    </div>
            
    );
}
export default App;