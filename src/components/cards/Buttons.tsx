const Buttons = ({ primaryColor, secondaryColor }: { primaryColor: string; secondaryColor: string }) => {
  const borderGradient = `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`;

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
      <button style={{ backgroundColor: primaryColor, color: 'white' }} className="py-2 px-4 rounded-md hover:bg-secondaryColor font-medium">Botón</button>
      <button style={{ borderColor: primaryColor, color: primaryColor }} className="border py-2 px-4 rounded-md">Botón</button>
      <button style={{ backgroundColor: secondaryColor, color: 'white' }} className="py-2 px-4 rounded-md shadow-lg hover:shadow-xl">Botón</button>
      <button style={{ background: borderGradient, color: 'white' }} className="py-2 px-4 rounded-md shadow-lg hover:shadow-xl">Botón</button>
    
    </div>
  );
};

export default Buttons;
