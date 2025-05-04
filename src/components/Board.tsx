import Square from "./Square";
import { calculateWinner } from "../service/calculateWinner";
import { calculateMatchDraw } from "../service/calculateMatchDraw";

interface BoardType {
  squares: Array;
  isXNext: Boolean;
  onPlay: Function;
}

export default function Board(props: BoardType) {
  const { squares, isXNext, onPlay } = { ...props };

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

    const newSquares = squares.slice();
    newSquares[i] = isXNext ? "X" : "O";
    onPlay(newSquares);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-lg font-semibold">{status}</h2>
      <div className="grid grid-cols-3 gap-2">
        {squares.map((value: [], i: number) => (
          <Square
            key={i}
            value={value}
            onSquareClick={() => handleSquareClick(i)}
          />
        ))}
      </div>
    </div>
  );
}
