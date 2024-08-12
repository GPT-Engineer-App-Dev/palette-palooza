import React from 'react';
import ColorPaletteGenerator from '../components/ColorPaletteGenerator';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2 text-center text-gray-800">Color Palette Generator</h1>
        <p className="text-center text-gray-600 mb-8">Generate beautiful color palettes with ease</p>
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <ColorPaletteGenerator />
        </div>
      </div>
    </div>
  );
};

export default Index;