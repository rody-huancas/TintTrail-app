import { motion } from "framer-motion";

const Hero = () => {
  const handleScrollToSelectColor = () => {
    const selectColorSection = document.getElementById("selectColor");
    if (selectColorSection) {
      selectColorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative md:h-[80dvh] sm:mt-10 md:mt-20 lg:mt-0 flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-0 px-10 xl:px-0 text-gray-900 dark:text-gray-100 mb-10 xl:mt-5"
      data-theme="light"
    >
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl bg-blue-500/10 dark:bg-purple-500/10"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 0], opacity: [0, 0.5, 0.5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="lg:w-2/6 flex flex-col items-center lg:items-start gap-5 lg:gap-7 z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl font-extrabold uppercase text-center lg:text-start text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-300 dark:to-purple-400">
          Crea tu propia paleta de colores
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md text-center lg:text-start">
          Descubre combinaciones únicas y genera paletas personalizadas en segundos.
        </p>
        <button
          onClick={handleScrollToSelectColor}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-gray-100 px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg transform hover:scale-105"
          aria-label="Ir a sección para seleccionar colores"
        >
          Genera tu paleta
        </button>
      </motion.div>

      <motion.div
        className="lg:w-2/3 flex items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img
          src="/images/TintTrail.svg"
          alt="TintTrail"
          className="w-3/4 drop-shadow-lg dark:drop-shadow-none"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
