import { FaCopy } from "react-icons/fa";

export const ButtonCopy = () => {
  return (
    <button className="py-2 bg-[#0057FF] flex items-center justify-center gap-2 w-full rounded-lg">
      Copiar
      <FaCopy />
    </button>
  );
};
