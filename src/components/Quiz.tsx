import { useState } from 'react';
import { quizData } from '../data/questions';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const [currentRound, setCurrentRound] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const round = quizData[currentRound];
  const question = round?.questions[currentQuestion];
  const totalRounds = quizData.length;
  const questionsInRound = round?.questions.length || 0;

  const totalQuestions = quizData.reduce((acc, round) => acc + round.questions.length, 0);
  const questionsAnswered = quizData
    .slice(0, currentRound)
    .reduce((acc, round) => acc + round.questions.length, 0) + currentQuestion;

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === question.correctAnswer;
    setIsCorrect(correct);
    if (correct) {
      setScore(score + 1);
    }
    setShowFeedback(true);

    setTimeout(() => {
      setShowFeedback(false);
      if (currentQuestion + 1 < questionsInRound) {
        setCurrentQuestion(currentQuestion + 1);
      } else if (currentRound + 1 < totalRounds) {
        setCurrentRound(currentRound + 1);
        setCurrentQuestion(0);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const restartQuiz = () => {
    setCurrentRound(0);
    setCurrentQuestion(0);
    setScore(0);
    setShowFeedback(false);
    setIsCorrect(false);
    setQuizCompleted(false);
  };

  const progress = (questionsAnswered / totalQuestions) * 100;

  if (quizCompleted) {
    const percentage = Math.round((score / totalQuestions) * 100);
    const message = percentage >= 70 
      ? "Parabéns, você realmente é uma verdadeira Fã de Supernatural, agora guarde a palavra-chave abaixo para desbloquear a próxima fase." 
      : "Continue assistindo Supernatural e tente novamente!";

    const keyword = "IMPALA67"; // Palavra-chave temática (Carro do Dean)

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
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="bg-black/70 backdrop-blur-md rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.3)] p-8 text-center">
            <h2 className="horror-title text-4xl text-red-500 mb-6">Quiz Completado!</h2>
            <div className="horror-text text-6xl text-red-600 mb-6 animate-pulse">{percentage}%</div>
            <p className="horror-text text-2xl text-gray-300 mb-6">
              Você acertou {score} de {totalQuestions} questões
            </p>
            <p className="horror-text text-xl text-gray-400 mb-8">{message}</p>
            {percentage >= 70 ? (
              <div className="space-y-6">
                <div className="horror-text text-4xl text-green-500 animate-pulse mb-8">
                  Palavra-chave: {keyword}
                </div>
                <Link 
                  to="/"
                  className="horror-text text-2xl bg-red-900/80 hover:bg-red-800 text-white py-4 px-12 rounded border-2 border-red-700 shadow-[0_0_10px_rgba(255,0,0,0.5)] transition-all duration-300 hover:scale-105"
                >
                  Voltar ao Início
                </Link>
              </div>
            ) : (
              <button
                onClick={restartQuiz}
                className="horror-text text-2xl bg-red-900/80 hover:bg-red-800 text-white py-4 px-12 rounded border-2 border-red-700 shadow-[0_0_10px_rgba(255,0,0,0.5)] transition-all duration-300 hover:scale-105"
              >
                Tentar Novamente
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

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
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Progress bar */}
        <div className="w-full bg-gray-900/80 rounded-full h-3 mb-6 shadow-[0_0_10px_rgba(255,0,0,0.3)]">
          <div 
            className="bg-red-600 h-3 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(255,0,0,0.5)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="bg-black/70 backdrop-blur-md rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.3)] p-8">
          {/* Round title */}
          <h2 className="horror-title text-3xl text-red-500 mb-4">{round?.title}</h2>
          
          {/* Score */}
          <div className="horror-text text-xl text-gray-400 mb-6">
            Pontuação: {score} de {totalQuestions}
          </div>

          {/* Question */}
          <div className="mb-8">
            <h3 className="horror-text text-2xl text-white mb-6">{question?.question}</h3>
            <div className="space-y-4">
              {question?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showFeedback && handleAnswer(option)}
                  className={`w-full text-left p-4 rounded border-2 transition-all duration-300 horror-text text-xl
                    ${showFeedback
                      ? option === question.correctAnswer
                        ? 'bg-green-900/60 border-green-500 text-white shadow-[0_0_15px_rgba(0,255,0,0.3)]'
                        : option === selectedAnswer
                        ? 'bg-red-900/60 border-red-500 text-white shadow-[0_0_15px_rgba(255,0,0,0.3)]'
                        : 'bg-gray-900/60 border-gray-700 text-gray-400'
                      : 'bg-gray-900/60 border-gray-700 text-gray-300 hover:bg-gray-800/80 hover:border-red-500 hover:shadow-[0_0_10px_rgba(255,0,0,0.3)]'
                    }
                  `}
                  disabled={showFeedback}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Feedback message */}
          {showFeedback && (
            <div className={`text-center p-4 rounded-lg horror-text text-2xl ${
              isCorrect 
                ? 'bg-green-900/60 border-2 border-green-500 shadow-[0_0_15px_rgba(0,255,0,0.3)]' 
                : 'bg-red-900/60 border-2 border-red-500 shadow-[0_0_15px_rgba(255,0,0,0.3)]'
            } text-white mb-4`}>
              {isCorrect ? 'Correto!' : 'Incorreto!'}
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <Link
              to="/"
              className="horror-text text-lg text-gray-400 hover:text-red-500 hover:shadow-[0_0_10px_rgba(255,0,0,0.3)] transition-all duration-300"
            >
              Voltar ao Início
            </Link>
            <button
              onClick={restartQuiz}
              className="horror-text text-lg text-gray-400 hover:text-red-500 hover:shadow-[0_0_10px_rgba(255,0,0,0.3)] transition-all duration-300"
            >
              Recomeçar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
