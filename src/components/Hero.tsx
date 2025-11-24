import React from 'react';
import { Phone } from 'lucide-react';
import kid from "../assets/hero.jpg"
         

const Hero = () => {
  return (
    <section id="accueil" className="pt-20 min-h-screen bg-gradient-to-br from-gray-100 to-blue-200 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Logo au-dessus du titre */}
           

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Apprends
              <span className="text-red-600 block">l'anglais</span>
              les mains dans la farine
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Des ateliers cuisine en anglais, les mercredis et pendant les vacances!             
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              
              <a
                href="tel:+33123456789"
                className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                06 42 37 21 32
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden shadow-2xl">
              <img
                src={kid}
                alt="Boulettes artisanales fraîches"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
