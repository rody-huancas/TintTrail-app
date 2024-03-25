import { ButtonCopy } from "@components/buttons/ButtonCopy";
import { CardColorInterface } from "intefaces/interfaces";

export const CardColor: React.FC<CardColorInterface> = ({ shade }) => {
  return (
    <div className="bg-primary-100/20 dark:bg-gray-100 px-3 py-4 rounded-lg flex flex-col items-center gap-3">
      <div
        className="w-28 h-28 rounded-lg dark:border dark:border-white/50"
        style={{ backgroundColor: shade }}
      ></div>
      <span className="text-secondary-100/80 text-center uppercase font-medium">{shade}</span>
      <ButtonCopy color={shade} />
    </div>
  );
};
