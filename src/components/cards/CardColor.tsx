import { ButtonCopy } from "@components/buttons/ButtonCopy";
import { CardColorInterface } from "intefaces/interfaces";

export const CardColor: React.FC<CardColorInterface> = ({ shade }) => {
  return (
    <div className="bg-white p-2 rounded-lg flex flex-col items-center gap-3">
      <div
        className="w-28 h-28 rounded-lg border border-white/50"
        style={{ backgroundColor: shade }}
      ></div>
      <span className="text-gray-700 text-center">{shade}</span>
      <ButtonCopy color={shade} />
    </div>
  );
};
