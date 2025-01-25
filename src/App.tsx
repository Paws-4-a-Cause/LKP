import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="flex space-x-4 mb-6">
          <a href="https://vite.dev" target="_blank">
            <img
              src={viteLogo}
              className="h-16 w-16 transition-transform duration-300 hover:scale-110"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="h-16 w-16 transition-transform duration-300 hover:scale-110"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Vite + React</h1>
        <div className="card bg-white shadow-lg rounded-xl p-6 mb-4">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            count is {count}
          </button>
          <p className="text-gray-600 mt-4">
            Edit <code className="bg-gray-200 p-1 rounded">src/App.tsx</code>{" "}
            and save to test HMR
          </p>
        </div>
        <p className="text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
