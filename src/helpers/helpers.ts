import chroma from "chroma-js";

const calculateShades = (color: string) => {
  const shades: { name: string; hex: string }[] = [];
  const baseColor = chroma(color);

  const scale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  scale.forEach((level) => {
    let shade;
    if (level === 50) {
      shade = chroma.mix(baseColor, "#ffffff", 0.9, "lab").hex();
    } else if (level === 100) {
      shade = chroma.mix(baseColor, "#ffffff", 0.75, "lab").hex();
    } else if (level === 900) {
      shade = chroma.mix(baseColor, "#000000", 0.75, "lab").hex();
    } else {
      const factor = (level - 100) / 800;
      shade = chroma(baseColor).darken(factor * 2).hex();
    }
    shades.push({ name: `${level}`, hex: shade });
  });

  return shades;
};

export { calculateShades };
