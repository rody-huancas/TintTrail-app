import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import classNames from "classnames";
import { ButtonCopy } from "@components/buttons/ButtonCopy";
import { extractDominantColors } from "@helpers/extract-color";

export const ExtractColorPalette = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [colors, setColors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onDrop = useCallback((files: File[]) => {
    const imageFile = files[0];
    if (imageFile && imageFile.type.startsWith("image/")) {
      setImageSrc(URL.createObjectURL(imageFile));
      setColors([]);
    } else {
      alert("Solo se permiten archivos de imagen.");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  const extractColors = async () => {
    if (!imageSrc) return;

    setIsLoading(true);
    try {
      const dominantColors = await extractDominantColors(imageSrc);
      setColors(dominantColors);
    } catch (error) {
      console.error("Error al extraer colores:", error);
      alert("Ocurrió un error al procesar la imagen.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-secondary-100/90 dark:text-gray-100 mb-10">
      <h1 className="text-4xl font-extrabold text-center text-primary-200/80">
        Extrae la paleta de colores de una imagen
      </h1>
      <div className="flex flex-col justify-center items-center gap-5 mt-5 px-5 lg:px-0">
        <div
          {...getRootProps()}
          className={classNames(
            "rounded-xl shadow-lg border-2 border-gray-600 px-10 py-16 border-dashed flex justify-center items-center cursor-pointer text-center mt-4"
          )}
        >
          <input {...getInputProps()} accept="image/*" />
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

        {imageSrc && (
          <div className="w-full flex flex-col items-center gap-5 my-10">
            <img
              src={imageSrc}
              alt="Uploaded"
              className="rounded-xl shadow-lg w-full md:w-[400px] h-auto"
            />
            <button
              onClick={extractColors}
              disabled={isLoading}
              className="bg-primary-200 text-gray-100 px-5 py-2 rounded-lg font-medium hover:bg-primary-300 transition-colors"
            >
              {isLoading ? "Extrayendo colores..." : "Extraer colores"}
            </button>
          </div>
        )}

        {colors.length > 0 && (
          <div className="w-full flex flex-wrap gap-5 justify-center">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-32 h-32 rounded-lg shadow-md flex flex-col items-center justify-center space-y-3"
                style={{ backgroundColor: color }}
              >
                <span className="text-xs text-white font-medium">{color}</span>
                <ButtonCopy color={color} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
