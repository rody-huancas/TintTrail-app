import { useState, useEffect } from "react";
import { ChromePicker, ColorResult } from "react-color";
import Buttons from "@components/cards/Buttons";
import TaskList from "@components/cards/TaskList";
import CardProducts from "@components/cards/CardProducts";
import { CardColor } from "@components/cards/CardColor";
import { calculateShades } from "@helpers/helpers";
import "@styles/input-select.css";

const SelectColor = () => {
  const [selectedColor, setSelectedColor] = useState("#75A2FA");
  const [colorShades, setColorShades] = useState<{ name: string; hex: string }[]>([]);

  const handleColorChange = (color: ColorResult) => setSelectedColor(color.hex);

  useEffect(() => {
    const shades = calculateShades(selectedColor);
    setColorShades(shades);
  }, [selectedColor]);

  return (
    <div id="selectColor" className="flex flex-col gap-10 my-10 px-10 xl:px-0 text-secondary-100/90 dark:text-gray-100/90">
      <h2 className="text-center uppercase text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Genera tu paleta de colores
      </h2>

      <div className="flex flex-col items-center gap-5">
        <span className="uppercase font-black text-2xl" style={{ color: selectedColor }}>
          Selecciona tu color
        </span>
        <ChromePicker color={selectedColor} onChange={handleColorChange} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-x-5 gap-y-7 py-5">
        {colorShades.map(({ name, hex }) => (
          <CardColor key={name} name={name} hex={hex} />
        ))}
      </div>

      <h3 className="text-center text-xl font-bold">Ejemplos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-5">
        <CardProducts primaryColor={selectedColor} secondaryColor={colorShades[1]?.hex || "#ffffff"} />
        <TaskList primaryColor={selectedColor} secondaryColor={colorShades[1]?.hex || "#ffffff"} />
        <Buttons primaryColor={selectedColor} secondaryColor={colorShades[1]?.hex || "#ffffff"} />
      </div>
    </div>
  );
};

export default SelectColor;