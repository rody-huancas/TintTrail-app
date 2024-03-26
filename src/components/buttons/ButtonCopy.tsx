import { ButtonCopyProps } from "intefaces/interfaces";
import { IoIosCopy } from "react-icons/io";
import { toast } from "sonner";

export const ButtonCopy: React.FC<ButtonCopyProps> = ({ color }) => {

  const copyColor = () => {
    navigator.clipboard.writeText(color.toUpperCase());
    toast.success(`El color ${color.toUpperCase()} se ha copiado correctamente`)
  };

  return (
    <button
      className="py-2 bg-primary-200 text-white flex items-center justify-center gap-2 w-full rounded-lg"
      onClick={copyColor}
      aria-label="Copiar el color"
    >
      Copiar
      <IoIosCopy />
    </button>
  );
};
