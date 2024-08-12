import React from 'react';
import { toast } from "sonner";

const ColorPalette = ({ colors }) => {
  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color).then(() => {
      toast.success(`Copied ${color} to clipboard!`);
    });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {colors.map((color, index) => (
        <div
          key={index}
          className="aspect-square rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
          style={{ backgroundColor: color }}
          onClick={() => copyToClipboard(color)}
        >
          <div className="h-full flex items-end justify-center p-2 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity">
            <span className="text-white text-sm font-medium">{color}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;