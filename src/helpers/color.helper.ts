export const rgbaToHex = (r: number, g: number, b: number) => {
  const toHex = (c: number) => {
    const hex = Math.round(c).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export const getOppositeColor = (color: string) => {
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#000000" : "#ffffff";
};

export const handleColorClick = ( 
  event: React.MouseEvent<HTMLImageElement>, 
  setSelectedColor: (color: string) => void, setShowColorPicker: (value: boolean) => void ) => {
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
