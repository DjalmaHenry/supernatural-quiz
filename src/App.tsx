import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Quiz from './components/Quiz';
import LockIcon from './components/LockIcon';

function App() {
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
                <div className="relative mb-6">
                  <button 
                    disabled
                    className="horror-text block w-full bg-gray-800/80 text-gray-500 text-2xl py-4 px-8 rounded border-2 border-gray-700 cursor-not-allowed"
                  >
                    Fase 2: Bloqueada
                  </button>
                  <LockIcon />
                </div>

                {/* Fase 3 */}
                <div className="relative mb-8">
                  <button 
                    disabled
                    className="horror-text block w-full bg-gray-800/80 text-gray-500 text-2xl py-4 px-8 rounded border-2 border-gray-700 cursor-not-allowed"
                  >
                    Fase 3: Bloqueada
                  </button>
                  <LockIcon />
                </div>

                {/* Botão Receber Presente */}
                <div className="relative">
                  <button 
                    disabled
                    className="horror-text block w-full bg-gray-800/80 text-gray-500 text-2xl py-4 px-8 rounded border-2 border-gray-700 cursor-not-allowed"
                  >
                    Receber Presente
                  </button>
                  <LockIcon />
                </div>
              </div>
            </div>
          </div>
        } />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
