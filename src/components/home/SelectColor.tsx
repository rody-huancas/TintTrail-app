import { useState, useEffect } from "react";
import { calculateShades } from "@helpers/helpers";
import { CardColor } from "@components/cards/CardColor";
import "@styles/input-select.css";

const SelectColor = () => {
  const [selectedColor, setSelectedColor] = useState("#0057FF");
  const [colorShades, setColorShades] = useState<string[]>([]);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
  };

  useEffect(() => {
    const shades = calculateShades(selectedColor);
    setColorShades(shades);
  }, [selectedColor]);

  return (
    <div id="selectColor" className="flex flex-col gap-10 my-10 px-10 lg:px-0 text-secondary-100/90 dark:text-gray-100/90">
      <h2 className="text-center uppercase text-3xl font-black">
        Vamos a generar tu paleta de colores!
      </h2>
      <div className="flex items-center justify-center gap-5">
        <span className="text-blue-400 font-medium text-xl">Selecciona tu color</span>
        <div className="bg-primary-100/30 dark:bg-gray-100 p-4 pb-3 rounded-lg">
          <input type="color" value={selectedColor} onChange={handleColorChange} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-x-5 gap-y-7 bg-transparent py-5">
        {colorShades.map((shade, index) => (
          <CardColor key={index} shade={shade} />
        ))}
      </div>
    </div>
  );
};

export default SelectColor;
