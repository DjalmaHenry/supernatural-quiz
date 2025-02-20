import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordCheck = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'IMPALA67') {
      navigate('/supernatural-puzzle');
    } else {
      setError('Palavra-chave incorreta! Como diria Dean Winchester: "Você precisa estudar mais sobre Supernatural!"');
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setPassword('');
    }
  };

  return (
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
      <div className="relative z-10 w-full max-w-xl mx-auto">
        <div className="bg-black/70 backdrop-blur-md rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.3)] p-8">
          <h2 className="horror-title text-3xl text-red-500 mb-6 text-center">
            Supernatural Puzzle
          </h2>
          <p className="horror-text text-xl text-gray-300 mb-8 text-center">
            Digite a palavra-chave para acessar o puzzle
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className={`${shake ? 'animate-shake' : ''}`}>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value.toUpperCase())}
                placeholder="Digite a palavra-chave"
                className={`w-full bg-gray-900/80 text-white horror-text text-xl p-4 rounded border-2 ${error ? 'border-red-500' : 'border-gray-700'} focus:border-red-500 focus:outline-none focus:shadow-[0_0_10px_rgba(255,0,0,0.3)]`}
                autoFocus
              />
              
              {error && (
                <p className="horror-text text-red-500 text-center mt-4 animate-pulse">{error}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full horror-text text-2xl bg-red-900/80 hover:bg-red-800 text-white py-4 px-8 rounded border-2 border-red-700 shadow-[0_0_10px_rgba(255,0,0,0.5)] transition-all duration-300 hover:scale-105"
            >
              Acessar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordCheck;
