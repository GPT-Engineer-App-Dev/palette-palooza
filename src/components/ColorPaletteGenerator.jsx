import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { HexColorPicker } from "react-colorful";
import { Heart, Trash2, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import ColorPalette from './ColorPalette';
import { generateRandomColor, generatePaletteFromColor } from '../utils/colorUtils';

const ColorPaletteGenerator = () => {
  const [baseColor, setBaseColor] = useState('#6D28D9');
  const [palette, setPalette] = useState([]);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [colorCount, setColorCount] = useState(5);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favoritePalettes');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoritePalettes', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    generatePalette();
  }, [baseColor, colorCount]);

  const generatePalette = () => {
    setPalette(generatePaletteFromColor(baseColor, colorCount));
  };

  const generateRandomPalette = () => {
    const randomColor = generateRandomColor();
    setBaseColor(randomColor);
  };

  const savePalette = () => {
    if (palette.length > 0) {
      setFavorites([...favorites, { baseColor, colors: palette }]);
    }
  };

  const removePalette = (index) => {
    setFavorites(favorites.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-grow space-y-4">
          <div className="flex space-x-4">
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
            <Button onClick={generateRandomPalette} variant="outline" className="flex-shrink-0">
              <RefreshCw className="w-4 h-4 mr-2" /> Random
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Colors: {colorCount}</span>
            <Slider
              value={[colorCount]}
              onValueChange={(value) => setColorCount(value[0])}
              max={10}
              min={3}
              step={1}
              className="w-[200px]"
            />
          </div>
        </div>
      </div>
      {palette.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <ColorPalette colors={palette} />
          <Button onClick={savePalette} className="w-full">
            <Heart className="w-4 h-4 mr-2" /> Save Palette
          </Button>
        </motion.div>
      )}
      {favorites.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">Favorite Palettes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {favorites.map((favPalette, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative"
              >
                <ColorPalette colors={favPalette.colors} mini />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => removePalette(index)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ColorPaletteGenerator;