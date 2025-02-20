import { ButtonCopy } from "@components/buttons/ButtonCopy";
import { CardColorInterface } from "intefaces/interfaces";

export const CardColor: React.FC<CardColorInterface> = ({ name, hex }) => {  return (
    <div className="bg-primary-100/20 dark:bg-gray-100 p-3 rounded-lg flex flex-col items-center gap-3 overflow-hidden">
      <span className="text-xs text-center font-medium text-gray-900">{name}</span>
      <div className="w-full h-24 rounded-lg dark:border dark:border-white/50" style={{ backgroundColor: hex }}></div>
      <span className="text-secondary-100/80 text-center uppercase font-medium">{hex}</span>
      <ButtonCopy color={hex} />
    </div>
  );
};
