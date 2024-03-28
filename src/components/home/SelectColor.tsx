import { useState, useEffect } from "react";
import { calculateShades     } from "@helpers/helpers";
import { CardColor           } from "@components/cards/CardColor";
import { ChromePicker, ColorResult } from "react-color";
import CardProducts from "@components/cards/CardProducts";
import "@styles/input-select.css";
import TaskList from "@components/cards/TaskList";
import Buttons from "@components/cards/Buttons";

const SelectColor = () => {
  const [selectedColor, setSelectedColor] = useState("#75A2FA");
  const [colorShades, setColorShades] = useState<string[]>([]);

  const handleColorChange = (color: ColorResult) => {
    setSelectedColor(color.hex);
  };

  useEffect(() => {
    const shades = calculateShades(selectedColor);
    setColorShades(shades);
  }, [selectedColor]);

  return (
    <div id="selectColor" className="flex flex-col gap-10 my-10 px-10 xl:px-0 text-secondary-100/90 dark:text-gray-100/90">
      <h2 className="text-center uppercase text-3xl font-black">
        Vamos a generar tu paleta de colores!
      </h2>
      <div className="flex flex-col items-center gap-5">
        <span className="uppercase font-black text-2xl" style={{color: selectedColor}}>
          Selecciona tu color
        </span>
        <ChromePicker color={selectedColor} onChange={handleColorChange} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-x-5 gap-y-7 bg-transparent py-5">
        {colorShades.map((shade, index) => (
          <CardColor key={index} shade={shade} />
        ))}
      </div>

      <h3>Ejemplos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-5">
        <CardProducts primaryColor={selectedColor} secondaryColor={colorShades[1]} />
        <TaskList primaryColor={selectedColor} secondaryColor={colorShades[1]} />
        <Buttons primaryColor={selectedColor} secondaryColor={colorShades[1]} />
      </div>
    </div>
  );
};

export default SelectColor;
