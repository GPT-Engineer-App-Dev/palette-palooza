import React from 'react';
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const ColorPalette = ({ colors, mini = false }) => {
  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color).then(() => {
      toast.success(`Copied ${color} to clipboard!`);
    });
  };

  return (
    <div className={cn(
      "grid gap-2",
      mini ? "grid-cols-5" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
    )}>
      {colors.map((color, index) => (
        <div
          key={index}
          className={cn(
            "rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105",
            mini ? "aspect-[2/1]" : "aspect-square"
          )}
          style={{ backgroundColor: color }}
          onClick={() => copyToClipboard(color)}
        >
          <div className="h-full flex items-end justify-center p-2 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity">
            <span className={cn(
              "text-white font-medium",
              mini ? "text-xs" : "text-sm"
            )}>{color}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;