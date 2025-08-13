import {useState} from "react";

export default function  LudoBoard(){
    let [Moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});
let updateBlue=()=>{
        console.log(Moves.blue);
        setMoves((prevMoves) =>{
            return {...prevMoves,blue:prevMoves.blue+1}});

        
    }
    let updateRed=()=>{
        console.log(Moves.red);
        setMoves((prevMoves) =>{
            return {...prevMoves,red:prevMoves.red+1}});
    }
    let updateYellow=()=>{
        console.log(Moves.yellow);
        setMoves((prevMoves) =>{
            return {...prevMoves,yellow:prevMoves.yellow+1}});
    }
    let updateGreen=()=>{
        console.log(Moves.green);
        setMoves((prevMoves) =>{
            return {...prevMoves,green:prevMoves.green+1}});
    }

    return(
        <div>
            <p>Game Begins</p>
        
        <div className="div">
            <p>Blue Moves :{Moves.blue} </p>
            <button style={{backgroundColor:"blue", color:"black"} } onClick={updateBlue}> Blue count</button>
        </div>
        <div className="div">
            <p>Red Moves : {Moves.red}</p>
            <button style={{backgroundColor:"red", color:"black"} }onClick={updateRed}>Red count</button>
        </div>
        <div className="div">
            <p>Yellow Moves : {Moves.yellow}</p>
            <button style={{backgroundColor:"yellow", color:"black"} }onClick={updateYellow}>Yellow count</button>
        </div>
        <div className="div">
            <p>Green Moves :{Moves.green} </p>
            <button style={{backgroundColor:"green", color:"black"} } onClick={updateGreen}>Green count</button>
        </div>
        </div>
       
    );
}