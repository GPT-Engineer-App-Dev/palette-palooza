export const generateRandomColor = () => {
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
};

export const generatePaletteFromColor = (baseColor, count = 5) => {
  const hsl = hexToHSL(baseColor);
  const palette = [baseColor];

  // Generate colors based on color harmony rules
  const harmonyRules = [
    { name: 'Analogous', hueShift: 30 },
    { name: 'Complementary', hueShift: 180 },
    { name: 'Triadic', hueShift: 120 },
    { name: 'Split Complementary', hueShift: 150 },
    { name: 'Tetradic', hueShift: 90 },
  ];

  for (let i = 1; i < count; i++) {
    const rule = harmonyRules[i % harmonyRules.length];
    const newHue = (hsl.h + rule.hueShift * Math.floor((i + 1) / 2) * (i % 2 ? 1 : -1) + 360) % 360;
    const newSat = Math.min(100, Math.max(0, hsl.s + (Math.random() - 0.5) * 20));
    const newLight = Math.min(90, Math.max(10, hsl.l + (Math.random() - 0.5) * 20));
    palette.push(hslToHex(newHue, newSat, newLight));
  }

  return palette;
};

const hexToHSL = (hex) => {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;

  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
};

const hslToHex = (h, s, l) => {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};