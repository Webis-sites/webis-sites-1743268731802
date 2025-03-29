'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaSwimmer, FaShower, FaParking, FaWifi, FaUtensils, FaLock } from 'react-icons/fa';

interface FacilityFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FacilityFeature: FC<FacilityFeatureProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-blue-50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-4 items-start text-right">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-blue-900">{title}</h3>
          <p className="text-blue-700/80 leading-relaxed">{description}</p>
        </div>
        <div className="bg-blue-600 p-3 rounded-2xl shadow-lg">
          <span className="text-2xl text-white">{icon}</span>
        </div>
      </div>
    </motion.div>
  );
};

const FacilitiesFeatures: FC = () => {
  const facilities = [
    {
      icon: <FaSwimmer />,
      title: "בריכת שחייה",
      description: "בריכת שחייה מחוממת באורך 25 מטר, עם מסלולים ייעודיים לשחייה ספורטיבית והתאוששות."
    },
    {
      icon: <FaShower />,
      title: "מקלחות וחדרי הלבשה",
      description: "חדרי הלבשה מרווחים ומקלחות נקיות עם מים חמים 24/7 וארוניות אישיות."
    },
    {
      icon: <FaParking />,
      title: "חניה ללא תשלום",
      description: "חניון רחב ידיים ללא תשלום לנוחות המתאמנים, עם גישה נוחה למתחם."
    },
    {
      icon: <FaWifi />,
      title: "אינטרנט אלחוטי",
      description: "גישה חופשית לאינטרנט אלחוטי מהיר בכל רחבי המתחם לנוחות המתאמנים."
    },
    {
      icon: <FaUtensils />,
      title: "בר תזונה",
      description: "בר תזונה עם מבחר משקאות חלבון, חטיפי אנרגיה ומזון בריא להשלמת האימון."
    },
    {
      icon: <FaLock />,
      title: "אבטחה 24/7",
      description: "מערכת אבטחה מתקדמת וצוות שמירה מקצועי לבטיחות המתאמנים בכל שעות היממה."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Facilities list */}
          <div>
            <motion.div 
              className="mb-10"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-900 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">המתקנים</span> והתשתיות
              </h2>
              <div className="w-32 h-1.5 bg-blue-600 mb-8 rounded-full shadow-lg"></div>
              <p className="text-lg text-blue-700 mb-6 leading-relaxed">
                אנו מציעים מגוון רחב של מתקנים ושירותים ברמה הגבוהה ביותר כדי להבטיח חוויית אימון מושלמת
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 gap-6">
              {facilities.map((facility, index) => (
                <FacilityFeature
                  key={index}
                  icon={facility.icon}
                  title={facility.title}
                  description={facility.description}
                />
              ))}
            </div>
          </div>
          
          {/* Right column - Image */}
          <motion.div 
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca?q=80&w=2070"
              alt="מתקני מכון הכושר"
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
            <div className="absolute bottom-0 right-0 p-8">
              <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl max-w-md text-right">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">ציוד מתקדם ומגוון</h3>
                <p className="text-blue-800">
                  המתחם שלנו מצויד במיטב המכשירים והציוד החדישים ביותר, המתעדכנים באופן קבוע כדי להעניק לכם את חוויית האימון הטובה ביותר.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesFeatures;