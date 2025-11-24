import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gingerBread from "../assets/bonhommes-pain-epices-sans-gluten.jpg";
import crumble from "../assets/crumble.jpg";
import cookie from "../assets/cookie.jpg";



// Export des données pour WorkshopDetail
export const workshopsData = [
  {
    id: 'christmas-gingerbreads',
    title: 'Christmas Gingerbreads',
    image: gingerBread,
    description: 'Plonge dans la magie de Noël en préparant de délicieux bonhommes en pain d\'épices ! Dans cet atelier 100% en anglais, les enfants découvrent une recette traditionnelle anglo-saxonne tout en s\'amusant. Ils malaxent la pâte épicée, découpent leurs bonhommes, et les décorent avec des glaçages colorés. Un moment convivial où cuisine et anglais se mélangent naturellement !',
    dates: [
      'Mercredi 10 décembre 2025 - 14h30',
      'Mercredi 17 décembre 2025 - 14h30',
      'Lundi 22 décembre 2025 - 10h30',
      'Mardi 23 décembre 2025 - 10h30',
      'Lundi 29 décembre 2025 - 10h30',
      'Mardi 30 décembre 2025 - 10h30',
    ],
   
    season: 'Décembre 2025',

  },
  {
    id: 'apple-crumble',
    title: 'Apple Crumble',
    image: crumble, 
    description: '',
    dates: [
],
    season: 'Janvier 2026',
  },
  {
    id: 'valentines-cookies',
    title: 'Valentine\'s Cookies',
    image: cookie, 
    description: '',
    dates: [],
    season: 'Février 2026',

  },
];

const WorkShop = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-200">

      <section className="pt-28 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nos Ateliers
          </h1>
        </div>
      </section>


      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {workshopsData.map((workshop) => (
              <Link
                key={workshop.id}
                to={`/ateliers/${workshop.id}`}
                className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 hover:scale-[1.02] overflow-hidden"
              >
                <div className="flex items-center">

                  <div className="w-32 h-24 flex-shrink-0 overflow-hidden bg-gray-200">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  

                  <div className="flex-1 flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                        {workshop.title}
                      </h3>
                      <span className="text-sm font-semibold text-blue-800">
                        {workshop.season}
                      </span>
                    </div>
                    <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkShop;