import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">React + Tailwind App</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col items-center justify-center">
            <img src={logo} className="h-32 w-32 animate-spin" alt="logo" />
            <p className="mt-4 text-lg text-gray-700">
              Edit <code className="bg-gray-200 p-1 rounded">src/App.js</code> and save to reload.
            </p>
            <a
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <a
              className="mt-2 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Tailwind
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
