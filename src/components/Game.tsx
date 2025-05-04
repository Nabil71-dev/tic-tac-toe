import { useState } from "react";
import Board from "./Board";
import History from "./History";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isXNext, setIsXNext] = useState(true);

  const currentSquares = history?.[currentMove];

  const handlePlay = (nextSquares: []) => {
    setIsXNext((prev) => !prev);
    const nextHistory = [...history?.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory?.length - 1);
  };

  const jumpToMove = (move: number) => {
    setCurrentMove(move);
    setIsXNext(move % 2 === 0);
  };

  const handleResetHistory = () =>{
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setIsXNext(true);
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 w-full max-w-3xl">
        <Board squares={currentSquares} isXNext={isXNext} onPlay={handlePlay} onReset={handleResetHistory}/>
        <History history={history} onHistoryClick={jumpToMove} />
      </div>
    </main>
  );
}
