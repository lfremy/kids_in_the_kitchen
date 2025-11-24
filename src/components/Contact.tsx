import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contactez-Nous
          </h2>
         
        </div>
        

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Nos Coordonnées</h3>
          </div>
          <div className="space-y-6">
            
            
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 text-red-600 mr-4" />
              <div className="text-center">
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600">kidsinthekitchen@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <MapPin className="h-6 w-6 text-red-600 mr-4" />
              <div className="text-center">
                <p className="font-semibold text-gray-800">Adresse</p>
                <p className="text-gray-600">91360 Villemoisson-sur-Orge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;