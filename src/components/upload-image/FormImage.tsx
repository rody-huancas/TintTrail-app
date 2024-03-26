import classNames       from "classnames";
import { ButtonCopy   } from "@components/buttons/ButtonCopy";
import { useDropzone  } from "react-dropzone";
import { ChromePicker } from "react-color";
import { useState, useCallback } from "react";
import { getOppositeColor, handleColorClick } from "@helpers/color.helper";

export const FormImage = () => {
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);

  const onDrop = useCallback((files: File[]) => {
    setAcceptedFiles(files);
    setSelectedColor(null);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleColorChange = (color: any) => {
    setSelectedColor(color.hex);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-5 px-5 lg:px-0">
      {acceptedFiles[0] && (
        <div className="pb-5">
          <div className="flex justify-center mb-5">
            <p className="text-center p-5 bg-primary-200 rounded text-gray-100">
              Pasa el cursor por la imagen y presiona clic para obtener el color
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center gap-10">
            <img
              src={URL.createObjectURL(acceptedFiles[0])}
              alt="image upload"
              className="rounded-xl shadow-lg cursor-crosshair w-full md:w-1/2"
              onClick={(event) => handleColorClick(event, setSelectedColor, setShowColorPicker)}
            />
            <div className="py-5">
              {selectedColor && showColorPicker && (
                <div className="w-full flex flex-col sm:flex-row md:flex-col items-center justify-center gap-5">
                  <ChromePicker
                    color={selectedColor}
                    onChange={handleColorChange}
                  />
                  <div className="w-1/2 md:w-full flex flex-col gap-5">
                    <div
                      className="w-full h-20 flex flex-col items-center justify-center gap-1 rounded-lg font-light"
                      style={{
                        backgroundColor: selectedColor,
                        color: getOppositeColor(selectedColor),
                      }}
                    >
                      Color seleccionado
                      <span className="font-medium uppercase">{selectedColor}</span>
                    </div>
                    <ButtonCopy color={selectedColor} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div
        {...getRootProps()}
        className={classNames(
          "rounded-xl shadow-lg border-2 border-gray-600 p-10 border-dashed flex justify-center items-center cursor-pointer text-center"
        )}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-md text-secondary-100/90 dark:text-gray-100/90 font-medium">
            Suelta los archivos aquí ...
          </p>
        ) : (
          <p className="text-md text-secondary-100/90 dark:text-gray-100/90 font-medium">
            Arrastre y suelte su imagen aquí, o haga clic para seleccionar una
            imagen
          </p>
        )}
      </div>
    </div>
  );
};
