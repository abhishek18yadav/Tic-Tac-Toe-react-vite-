import React from "react";

function Boardbutton({onClick , value}){
    return(
        <div className="boardbtn" onClick={onClick}>
            <button>
                {value}
            </button>
        </div>
    );
};
export default Boardbutton;