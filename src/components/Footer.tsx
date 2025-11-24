import React from 'react';
import {  Facebook, Instagram,  Mail } from 'lucide-react';
import logo from "../assets/logo.svg";             


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">

          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">

              <h2 className="text-2xl font-bold">Kids in the kitchen</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
             Cours de cuisine en anglais pour les enfants (5-10 ans)
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              
            </div>
          </div>


          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-2">
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-red-600 mr-2" />
                <span className="text-gray-300">kidsinthekitchen@gmail.com</span>
              </div>
            </div>
            

          </div>
          {/* <div className="flex justify-center lg:justify-start">
              <img 
                src={logo} 
                alt="Logo de l'entreprise" 
                className="w-32" 
              />
            </div> */}
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Kids  in the kitchen. Tous droits réservés. | 
            <a href="#" className="text-red-600 hover:underline ml-1">Mentions légales</a> | 
            <a href="#" className="text-red-600 hover:underline ml-1">Politique de confidentialité</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;