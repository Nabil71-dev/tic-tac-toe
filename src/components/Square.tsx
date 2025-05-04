interface SquareType {
  value: any;
  onSquareClick: () => void;
}

export default function Square({ value, onSquareClick }: SquareType) {

  return (
    <button
      onClick={onSquareClick}
      className="w-16 h-16 text-2xl font-bold text-gray-800 border border-gray-300 rounded-md hover:bg-gray-200 transition-all"
    >
      {value}
    </button>
  );
}
