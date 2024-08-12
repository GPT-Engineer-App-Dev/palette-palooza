import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HexColorPicker } from "react-colorful";
import ColorPalette from './ColorPalette';
import { generateRandomColor, generatePaletteFromColor } from '../utils/colorUtils';

const ColorPaletteGenerator = () => {
  const [baseColor, setBaseColor] = useState('#000000');
  const [palette, setPalette] = useState([]);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const generatePalette = () => {
    setPalette(generatePaletteFromColor(baseColor));
  };

  const generateRandomPalette = () => {
    const randomColor = generateRandomColor();
    setBaseColor(randomColor);
    setPalette(generatePaletteFromColor(randomColor));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <div className="relative flex-grow">
          <Input
            type="text"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            className="pr-10"
          />
          <div
            className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded cursor-pointer border border-gray-300"
            style={{ backgroundColor: baseColor }}
            onClick={() => setShowColorPicker(!showColorPicker)}
          ></div>
          {showColorPicker && (
            <div className="absolute z-10 mt-2">
              <HexColorPicker color={baseColor} onChange={setBaseColor} />
            </div>
          )}
        </div>
        <Button onClick={generatePalette}>Generate Palette</Button>
        <Button onClick={generateRandomPalette} variant="outline">Random</Button>
      </div>
      {palette.length > 0 && <ColorPalette colors={palette} />}
    </div>
  );
};

export default ColorPaletteGenerator;