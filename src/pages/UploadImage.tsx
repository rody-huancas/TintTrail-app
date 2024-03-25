import { FormImage } from "@components/upload-image/FormImage";

export const UploadImage = () => {

  return (
    <div className="text-secondary-100/90 dark:text-gray-100">
      <h1 className="text-4xl font-extrabold text-center text-primary-200/80">
        Sube una imagen, y obtén su color
      </h1>

      <FormImage />
    </div>
  );
};
