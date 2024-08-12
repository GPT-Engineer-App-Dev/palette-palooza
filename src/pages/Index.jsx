import React from 'react';
import ColorPaletteGenerator from '../components/ColorPaletteGenerator';
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Color Palette Generator
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Create, customize, and save beautiful color palettes
          </p>
          <ColorPaletteGenerator />
        </div>
      </motion.div>
    </div>
  );
};

export default Index;