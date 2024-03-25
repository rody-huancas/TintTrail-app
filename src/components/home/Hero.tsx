const Hero = () => {
  const handleScrollToSelectColor = () => {
    const selectColorSection = document.getElementById("selectColor");
    if (selectColorSection) {
      selectColorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-[70dvh] sm:mt-10 md:mt-20 lg:mt-0 flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-0 px-10 xl:px-0 text-secondary-100 dark:text-gray-100/90 mb-10 xl:mt-5">
      <div className="lg:w-2/6 flex flex-col items-center lg:items-start gap-5 lg:gap-14">
        <p className="text-4xl font-extrabold uppercase text-center lg:text-start">
          Crea tu propia paleta de colores
        </p>
        <button onClick={handleScrollToSelectColor} className="bg-blue-600 text-gray-100 px-5 py-4 rounded hover:bg-blue-700 transition-colors duration-500">
          Genera tu paleta de colores
        </button>
      </div>
      <div className="lg:w-2/3 flex items-center justify-center">
        <img src="/images/TintTrail.svg" alt="tainttrail" className="w-3/4" />
      </div>
    </div>
  );
};

export default Hero;
