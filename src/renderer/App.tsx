import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import './App.css';

export default function App() {
  return (
    <div className="flex flex-wrap h-full items-center justify-center bg-gradient-to-b from-white via-white via-30% to-valorant-red">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
