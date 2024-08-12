import React from 'react';
import ColorPaletteGenerator from '../components/ColorPaletteGenerator';
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white bg-opacity-70 backdrop-blur-xl rounded-3xl shadow-lg overflow-hidden border border-gray-200"
      >
        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center text-gray-800">
            Color Palette
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Create harmonious color combinations with ease
          </p>
          <ColorPaletteGenerator />
        </div>
      </motion.div>
    </div>
  );
};

export default Index;