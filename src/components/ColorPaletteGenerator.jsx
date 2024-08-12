import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ColorPalette from './ColorPalette';
import { generateRandomColor, generatePaletteFromColor } from '../utils/colorUtils';

const ColorPaletteGenerator = () => {
  const [baseColor, setBaseColor] = useState('');
  const [palette, setPalette] = useState([]);

  const generatePalette = () => {
    if (baseColor) {
      setPalette(generatePaletteFromColor(baseColor));
    } else {
      const randomColor = generateRandomColor();
      setPalette(generatePaletteFromColor(randomColor));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <Input
          type="text"
          placeholder="Enter a base color (e.g., #ff0000)"
          value={baseColor}
          onChange={(e) => setBaseColor(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={generatePalette}>Generate Palette</Button>
      </div>
      {palette.length > 0 && <ColorPalette colors={palette} />}
    </div>
  );
};

export default ColorPaletteGenerator;