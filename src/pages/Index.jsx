import React from 'react';
import ColorPaletteGenerator from '../components/ColorPaletteGenerator';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-100 to-blue-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2 text-center text-gray-800">Color Palette Generator</h1>
        <p className="text-center text-gray-600 mb-8">Create, customize, and save beautiful color palettes</p>
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <ColorPaletteGenerator />
        </div>
      </div>
    </div>
  );
};

export default Index;