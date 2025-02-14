export const Winner = (props) => {
    return (
        <>
        <div className="winner-overlay">
                <div className="winner-content">
                    <h2>{props.winner} Wins!</h2>
                    <button onClick={props.resetGame}>Restart Game</button>
                </div>
        </div>
        </>
    )
}