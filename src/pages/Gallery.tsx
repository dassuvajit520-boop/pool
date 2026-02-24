import { motion } from 'motion/react';
import Layout from '../components/Layout';

export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop",
      title: "The Glass House",
      location: "East Hampton, NY"
    },
    {
      url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop",
      title: "Azure Heights",
      location: "Beverly Hills, CA"
    },
    {
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
      title: "Monaco Sanctuary",
      location: "Monte Carlo, MC"
    },
    {
      url: "https://images.unsplash.com/photo-1562663474-6cbb3fee4c77?q=80&w=2070&auto=format&fit=crop",
      title: "Coastal Retreat",
      location: "Palm Beach, FL"
    },
    {
      url: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=2070&auto=format&fit=crop",
      title: "Desert Oasis",
      location: "Scottsdale, AZ"
    },
    {
      url: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=2070&auto=format&fit=crop",
      title: "The Infinity Edge",
      location: "Malibu, CA"
    }
  ];

  return (
    <Layout>
      <section className="pt-40 pb-32 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 mb-6 block">Portfolio</span>
            <h1 className="text-5xl md:text-8xl font-serif italic tracking-tighter leading-tight">
              A collection of<br />liquid masterpieces.
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl cursor-pointer"
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <h3 className="text-2xl font-serif italic mb-2">{image.title}</h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">{image.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
