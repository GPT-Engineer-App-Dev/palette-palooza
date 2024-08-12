import React from 'react';
import ColorPaletteGenerator from '../components/ColorPaletteGenerator';
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-gray-900">
          Color Palette
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Create harmonious color combinations with ease
        </p>
        <ColorPaletteGenerator />
      </motion.div>
    </div>
  );
};

export default Index;