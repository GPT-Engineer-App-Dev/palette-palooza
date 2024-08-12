import React from 'react';
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className={cn(
            "rounded-2xl shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105",
            mini ? "aspect-[2/1]" : "aspect-square"
          )}
          style={{ backgroundColor: color }}
          onClick={() => copyToClipboard(color)}
        >
          <div className="h-full flex items-end justify-center p-2 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity">
            <span className={cn(
              "text-white font-medium mix-blend-difference",
              mini ? "text-xs" : "text-sm"
            )}>{color}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ColorPalette;