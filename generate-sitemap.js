import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const sitemap = new SitemapStream({ 
  hostname: 'https://kidsinthekitchen.fr'
});


const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/ateliers', changefreq: 'weekly', priority: 0.9 },
	 { url: '/ateliers/christmas-gingerbreads', changefreq: 'monthly', priority: 0.8 }
];

const writeStream = createWriteStream(resolve('./public/sitemap.xml'));

sitemap.pipe(writeStream);

links.forEach(link => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log(' Sitemap généré avec succès dans public/sitemap.xml');
}).catch(err => {
  console.error(' Erreur lors de la génération du sitemap:', err);
});
