import { ButtonCopyProps } from "intefaces/interfaces";
import { IoIosCopy } from "react-icons/io";
import { toast } from "sonner";

export const ButtonCopy: React.FC<ButtonCopyProps> = ({ color }) => {

  const copyColor = () => {
    navigator.clipboard.writeText(color);
    toast.success(`El color ${color} se ha copiado correctamente`)
  };

  return (
    <button
      className="py-2 bg-[#0057FF] flex items-center justify-center gap-2 w-full rounded-lg"
      onClick={copyColor}
    >
      Copiar
      <IoIosCopy />
    </button>
  );
};
