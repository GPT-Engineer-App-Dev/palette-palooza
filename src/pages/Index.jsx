import React from 'react';
import ColorPaletteGenerator from '../components/ColorPaletteGenerator';
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-center text-gray-800">
          Color Palette
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Create harmonious color combinations with ease
        </p>
        <ColorPaletteGenerator />
      </motion.div>
    </div>
  );
};

export default Index;