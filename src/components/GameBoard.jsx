// import { useState } from "react";

function GameBoard({ onSelectSquare, board /*activePlayerSymbol*/ }) {
	// const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// function handlSelectSquare(rowIndex, colIndex) {
	// 	setGameBoard((previousGameBoard) => {
	// 		const updatedBoard = [...previousGameBoard.map((innerArry) => [...innerArry])];
	// 		updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
	// 		return updatedBoard;
	// 	});
	// 	onSelectSquare();
	// }

	return (
		<ol id="game-board">
			{board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button
									onClick={() => onSelectSquare(rowIndex, colIndex)}
									disabled={playerSymbol != null}
								>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}

export default GameBoard;
