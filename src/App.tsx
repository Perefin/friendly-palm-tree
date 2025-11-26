import { Counter } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to React + Vite + TypeScript</h1>
        <p>
          Start building your application by editing <code>src/App.tsx</code>
        </p>
      </header>
      <main className="app-main">
        <p>This project is set up with:</p>
        <ul>
          <li>⚡ Vite for fast development</li>
          <li>⚛️ React 19 with TypeScript</li>
          <li>🎨 CSS with theming support</li>
          <li>📏 ESLint & Prettier configured</li>
        </ul>
        <div className="app-example">
          <Counter />
        </div>
      </main>
    </div>
  );
}

export default App;
