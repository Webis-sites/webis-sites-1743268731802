'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string | React.ReactNode;
}

const ContactInfo: FC<ContactInfoProps> = ({ icon, title, details }) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="bg-blue-600 p-3 rounded-xl text-white shadow-lg">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-blue-900 mb-1">{title}</h4>
        <div className="text-blue-700">{details}</div>
      </div>
    </div>
  );
};

const LocationMap: FC = () => {
  const openingHours = (
    <ul className="space-y-1">
      <li>ראשון - חמישי: 6:00 - 23:00</li>
      <li>שישי: 7:00 - 18:00</li>
      <li>שבת: 8:00 - 16:00</li>
    </ul>
  );

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-blue-50" dir="rtl">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-900 tracking-tight">
            איך <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">להגיע</span> אלינו
          </h2>
          <div className="w-32 h-1.5 bg-blue-600 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="max-w-3xl mx-auto text-lg text-blue-700">
            אנחנו נמצאים במיקום מרכזי ונוח עם גישה קלה מכל אזורי העיר
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div 
            className="bg-white p-8 rounded-3xl shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-8">פרטי יצירת קשר</h3>
            
            <ContactInfo 
              icon={<FaMapMarkerAlt />} 
              title="כתובת" 
              details="רחוב האימונים 12, תל אביב" 
            />
            
            <ContactInfo 
              icon={<FaPhone />} 
              title="טלפון" 
              details="03-1234567" 
            />
            
            <ContactInfo 
              icon={<FaEnvelope />} 
              title="אימייל" 
              details="info@betagym.co.il" 
            />
            
            <ContactInfo 
              icon={<FaClock />} 
              title="שעות פעילות" 
              details={openingHours} 
            />
            
            <div className="mt-10">
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-colors duration-300">
                צרו קשר עכשיו
              </button>
            </div>
          </motion.div>
          
          {/* Map */}
          <motion.div 
            className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl h-[500px] relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Using an image from Unsplash as a placeholder for a real map */}
            <Image
              src="https://images.unsplash.com/photo-1577086664693-894d853ce7db?q=80&w=2068"
              alt="מפת מיקום מכון הכושר"
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
            
            {/* Map overlay with a marker */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center animate-pulse shadow-2xl">
                <FaMapMarkerAlt className="text-white text-2xl" />
              </div>
            </div>
            
            {/* Information card */}
            <div className="absolute bottom-6 right-6 p-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl max-w-md">
              <h3 className="text-xl font-bold text-blue-900 mb-2">חניה נוחה וגישה לתחבורה ציבורית</h3>
              <p className="text-blue-700">
                המכון שלנו נמצא במרחק הליכה של 5 דקות מתחנת הרכבת הקלה ומתחנות האוטובוס המרכזיות. כמו כן, יש חניה ללא תשלום לחברי המכון.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;