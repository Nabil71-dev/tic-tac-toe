# 🎮 Tic-Tac-Toe Game – React + Tailwind

A modern implementation of the classic **Tic-Tac-Toe** game built using **React**, **Tailwind CSS v4**, and **TypeScript**. This game supports player turns, winner detection, and move history navigation with a clean and responsive interface.

---

## 🌟 Features

- ✅ **Interactive Tic-Tac-Toe board (3x3)**
- ♻️ **State tracking with full move history**
- ⏮ **Jump to any previous board state**
- 👥 **Alternates turns between X and O**
- 📦 **Simple and modular React components**
- ⚛️ **React Hooks (`useState`) for state management**
- 🎨 **Tailwind CSS v4 for styling**
- 🖥 **Responsive design for mobile and desktop**


## 🚀 Getting Started

### 1. Clone the repository

```bash

git clone https://github.com/Nabil71-dev/tic-tac-toe.git
cd tic-tac-toe-react

```

### 2. Install dependencies & Start the development server
```bash

npm install
npm run dev

```

## 🧩 Component Tree

```bash
App
└── Game
    ├── Board
    │   └── Square × 9
    └── History
        └── Button list for each move
```



## 📁 Module Structure

```bash
src/
├── components/
│   ├── Game.tsx           # Main component managing game logic
│   ├── Board.tsx          # Renders the board and game status
│   ├── Square.tsx         # Individual clickable square
│   └── History.tsx        # Renders the history of moves
│
├── service/
|   ├── calculateWinner.ts      # Helper to determine game winner
│   └── calculateMatchDraw.ts   # Helper to determine game draw
│
├── App.tsx                # Entry point rendering Game
└── main.tsx or index.tsx  # ReactDOM rendering logic
```



## 🛠 Technologies Used

- **React** (with Hooks)
- **TypeScript**
- **Tailwind CSS v4**
- **Vite** or **Create React App** (depending on your setup)


## 🙌 Future Enhancements

- 🧠 **Add Single Player Mode (AI with Minimax)**
- 🧑‍🤝‍🧑 **Add Multiplayer with WebSocket**
- 🌙 **Dark Mode toggle**
- 📊 **Score tracking across games**


## 📜 License

- This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
