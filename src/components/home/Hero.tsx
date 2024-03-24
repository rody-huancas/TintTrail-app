const Hero = () => {
  const handleScrollToSelectColor = () => {
    const selectColorSection = document.getElementById("selectColor");
    if (selectColorSection) {
      selectColorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center flex-col justify-between gap-10 lg:flex-row lg:gap-0 px-10 lg:px-0">
      <div className="lg:w-2/6 flex flex-col items-center lg:items-start gap-5 lg:gap-14">
        <p className="text-4xl font-extrabold uppercase text-center lg:text-start">
          Crea tu propia paleta de colores
        </p>
        <button onClick={handleScrollToSelectColor} className="bg-blue-600 px-5 py-4 rounded hover:bg-blue-700 transition-colors duration-500">
          Genera tu paleta de colores
        </button>
      </div>
      <div className="lg:w-2/3">
        <img src="/images/TintTrail.png" alt="tainttrail" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
