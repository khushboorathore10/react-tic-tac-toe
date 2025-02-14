import { Square } from './Square'
import { Winner } from './Winner'

import { useState } from 'react';
export const Board = () => {
const [square , setSquare] = useState(Array(9).fill(""))
const [currentMove , setCurrentMove] = useState(0)
const [isNextTurn , setNextTurn] = useState(true)
const [history , setHistory] = useState(Array(9).fill(""))
const [winner , setWinner] = useState(false)

const handleSquareClick = (index) => {
    const newSquare = [...square];

    if(newSquare[index] !== "" || winner) return;

    newSquare[index] = isNextTurn ? 'O': 'X';
    setSquare(newSquare);

    console.log('History Before',history);
    updateHistory(index,newSquare[index]);

    const localWinner = findWinner(newSquare);
    console.log('Winner',localWinner);

    if(localWinner){
        setWinner(localWinner);
    }
}
const updateHistory = (index,value) => {
    const localHistory = [...history];
    if(localHistory[index] === ""){
        localHistory[index] = value;
    }
    setHistory(localHistory);
    console.log('History After',localHistory);
}
const findWinner = (square) => {
    console.log('Square',square);
    const winningConditions = [
        [0,1,2],[3,4,5],[6,7,8], //rows
        [0,3,6],[1,4,7],[2,5,8], //col
        [0,4,8],[2,4,6] //diagonals
    ]
    for(let condition of winningConditions){
        const [a,b,c] = condition;
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return square[a]; //returning the winner
        }
    }
    return null; // on-going game
}
const resetGame = () => {
    setSquare(Array(9).fill("")); 
    setWinner(null); 
    setNextTurn(true);
};

    return(
        <>
        <div className="Board">
          {
            square.map((value, index) => 
                (
                    <Square key={index} value={value}
                    currentMove={currentMove} 
                    isNextTurn={isNextTurn}
                    setNextTurn={setNextTurn}
                    setCurrentMove={setCurrentMove}
                    setSquareDisp={() => handleSquareClick(index)} />
                )
            )
        }
        </div>
        {winner && <Winner winner={winner} resetGame={resetGame} />}
        </>
    );
}