import { useState } from 'react';
import {countries} from '../data/destinosData';

export default function Destinos() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const current = countries[selectedIndex];

  return (
    <div id="viajes" className="px-8 py-2 space-y-10 md:py-10 md:px-10 xl:pb-20 xl:px-40 2xl:px-0">
      <div className="text-center md:pt-2 px-4 sm:px-12 md:px-32 lg:px-64 lg:pb-2">
        <h1 className="text-white font-bold text-3xl sm:text-4xl">Destinos Inolvidables</h1>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto py-4 md:py-8 sm:px-8 bg-gray-800 rounded-lg shadow-xl flex flex-col items-center justify-center space-y-4">
        <div className="flex flex-wrap justify-center xl:space-x-2 2xl:space-x-7">
          {countries.map((country, index) => (
            <button
              key={country.name}
              className={`tab px-4 sm:px-6 py-2 text-sm md:text-base rounded-lg ${
                selectedIndex === index
                  ? 'bg-blue-400 text-black font-bold'
                  : 'text-white hover:bg-blue-500 transition'
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {country.name}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 bg-gray-800 p-6 sm:p-8 rounded-lg">
          <img
            src={current.image}
            alt={current.name}
            className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">{current.title}</h2>
            <div className="text-white text-base sm:text-lg leading-relaxed space-y-4">{current.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
