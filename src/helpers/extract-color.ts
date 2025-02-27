const getImageColors = (img: HTMLImageElement): number[][] => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("No se pudo obtener el contexto del canvas");

  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  const colors: number[][] = [];

  for (let i = 0; i < imageData.length; i += 4) {
    const r = imageData[i];
    const g = imageData[i + 1];
    const b = imageData[i + 2];
    const a = imageData[i + 3];

    if (a > 0) {
      colors.push([r, g, b]);
    }
  }

  return colors;
};

const findTopDensityCubes = ( colors: number[][], cubeSize: number, n: number = 15 ): number[][] => {
  const xMin = 0,
    xMax = 255;
  const yMin = 0,
    yMax = 255;
  const zMin = 0,
    zMax = 255;

  const xLength = Math.ceil((xMax - xMin) / cubeSize);
  const yLength = Math.ceil((yMax - yMin) / cubeSize);
  const zLength = Math.ceil((zMax - zMin) / cubeSize);

  const counts = Array.from({ length: xLength }, () =>
    Array.from({ length: yLength }, () => Array(zLength).fill(0))
  );

  for (const [r, g, b] of colors) {
    const i = Math.floor((r - xMin) / cubeSize);
    const j = Math.floor((g - yMin) / cubeSize);
    const k = Math.floor((b - zMin) / cubeSize);
    counts[i][j][k]++;
  }

  const indicesAndCounts: { index: number[]; count: number }[] = [];
  for (let i = 0; i < xLength; i++) {
    for (let j = 0; j < yLength; j++) {
      for (let k = 0; k < zLength; k++) {
        indicesAndCounts.push({ index: [i, j, k], count: counts[i][j][k] });
      }
    }
  }

  indicesAndCounts.sort((a, b) => b.count - a.count);
  return indicesAndCounts.slice(0, n).map((x) => x.index);
};

const rgbToHex = (r: number, g: number, b: number): string => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
};

const calculateCentersOfMass = ( colors: number[][], topDensityCubes: number[][], cubeSize: number ): string[] => {
  const centersOfMass: string[] = [];

  for (const [i, j, k] of topDensityCubes) {
    const rMin = i * cubeSize;
    const rMax = rMin + cubeSize;
    const gMin = j * cubeSize;
    const gMax = gMin + cubeSize;
    const bMin = k * cubeSize;
    const bMax = bMin + cubeSize;

    const cubeColors = colors.filter(
      ([r, g, b]) =>
        r >= rMin && r < rMax && g >= gMin && g < gMax && b >= bMin && b < bMax
    );

    if (cubeColors.length === 0) continue;

    const sum = cubeColors.reduce(
      ([rSum, gSum, bSum], [r, g, b]) => [rSum + r, gSum + g, bSum + b],
      [0, 0, 0]
    );

    const center = sum.map((x) => Math.round(x / cubeColors.length)) as [
      number,
      number,
      number
    ];
    centersOfMass.push(rgbToHex(center[0], center[1], center[2]));
  }

  return centersOfMass;
};

export const extractDominantColors = async (
  imageSrc: string
): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;

    img.onload = () => {
      try {
        const colors = getImageColors(img);
        const cubeSize = 50;
        const topDensityCubes = findTopDensityCubes(colors, cubeSize, 15);
        const dominantColors = calculateCentersOfMass(
          colors,
          topDensityCubes,
          cubeSize
        );
        resolve(dominantColors);
      } catch (error) {
        reject(error);
      }
    };

    img.onerror = (error) => {
      reject(error);
    };
  });
};
