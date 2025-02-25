import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Quiz from './components/Quiz';
import PasswordCheck from './components/PasswordCheck';
import SupernaturalPuzzle from './components/SupernaturalPuzzle';
import BinaryChallenge from './components/BinaryChallenge';
import FinalPresent from './components/FinalPresent';

function App() {
  const [presentMessage, setPresentMessage] = useState('');
  const [showPresent, setShowPresent] = useState(false);

  const correctMessage = "Minha Estrela Wayward Amada, tua alma é a Amala que ilumina minha eternidade. Em cada batalha e por todas as vidas, prometo ser teu Dean, assim como és meu Sam. Seguiremos juntos, meu amor infinito, e nossa paixão desafiará até o Vazio.";

  const handlePresentSubmit = () => {
    if (presentMessage.trim() === correctMessage.trim()) {
      setShowPresent(true);
    }
  };

  if (showPresent) {
    return <FinalPresent />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div 
            className="w-screen h-screen flex items-center justify-center p-4 relative overflow-hidden"
            style={{
              backgroundImage: "url('/bg.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              animation: 'lightning 10s infinite'
            }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            <div className="relative z-10 w-full max-w-7xl mx-auto">
              <div className="p-8 bg-black/70 rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.3)] text-center backdrop-blur-md max-w-3xl mx-auto">
                <h1 className="horror-title text-5xl mb-4 text-red-500">
                  1 mês de noivado de DJ e Vic
                </h1>
                <p className="horror-text text-2xl text-gray-300 mb-12">
                  Complete todas fases do desafio Supernatural para ganhar seu presente
                </p>
                
                {/* Fase 1 */}
                <Link 
                  to="/quiz" 
                  className="horror-text block w-full bg-red-900/80 hover:bg-red-800 text-white text-2xl py-4 px-8 rounded border-2 border-red-700 shadow-[0_0_10px_rgba(255,0,0,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.7)] mb-6"
                >
                  Fase 1: Quiz Supernatural
                </Link>

                {/* Fase 2 */}
                <Link 
                  to="/password-check" 
                  className="horror-text block w-full bg-red-900/80 hover:bg-red-800 text-white text-2xl py-4 px-8 rounded border-2 border-red-700 shadow-[0_0_10px_rgba(255,0,0,0.5)] transition-all duration-300 hover:scale-105 mb-6"
                >
                  Fase 2: Supernatural Puzzle
                </Link>

                {/* Fase 3 */}
                <Link 
                  to="/binary-challenge" 
                  className="horror-text block w-full bg-red-900/80 hover:bg-red-800 text-white text-2xl py-4 px-8 rounded border-2 border-red-700 shadow-[0_0_10px_rgba(255,0,0,0.5)] transition-all duration-300 hover:scale-105 mb-6"
                >
                  Fase 3: Enigma Binário
                </Link>

                {/* Botão Receber Presente */}
                <div className="space-y-4">
                  <textarea
                    className="w-full horror-text bg-black/50 border-2 border-red-700 text-white p-4 rounded h-32"
                    placeholder="Cole aqui a frase secreta para receber seu presente..."
                    value={presentMessage}
                    onChange={(e) => setPresentMessage(e.target.value)}
                  />
                  <button
                    onClick={handlePresentSubmit}
                    className="horror-text block w-full bg-red-900/80 hover:bg-red-800 text-white text-2xl py-4 px-8 rounded border-2 border-red-700 shadow-[0_0_10px_rgba(255,0,0,0.5)] transition-all duration-300 hover:scale-105"
                  >
                    Receber Presente
                  </button>
                </div>
              </div>
            </div>
          </div>
        } />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/password-check" element={<PasswordCheck />} />
        <Route path="/supernatural-puzzle" element={<SupernaturalPuzzle />} />
        <Route path="/binary-challenge" element={<BinaryChallenge />} />
      </Routes>
    </Router>
  );
}

export default App;
