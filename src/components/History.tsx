interface HistoryType {
  history: any;
  onHistoryClick: Function;
}

export default function History({ history, onHistoryClick }: HistoryType) {
  const moves = history?.map((square: [], move: number) => {
    let description = "";
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = `Go to start the game`;
    }

    return (
      <li key={move}>
        <button
          className="w-full text-left px-4 py-2 bg-blue-100 hover:bg-blue-200 text-sm rounded-md transition"
          onClick={() => onHistoryClick(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="w-full md:w-64">
      <ul className="space-y-2">{moves}</ul>
    </div>
  );
}
