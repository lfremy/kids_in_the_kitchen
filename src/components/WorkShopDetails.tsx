import React from 'react';
import { Calendar, Users, Clock, Euro, Phone } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { workshopsData } from '../pages/Workshop';

const WorkshopDetail = () => {
  const { id } = useParams();
  console.log(id)
  
  // Trouver l'atelier correspondant
  const workshop = workshopsData.find(w => w.id === id);

  if (!workshop) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-blue-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Atelier non trouvé</h1>
          <a href="/ateliers" className="text-blue-600 hover:text-blue-700 font-semibold">
            Retour aux ateliers
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero avec image */}
      <section className="pt-20 bg-gradient-to-br from-gray-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                {workshop.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {workshop.description}
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Informations pratiques
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            {/* Infos générales */}
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">

              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Durée</p>
                  <p className="text-lg font-semibold text-gray-800">1h15</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-red-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Participants</p>
                  <p className="text-lg font-semibold text-gray-800">4</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Âge</p>
                  <p className="text-lg font-semibold text-gray-800">5-10 ans</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <Euro className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tarif</p>
                  <p className="text-lg font-semibold text-gray-800">20</p>
                </div>
              </div>

            </div>

            {/* Prochaines dates */}
            <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-red-600" />
                Prochaines dates
              </h3>
              <ul className="space-y-3">
                {workshop.dates.map((date, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{date}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Call to action - Réservation */}
          <div className="bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Prêt à réserver ?
            </h3>
            <p className="text-gray-600 mb-6">
              Contactez-nous pour inscrire votre enfant à cet atelier
            </p>

            <div
              
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
                06 42 37 21 32
              <Phone className="h-5 w-5" />

            </div>
            

          </div>

        </div>
      </section>

    </div>
  );
};

export default WorkshopDetail;
