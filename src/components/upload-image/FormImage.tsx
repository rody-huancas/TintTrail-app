import { useState, useCallback } from "react";
import classNames from "classnames";
import { useDropzone } from "react-dropzone";

export const FormImage = () => {
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);
  const onDrop = useCallback((files: File[]) => { setAcceptedFiles(files) }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-10 px-5 lg:px-0">
      {acceptedFiles[0] && (
        <div className="w-full md:w-3/4 lg:w-1/2 lg:px-0">
          <img src={URL.createObjectURL(acceptedFiles[0])} alt="imgae upload" className="rounded-xl shadow-lg" />
          <div className="py-5">
            <div className="w-full flex justify-center">
              <button className="text-gray-100 bg-primary-200 px-5 py-3 rounded">
                Obtener Color
              </button>
            </div>
          </div>
        </div>
      )}

      <div {...getRootProps()} className={classNames("rounded-xl shadow-lg border-2 border-gray-600 p-10 border-dashed flex justify-center items-center cursor-pointer text-center")}>
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
