import { useState, useEffect } from "react";
import { calculateShades     } from "@helpers/helpers";
import { CardColor           } from "@components/cards/CardColor";
import { ChromePicker, ColorResult } from "react-color";
import "@styles/input-select.css";

const SelectColor = () => {
  const [selectedColor, setSelectedColor] = useState("#0057FF");
  const [colorShades, setColorShades] = useState<string[]>([]);

  const handleColorChange = (color: ColorResult) => {
    setSelectedColor(color.hex);
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
      <div className="flex flex-col items-center gap-5">
        <span className="uppercase font-black text-2xl" style={{color: selectedColor}}>
          Selecciona tu color
        </span>
        <ChromePicker color={selectedColor} onChange={handleColorChange} />
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
