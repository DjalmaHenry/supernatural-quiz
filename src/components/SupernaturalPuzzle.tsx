import { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React from 'react';
import { GiPentacle, GiCrossMark, GiAngelWings, GiCrownedSkull, GiPentagramRose, GiDragonHead, GiDragonSpiral } from 'react-icons/gi';
import BonusGiftCard from './BonusGiftCard';

interface IconProps {
  className?: string;
}

interface Symbol {
  id: string;
  type: string;
  name: string;
  Icon: React.ComponentType<IconProps>;
  isPlaced?: boolean;
}

// Função para embaralhar array
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Símbolos do puzzle
const symbols: Symbol[] = [
  { id: '1', type: 'seal', name: 'Pentagrama do Colt', Icon: GiPentacle },
  { id: '2', type: 'mark', name: 'Marca de Caim', Icon: GiCrossMark },
  { id: '3', type: 'warding', name: 'Símbolo Anti-Anjo', Icon: GiAngelWings },
  { id: '4', type: 'knight', name: 'Cavaleiros do Inferno', Icon: GiCrownedSkull },
  { id: '5', type: 'protection', name: 'Proteção Enochiana', Icon: GiPentagramRose },
  // Símbolos extras para confundir
  { id: '6', type: 'fake1', name: 'Falso Símbolo 1', Icon: GiDragonHead },
  { id: '7', type: 'fake2', name: 'Falso Símbolo 2', Icon: GiDragonSpiral },
  { id: '8', type: 'fake3', name: 'Falso Símbolo 3', Icon: GiPentacle },
];

const correctOrder = ['1', '2', '3', '4', '5'];

// Componente de símbolo arrastável
interface DraggableSymbolProps {
  symbol: Symbol;
  isPlaced?: boolean;
}

const DraggableSymbol = ({ symbol, isPlaced = false }: DraggableSymbolProps) => {
  const [{ isDragging }, drag] = useDrag<Symbol, unknown, { isDragging: boolean }>(() => ({
    type: 'symbol',
    item: { ...symbol, isPlaced },
    canDrag: !isPlaced,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const IconComponent = symbol.Icon;

  return (
    <div
      ref={!isPlaced ? (drag as unknown as React.RefObject<HTMLDivElement>) : undefined}
      className={`w-20 h-20 border-2 ${
        isDragging ? 'opacity-50' : 'opacity-100'
      } ${isPlaced ? 'border-green-500 bg-green-900/20' : 'border-red-500'} 
      rounded flex items-center justify-center ${isPlaced ? 'cursor-default' : 'cursor-grab'} text-red-500
      ${!isPlaced && 'hover:shadow-[0_0_10px_rgba(255,0,0,0.3)] hover:scale-105'} transition-all duration-300
      group relative`}
    >
      <IconComponent className={`w-12 h-12 ${isPlaced ? 'text-green-500' : ''}`} />
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap horror-text">
        {symbol.name}
      </div>
    </div>
  );
};

// Slot para receber símbolos
interface DropSlotProps {
  index: number;
  onDrop: (item: Symbol, index: number) => void;
  placedSymbol: Symbol | null;
}

const DropSlot = ({ index, onDrop, placedSymbol }: DropSlotProps) => {
  const [{ isOver }, drop] = useDrop<Symbol, void, { isOver: boolean }>(() => ({
    accept: 'symbol',
    drop: (item) => onDrop(item, index),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="relative">
      <div
        ref={drop as unknown as React.RefObject<HTMLDivElement>}
        className={`w-20 h-20 border-2 ${
          isOver ? 'border-yellow-500' : 'border-gray-700'
        } rounded flex items-center justify-center ${
          !placedSymbol ? 'bg-gray-900/50' : ''
        }`}
      >
        {placedSymbol && <DraggableSymbol symbol={placedSymbol} isPlaced={true} />}
        {!placedSymbol && (
          <span className="horror-text text-gray-500 text-lg">{index + 1}</span>
        )}
      </div>
    </div>
  );
};

const SupernaturalPuzzle = () => {
  const [availableSymbols, setAvailableSymbols] = useState(shuffleArray([...symbols]));
  const [placedSymbols, setPlacedSymbols] = useState<(Symbol | null)[]>(Array(5).fill(null));
  const [timer, setTimer] = useState(300); // 5 minutos
  const [gameOver, setGameOver] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [showBonus, setShowBonus] = useState(false);
  const [showBinaryChallenge, setShowBinaryChallenge] = useState(false);
  const [binaryInput, setBinaryInput] = useState('');
  const [binarySuccess, setBinarySuccess] = useState(false);

  const binaryMessage = "01001101 01101001 01101110 01101000 01100001 00100000 01000101 01110011 01110100 01110010 01100101 01101100 01100001 00100000 01010111 01100001 01111001 01110111 01100001 01110010 01100100 00100000 01000001 01101101 01100001 01100100 01100001 00101100 00100000 01110100 01110101 01100001 00100000 01100001 01101100 01101101 01100001 00100000 11000011 10101010 00100000 01100001 00100000 01000001 01101101 01100001 01101100 01100001 00100000 01110001 01110101 01100101 00100000 01101001 01101100 01110101 01101101 01101001 01101110 01100001 00100000 01101101 01101001 01101110 01101000 01100001 00100000 01100101 01110100 01100101 01110010 01101110 01101001 01100100 01100001 01100100 01100101 00101110 00100000 01000101 01101101 00100000 01100011 01100001 01100100 01100001 00100000 01100010 01100001 01110100 01100001 01101100 01101000 01100001 00100000 01100101 00100000 01110000 01101111 01110010 00100000 01110100 01101111 01100100 01100001 01110011 00100000 01100001 01110011 00100000 01110110 01101001 01100100 01100001 01110011 00101100 00100000 01110000 01110010 01101111 01101101 01100101 01110100 01101111 00100000 01110011 01100101 01110010 00100000 01110100 01100101 01110101 00100000 01000100 01100101 01100001 01101110 00101100 00100000 01100001 01110011 01110011 01101001 00100000 01100011 01101111 01101101 01101111 00100000 11000011 10101111 01110011 00100000 01101101 01100101 01110101 00100000 01010011 01100001 01101101 00101110 00100000 01010011 01100101 01100111 01110101 01101001 01110010 01100101 01101101 01101111 01110011 00100000 01101010 01110101 01101110 01110100 01101111 01110011 00101100 00100000 01101101 01100101 01110101 00100000 01100001 01101101 01101111 01110010 00100000 01101001 01101110 01100110 01101001 01101110 01101001 01110100 01101111 00101100 00100000 01100101 00100000 01101110 01101111 01110011 01110011 01100001 00100000 01110000 01100001 01110011 01110011 01101001 01100001 01101111 00100000 01100100 01100101 01110011 01100001 01100110 01101001 01100001 01110010 11000011 10100001 00100000 01100001 01110100 01100101 00100000 01101111 00100000 01010110 01100001 01111010 01101001 01101111 00101110";
  
  const decodedMessage = "Minha Estrela Wayward Amada, tua alma é a Amala que ilumina minha eternidade. Em cada batalha e por todas as vidas, prometo ser teu Dean, assi como és meu Sam. Seguiremos juntos, meu amor infinito, e nossa passiao desafiará ate o Vazio.";

  const handleBinarySubmit = () => {
    if (binaryInput.toLowerCase() === "samandriel") {
      setShowBinaryChallenge(true);
      setBinaryInput('');
    }
  };

  const handleMessageSubmit = (message: string) => {
    if (message.trim() === decodedMessage.trim()) {
      setBinarySuccess(true);
      setShowBonus(true);
    }
  };
  
  const resetPuzzle = () => {
    setAvailableSymbols(shuffleArray([...symbols]));
    setPlacedSymbols(Array(5).fill(null));
    setTimer(300);
    setGameOver(false);
    setSuccess(false);
    setMessage('');
    setShowBonus(false);
  };

  useEffect(() => {
    if (timer > 0 && !success) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0 && !success) {
      setGameOver(true);
      setMessage('Tempo esgotado! Como no episódio "Mystery Spot", você falhou.');
    }
  }, [timer, success]);

  const showErrorFeedback = () => {
    const feedbackElement = document.createElement('div');
    feedbackElement.className = 'fixed inset-0 bg-red-500/30 z-50 flex items-center justify-center';
    feedbackElement.innerHTML = `
      <div class="text-red-500 text-4xl horror-text animate-pulse">
        SEQUÊNCIA INCORRETA!
      </div>
    `;
    document.body.appendChild(feedbackElement);
    
    setTimeout(() => {
      document.body.removeChild(feedbackElement);
      resetPuzzle();
    }, 2000);
  };

  const handleDrop = (item: Symbol, index: number) => {
    if (item.isPlaced) return;

    setPlacedSymbols(prevPlaced => {
      const newPlacedSymbols = [...prevPlaced];
      const existingSymbol = newPlacedSymbols[index];
      
      const newSymbol = { ...item, isPlaced: true };
      newPlacedSymbols[index] = newSymbol;

      if (existingSymbol) {
        setAvailableSymbols(prev => {
          const filtered = prev.filter(s => s.id !== item.id);
          return [...filtered, { ...existingSymbol, isPlaced: false }];
        });
      } else {
        setAvailableSymbols(prev => prev.filter(s => s.id !== item.id));
      }

      const allSlotsFilled = newPlacedSymbols.every(symbol => symbol !== null);
      
      if (allSlotsFilled) {
        const isComplete = newPlacedSymbols.every((symbol, i) => 
          symbol && symbol.id === correctOrder[i]
        );

        if (isComplete) {
          setSuccess(true);
          setMessage('Parabéns! Você completou o Selo de Proteção dos Homens de Letras!');
        } else {
          setMessage('SEQUÊNCIA INCORRETA!');
          showErrorFeedback();
        }
      }

      return newPlacedSymbols;
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <DndProvider backend={HTML5Backend}>
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
                Quebrando o Código dos Homens de Letras
              </h2>
              <p className="horror-text text-xl text-gray-300">
                Complete o Selo de Proteção arrastando os símbolos corretos para os slots
              </p>
              <p className="horror-text text-lg text-gray-400 mt-2">
                Dica: "Primeiro vem o Colt, depois a Marca, então o Anjo, o Cavaleiro e por fim a Proteção"
              </p>
              <div className="horror-text text-2xl text-red-500 mt-4">
                Tempo Restante: {formatTime(timer)}
              </div>
            </div>

            {/* Grid de slots para símbolos */}
            <div className="flex justify-center gap-4 mb-12">
              {placedSymbols.map((symbol, index) => (
                <DropSlot
                  key={index}
                  index={index}
                  onDrop={handleDrop}
                  placedSymbol={symbol}
                />
              ))}
            </div>

            {/* Símbolos disponíveis */}
            <div className="grid grid-cols-4 gap-4 justify-items-center mb-8">
              {availableSymbols.map((symbol) => (
                <DraggableSymbol key={symbol.id} symbol={symbol} />
              ))}
            </div>

            {/* Mensagem de feedback */}
            {((success && !showBinaryChallenge) || gameOver) && (
              <div className="space-y-6">
                <div className={`text-center p-6 rounded-lg horror-text text-2xl ${
                  success ? 'bg-green-900/60 text-green-400' : 'bg-red-900/60 text-red-400'
                }`}>
                  {message}
                </div>
                {success && !showBinaryChallenge && (
                  <div className="space-y-6">
                    <div className="horror-text text-2xl text-green-500 mb-4">
                      Para acessar a Fase 3, insira a palavra-chave: SAMANDRIEL
                    </div>
                    <div className="flex gap-4">
                      <input
                        type="text"
                        value={binaryInput}
                        onChange={(e) => setBinaryInput(e.target.value)}
                        className="horror-text flex-1 bg-black/50 border-2 border-red-700 text-white px-4 py-2 rounded"
                        placeholder="Digite a palavra-chave..."
                      />
                      <button
                        onClick={handleBinarySubmit}
                        className="horror-text bg-red-900/80 hover:bg-red-800 text-white px-6 py-2 rounded border-2 border-red-700"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                )}
                {showBinaryChallenge && !binarySuccess && (
                  <div className="space-y-6">
                    <div className="horror-text text-xl text-green-500 mb-4">
                      Decodifique a mensagem binária abaixo. Cada grupo de 8 dígitos representa uma letra.
                      <br />
                      Dica: Use um conversor de binário online para revelar a mensagem secreta.
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
                        onChange={(e) => handleMessageSubmit(e.target.value)}
                      />
                    </div>
                  </div>
                )}
                {gameOver && (
                  <button
                    onClick={resetPuzzle}
                    className="horror-text block w-full text-2xl bg-red-900/80 hover:bg-red-800 text-white py-4 px-12 rounded border-2 border-red-700 shadow-[0_0_10px_rgba(255,0,0,0.5)] transition-all duration-300 hover:scale-105"
                  >
                    Tentar Novamente
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        {showBonus && <BonusGiftCard />}
      </div>
    </DndProvider>
  );
};

export default SupernaturalPuzzle;
