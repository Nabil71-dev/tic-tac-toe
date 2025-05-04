import Square from "./Square";
import { calculateWinner } from "../service/calculateWinner";
import { calculateMatchDraw } from "../service/calculateMatchDraw";

interface BoardType {
  squares: Array;
  isXNext: Boolean;
  onPlay: Function;
  onReset: () => void;
}

export default function Board(props: BoardType) {
  const { squares, isXNext, onPlay, onReset } = { ...props };

  const winner = calculateWinner(squares);
  const isMatchDraw = calculateMatchDraw(squares);

  const status = winner
    ? `🎉 Winner: ${winner}`
    : isMatchDraw
    ? "👉 Match Draw"
    : `👉 Current Player : ${isXNext ? "X" : "O"}`;

  const handleSquareClick = (i = 0) => {
    if (squares[i] || winner) {
      return;
    }

    const newSquares = squares?.slice();
    newSquares[i] = isXNext ? "X" : "O";
    onPlay(newSquares);
  };

  const resetButton = winner || isMatchDraw ? (
    <button
      onClick={onReset}
      className="px-3 py-1 rounded bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold shadow-md hover:from-blue-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
    >
      🔁 Reset Game
    </button>
  ) : null;

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-lg font-semibold">{status}</h2>
      <div className="grid grid-cols-3 gap-2">
        {squares?.map((value: [], i: number) => (
          <Square
            key={i}
            value={value}
            onSquareClick={() => handleSquareClick(i)}
          />
        ))}
      </div>
      {resetButton}
    </div>
  );
}
