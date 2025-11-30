import React from 'react';
import { Clock, Users, Gift, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="presentation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Le concept
          </h2>
          <p className="text-xl md:text-2xl text-red-600 font-semibold mb-4">
            L'anglais s'apprend... en cuisinant !
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des ateliers cuisine 100% en anglais pour les enfants dès 5 ans. Le mercredi  ou
            pendant les vacances scolaires, Ludivine transforme la cuisine en terrain de jeu éducatif 
            où l'apprentissage de l'anglais se fait naturellement, les mains dans la pâte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
              <Sparkles className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
              Dès 5 ans
            </h3>
            <p className="text-gray-600 text-center">
              Accessible aux jeunes cuisiniers en herbe
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
              1h15 d'atelier
            </h3>
            <p className="text-gray-600 text-center">
              Le temps idéal pour cuisiner et apprendre
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
              <Users className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
              4 enfants max
            </h3>
            <p className="text-gray-600 text-center">
              Petits groupes pour un suivi personnalisé
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
              <Gift className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
              À emporter
            </h3>
            <p className="text-gray-600 text-center">
              Chaque enfant repart avec sa création et un livret d'activités
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;