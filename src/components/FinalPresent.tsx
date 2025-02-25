const FinalPresent = () => {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: "url('/presente.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center">
        <h1 className="horror-title text-7xl text-red-500 animate-pulse mb-8 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
          PARABÉNS
        </h1>
      </div>
    </div>
  );
};

export default FinalPresent;
