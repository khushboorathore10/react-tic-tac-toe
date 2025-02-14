export const Square = (props) => {
    const setMove = () => {
        const localMove = props.currentMove;
        let localNextMove = props.isNextTurn;

        console.log('current',props.currentMove)
        props.setCurrentMove(localMove+1);
        console.log('next',localMove+1);

        if((localMove+1) % 2 === 0) 
            localNextMove = true;
        else
            localNextMove = false;

        props.setNextTurn(localNextMove);
        props.setSquareDisp();

    }
    return(
        <>
        <button className="Square" onClick={setMove}>
            { props.value }</button>
        </>
    );
}