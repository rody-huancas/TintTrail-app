const CardProducts = ({ primaryColor, secondaryColor }: { primaryColor: string, secondaryColor: string }) => {
  return (
    <div className="w-full h-80 rounded-lg text-gray-100 p-5" style={{ 
      background: `linear-gradient(110deg, ${primaryColor}, ${secondaryColor})`
    }}>
      <span className="uppercase font-medium text-lg">Productos</span>
      <div className="w-full h-full flex flex-col items-center justify-center gap-5">
        <span className="text-5xl font-black">+300</span>
        <span className="text-center">Nuevo productos en el último mes</span>
      </div>
    </div>
  );
};

export default CardProducts;
