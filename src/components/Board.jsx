import React,{useState} from "react";
import Boardbutton from "./Boardbutton";

function Board(){
    const [arr , setarr] = useState(Array(9).fill(null));
    const [isXturn , setXturn] = useState(true);

    function checkwinner(){
        const logicarr = [[0,1,2],
                          [3,4,5],
                          [6,7,8],
                          [0,3,6],
                          [2,5,8],
                          [0,4,8],
                          [2,4,6],
                          [1,4,7],
                        ];
        for(let logic of logicarr){
            const [a,b,c]= logic;
            if(arr[a]!==null && arr[a]===arr[b] &&arr[a]===arr[c]){
                console.log("winnwer")
                return arr[a];
            }
        }
        return false;
    }

    function handleclick(index){
        if(arr[index]!==null) return ;
        const copyarr = [...arr];
        copyarr[index] = isXturn ? "X" : "0";
        setarr(copyarr);
        setXturn(!isXturn);
    }
    const iswinner = checkwinner();
    return (

        <div className="Boardcontainer">

            { iswinner ? <>               
            
                <h1>
                {iswinner} is winner
                </h1> 
            </> 
                
            :
            <>
                <div className="boardrow">
                    <Boardbutton onClick={()=> {handleclick(0)} }   value ={arr[0]}  />
                    <Boardbutton onClick={()=> {handleclick(1)}}   value ={arr[1]}  />
                    <Boardbutton onClick={()=> {handleclick(2)}}   value ={arr[2]}  />
                </div>
                <div className="boardrow">
                    <Boardbutton onClick={()=> handleclick(3)}   value ={arr[3]}  />
                    <Boardbutton onClick={()=> handleclick(4)}   value ={arr[4]}  />
                    <Boardbutton onClick={()=> handleclick(5)}   value ={arr[5]}  />
                </div>
                <div className="boardrow">
                    <Boardbutton onClick={()=> handleclick(6)}   value ={arr[6]}  />
                    <Boardbutton onClick={()=> handleclick(7)}   value ={arr[7]}  />
                    <Boardbutton onClick={()=> handleclick(8)}   value ={arr[8]}  />
               </div>
            </>
            }
        </div>        
    );
}
export default Board;