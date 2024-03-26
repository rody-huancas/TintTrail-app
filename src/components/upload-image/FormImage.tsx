import React, { useState, useCallback } from "react";
import classNames from "classnames";
import { useDropzone } from "react-dropzone";
import { ChromePicker } from "react-color";
import { ButtonCopy } from "@components/buttons/ButtonCopy";

export const FormImage = () => {
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);

  const onDrop = useCallback((files: File[]) => {
    setAcceptedFiles(files);
    setSelectedColor(null);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const rgbaToHex = (r: number, g: number, b: number) => {
    const toHex = (c: number) => {
      const hex = Math.round(c).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  const handleColorClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const canvas = document.createElement("canvas");
    const img = event.target as HTMLImageElement;
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(img, 0, 0, img.width, img.height);
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    const pixel = ctx?.getImageData(x, y, 1, 1).data;
    if (pixel) {
      const hexColor = rgbaToHex(pixel[0], pixel[1], pixel[2]);
      setSelectedColor(hexColor);
      setShowColorPicker(true);
    }
  };

  const handleColorChange = (color: any) => {
    setSelectedColor(color.hex);
  };

  const getOppositeColor = (color: string) => {
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#000000" : "#ffffff";
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-5 px-5 lg:px-0">
      {acceptedFiles[0] && (
        <div className="pb-5">
          <p className="text-center p-5">
            Pasa el cursor por la imagen y presiona clic para obtener el color.{" "}
            {selectedColor}
          </p>
          <div className="w-full flex justify-center gap-10">
            <img
              src={URL.createObjectURL(acceptedFiles[0])}
              alt="image upload"
              className="rounded-xl shadow-lg cursor-crosshair w-1/2"
              onClick={handleColorClick}
            />

            <div className="py-5">
              {selectedColor && showColorPicker && (
                <div className="w-full flex flex-col items-center justify-center gap-5">
                  <ChromePicker
                    color={selectedColor}
                    onChange={handleColorChange}
                  />
                  <div
                    className="w-full h-20 flex flex-col items-center justify-center gap-1 rounded-lg font-light"
                    style={{
                      backgroundColor: selectedColor,
                      color: getOppositeColor(selectedColor),
                    }}
                  >
                    Color seleccionado
                    <span className="font-medium">{selectedColor}</span>
                  </div>
                  <ButtonCopy color={selectedColor} />
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
