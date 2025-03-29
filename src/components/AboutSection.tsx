'use client';

import { FC } from 'react';
import { FaDumbbell, FaAward, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="relative backdrop-blur-xl bg-white/95 p-8 rounded-2xl border border-blue-100/30 shadow-2xl overflow-hidden group hover:bg-blue-50/95 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/50 -z-10 group-hover:from-blue-100/50 group-hover:to-blue-50/50 transition-colors duration-300" />
      
      <div className="flex flex-col items-end text-right relative z-10">
        <div className="bg-blue-600 p-4 rounded-2xl mb-6 inline-flex transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-xl">
          <span className="text-3xl text-white">{icon}</span>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-blue-900 group-hover:text-blue-800 transition-colors duration-300">{title}</h3>
        <p className="text-blue-700/90 leading-relaxed group-hover:text-blue-600 transition-colors duration-300">{description}</p>
      </div>
    </motion.div>
  );
};

/**
 * AboutSection Component
 * 
 * A responsive RTL about section for 'מכון כושר ביתא' highlighting their
 * experience and professional service using glassmorphism design style.
 */
const AboutSection: FC = () => {
  // Features data
  const features = [
    {
      icon: <FaDumbbell />,
      title: "ציוד מתקדם",
      description: "אנו מציעים את הציוד החדיש והמתקדם ביותר בתעשייה לחוויית אימון מיטבית."
    },
    {
      icon: <FaAward />,
      title: "צוות מקצועי",
      description: "המאמנים שלנו הם בעלי הסמכות והניסיון הרב ביותר בתחום הכושר."
    },
    {
      icon: <FaUsers />,
      title: "קהילה תומכת",
      description: "הצטרפו לקהילה שלנו ותיהנו מסביבה תומכת ומעודדת להשגת היעדים שלכם."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=2069"
          alt="רקע מכון כושר"
          layout="fill"
          objectFit="cover"
          className="object-center"
        />
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 rounded-full bg-blue-50/40 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-900 tracking-tight">
              אודות <span className="text-white bg-blue-600 px-4 py-2 rounded-xl shadow-xl inline-block transform hover:scale-105 transition-transform duration-300">מכון כושר ביתא</span>
            </h2>
            <div className="w-32 h-1.5 bg-blue-600 mx-auto mb-8 rounded-full shadow-lg"></div>
          </motion.div>

          {/* Main content card with glassmorphism effect */}
          <motion.div 
            className="backdrop-blur-xl bg-white/90 rounded-3xl p-8 md:p-12 border border-blue-100/30 shadow-2xl mb-16 relative overflow-hidden group hover:bg-white/95 transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative background gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 to-white/30 -z-10 group-hover:from-blue-100/30 group-hover:to-blue-50/30 transition-colors duration-300" />
            
            <div className="text-right relative z-10">
              <p className="text-xl md:text-2xl leading-relaxed text-blue-900 mb-8 font-medium">
                אנחנו מכון כושר מוביל בתחום עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-blue-800/90">
                ב-מכון כושר ביתא, אנו מאמינים שכושר הוא דרך חיים ולא רק פעילות. המטרה שלנו היא לעזור לכם להשיג את היעדים שלכם בדרך בריאה, מהנה ומקצועית.
              </p>
            </div>
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* Call to action */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button className="group relative bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-rotate-1 focus:outline-none focus:ring-4 focus:ring-blue-500/50 overflow-hidden">
              <span className="relative z-10">הצטרפו אלינו עוד היום</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;