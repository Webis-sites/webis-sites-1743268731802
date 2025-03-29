'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaRunning, FaHeartbeat, FaDumbbell, FaUsers } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, description, imageUrl }) => {
  return (
    <motion.div 
      className="relative rounded-2xl overflow-hidden group shadow-2xl h-96"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8 text-right h-full flex flex-col">
        <div className="bg-blue-600 p-4 rounded-2xl inline-flex mb-6 self-end shadow-xl">
          <span className="text-3xl text-white">{icon}</span>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-blue-100 leading-relaxed mb-6">{description}</p>
        <button className="mt-auto self-start bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/20 py-2.5 px-6 rounded-full text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl">
          פרטים נוספים
        </button>
      </div>
    </motion.div>
  );
};

const ServicesSection: FC = () => {
  const services = [
    {
      icon: <FaRunning />,
      title: "אימונים אישיים",
      description: "תוכניות אימון מותאמות אישית לצרכים והמטרות שלך, בליווי מאמן אישי מקצועי.",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070"
    },
    {
      icon: <FaHeartbeat />,
      title: "אימוני קרדיו",
      description: "שיפור סיבולת לב-ריאה, חיזוק מערכת הדם והורדת אחוזי שומן עם מגוון אימוני קרדיו.",
      imageUrl: "https://images.unsplash.com/photo-1590239926044-0b942e366a9c?q=80&w=2069"
    },
    {
      icon: <FaDumbbell />,
      title: "אימוני כוח",
      description: "בניית שרירים, חיזוק העצמות והגברת המטבוליזם באמצעות אימוני כוח והתנגדות.",
      imageUrl: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?q=80&w=2070"
    },
    {
      icon: <FaUsers />,
      title: "אימונים קבוצתיים",
      description: "אימונים אנרגטיים ומוטיבציוניים בקבוצות קטנות, בהנחיית מדריכים מקצועיים.",
      imageUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white" dir="rtl">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-blue-50/70 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 rounded-full bg-blue-50/70 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-900 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">השירותים</span> שלנו
          </h2>
          <div className="w-32 h-1.5 bg-blue-600 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="max-w-3xl mx-auto text-lg text-blue-700">
            אנחנו מציעים מגוון רחב של שירותים ואימונים כדי לעזור לכם להשיג את מטרות הכושר שלכם
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;