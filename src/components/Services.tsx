import React from 'react';
import {  Calendar } from 'lucide-react';

const Services = () => {
  const services = [

    {
      icon: <Calendar className="h-12 w-12 text-yellow-500" />,
      title: "Lundi 22 décembre 2025",
      description: "",
    
    },
     {
      icon: <Calendar className="h-12 w-12 text-yellow-500" />,
      title: "Lundi 29 décembre 2025",
      description: "",
    
    },
     {
      icon: <Calendar className="h-12 w-12 text-yellow-500" />,
      title: "Vendredi 02 janvier 2026",
      description: "",
    },
   
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-green-100 to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Nos Tarifs
          </h2>
          
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-black/60 rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              
              
            </div>

            <div className="space-y-6">
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                  L'atelier
                </h4>
                <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Christmas Cookie</span>
                  <span className="text-xl font-bold text-gray-800">15€</span>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Les prochaines dates
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-black/60 rounded-lg p-8 shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                 
                  
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Services;