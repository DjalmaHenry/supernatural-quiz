import { useState } from 'react';
import { Link } from 'react-router-dom';

const BinaryChallenge = () => {
  const [password, setPassword] = useState('');
  const [showChallenge, setShowChallenge] = useState(false);
  const [decodedInput, setDecodedInput] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const binaryMessage = "01001101 01101001 01101110 01101000 01100001 00100000 01000101 01110011 01110100 01110010 01100101 01101100 01100001 00100000 01010111 01100001 01111001 01110111 01100001 01110010 01100100 00100000 01000001 01101101 01100001 01100100 01100001 00101100 00100000 01110100 01110101 01100001 00100000 01100001 01101100 01101101 01100001 00100000 11000011 10101010 00100000 01100001 00100000 01000001 01101101 01100001 01101100 01100001 00100000 01110001 01110101 01100101 00100000 01101001 01101100 01110101 01101101 01101001 01101110 01100001 00100000 01101101 01101001 01101110 01101000 01100001 00100000 01100101 01110100 01100101 01110010 01101110 01101001 01100100 01100001 01100100 01100101 00101110 00100000 01000101 01101101 00100000 01100011 01100001 01100100 01100001 00100000 01100010 01100001 01110100 01100001 01101100 01101000 01100001 00100000 01100101 00100000 01110000 01101111 01110010 00100000 01110100 01101111 01100100 01100001 01110011 00100000 01100001 01110011 00100000 01110110 01101001 01100100 01100001 01110011 00101100 00100000 01110000 01110010 01101111 01101101 01100101 01110100 01101111 00100000 01110011 01100101 01110010 00100000 01110100 01100101 01110101 00100000 01000100 01100101 01100001 01101110 00101100 00100000 01100001 01110011 01110011 01101001 00100000 01100011 01101111 01101101 01101111 00100000 11000011 10101111 01110011 00100000 01101101 01100101 01110101 00100000 01010011 01100001 01101101 00101110 00100000 01010011 01100101 01100111 01110101 01101001 01110010 01100101 01101101 01101111 01110011 00100000 01101010 01110101 01101110 01110100 01101111 01110011 00101100 00100000 01101101 01100101 01110101 00100000 01100001 01101101 01101111 01110010 00100000 01101001 01101110 01100110 01101001 01101110 01101001 01110100 01101111 00101100 00100000 01100101 00100000 01101110 01101111 01110011 01110011 01100001 00100000 01110000 01100001 01110011 01110011 01101001 01100001 01101111 00100000 01100100 01100101 01110011 01100001 01100110 01101001 01100001 01110010 11000011 10100001 00100000 01100001 01110100 01100101 00100000 01101111 00100000 01010110 01100001 01111010 01101001 01101111 00101110";

  const decodedMessage = "Minha Estrela Wayward Amada, tua alma é a Amala que ilumina minha eternidade. Em cada batalha e por todas as vidas, prometo ser teu Dean, assim como és meu Sam. Seguiremos juntos, meu amor infinito, e nossa paixão desafiará até o Vazio.";

  const handlePasswordSubmit = () => {
    if (password.toLowerCase() === "samandriel") {
      setShowChallenge(true);
      setPassword('');
    }
  };

  const handleMessageSubmit = (message: string) => {
    setDecodedInput(message);
    if (message.trim() === decodedMessage.trim()) {
      setShowSuccess(true);
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
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="bg-black/70 backdrop-blur-md rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.3)] p-8">
          <div className="text-center mb-8">
            <h2 className="horror-title text-3xl text-red-500 mb-4">
              Fase 3: Enigma Binário
            </h2>
            {!showChallenge ? (
              <div className="space-y-6">
                <p className="horror-text text-xl text-gray-300 mb-6">
                  Para acessar o enigma binário, insira a palavra-chave: SAMANDRIEL
                </p>
                <div className="flex gap-4 justify-center">
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="horror-text bg-black/50 border-2 border-red-700 text-white px-4 py-2 rounded w-64"
                    placeholder="Digite a palavra-chave..."
                  />
                  <button
                    onClick={handlePasswordSubmit}
                    className="horror-text bg-red-900/80 hover:bg-red-800 text-white px-6 py-2 rounded border-2 border-red-700"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {!showSuccess ? (
                  <>
                    <div className="horror-text text-xl text-green-500 mb-4">
                      Decodifique a mensagem binária abaixo. Cada grupo de 8 dígitos representa uma letra.
                      <br />
                      <span className="text-lg text-gray-400">
                        Dica: Use um conversor de binário online para revelar a mensagem secreta.
                      </span>
                    </div>
                    <div className="bg-black/70 p-4 rounded-lg">
                      <pre className="horror-text text-green-500 text-sm whitespace-pre-wrap break-words">
                        {binaryMessage}
                      </pre>
                    </div>
                    <div>
                      <textarea
                        className="w-full horror-text bg-black/50 border-2 border-red-700 text-white p-4 rounded h-32"
                        placeholder="Cole aqui a mensagem traduzida..."
                        value={decodedInput}
                        onChange={(e) => handleMessageSubmit(e.target.value)}
                      />
                    </div>
                  </>
                ) : (
                  <div className="space-y-8">
                    <div className="horror-text text-2xl text-green-500 animate-pulse mb-4">
                      Parabéns! Você decodificou a mensagem secreta!
                    </div>
                    <div className="bg-black/70 p-6 rounded-lg">
                      <p className="horror-text text-xl text-red-500 mb-6">
                        {decodedMessage}
                      </p>
                      <p className="horror-text text-lg text-gray-300">
                        Copie a frase acima para desbloquear seu presente na tela inicial
                      </p>
                    </div>
                    <Link
                      to="/"
                      className="horror-text inline-block bg-red-900/80 hover:bg-red-800 text-white px-8 py-3 rounded border-2 border-red-700 transition-all duration-300 hover:scale-105"
                    >
                      Voltar ao Menu Principal
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinaryChallenge;
