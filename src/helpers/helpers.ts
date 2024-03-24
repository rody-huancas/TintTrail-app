import chroma from "chroma-js";

const calculateShades = (color: string) => {
  const shades: string[] = [];
  for (let i = 100; i <= 700; i += 100) {
    shades.push(`${chroma.mix("#ffffff", color, i / 100, "lab").hex()}`);
  }
  return shades;
};

export {
  calculateShades
}