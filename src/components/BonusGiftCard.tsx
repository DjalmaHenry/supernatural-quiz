import { Link } from 'react-router-dom';

const BonusGiftCard = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm z-50">
      <div className="w-96 h-64 rounded-xl overflow-hidden mb-8" style={{
        background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.4) 0%, rgba(255, 0, 0, 0.1) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }}>
        <div className="flex flex-col items-center justify-center h-full p-6 text-white">
          <img src="/ifood.png" alt="iFood Logo" className="w-24 mb-4" />
          <h2 className="horror-title text-2xl mb-2 text-center">Vale um Jantar Especial</h2>
          <p className="horror-text text-center">Parabéns por completar o desafio!</p>
        </div>
      </div>
      <Link 
        to="/"
        className="horror-text text-lg bg-red-900/80 hover:bg-red-800 text-white py-2 px-6 rounded border-2 border-red-700 shadow-[0_0_10px_rgba(255,0,0,0.5)] transition-all duration-300 hover:scale-105"
      >
        Voltar ao Início
      </Link>
    </div>
  );
};

export default BonusGiftCard;
