const Hero = () => {
  return (
    <>
      <div className="w-2/6 flex flex-col items-start gap-14">
        <p className="text-4xl font-extrabold uppercase">
          Crea tu propia paleta de colores
        </p>
        <button className="bg-blue-600 px-5 py-4 rounded hover:bg-blue-700 transition-colors duration-500 text-lg">
          Genera tu paleta de colores
        </button>
      </div>
      <div className="w-2/3">
        <img src="/images/TintTrail.png" alt="tainttrail" className="w-full" />
      </div>
    </>
  );
};

export default Hero;
