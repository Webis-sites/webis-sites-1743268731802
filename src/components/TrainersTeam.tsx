'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

interface TrainerCardProps {
  imageUrl: string;
  name: string;
  role: string;
  bio: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
}

const TrainerCard: FC<TrainerCardProps> = ({ imageUrl, name, role, bio, socialLinks }) => {
  return (
    <motion.div 
      className="rounded-2xl overflow-hidden shadow-2xl bg-white group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image container */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
        
        {/* Social links - appear on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-center space-x-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-xl hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-300">
              <FaInstagram className="text-lg" />
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-xl hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-300">
              <FaLinkedinIn className="text-lg" />
            </a>
          )}
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-xl hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-300">
              <FaFacebookF className="text-lg" />
            </a>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 text-right">
        <h3 className="text-2xl font-bold text-blue-900 mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-4">{role}</p>
        <p className="text-blue-800/80 leading-relaxed">{bio}</p>
      </div>
    </motion.div>
  );
};

const TrainersTeam: FC = () => {
  const trainers: TrainerCardProps[] = [
    {
      imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070",
      name: "רון לוי",
      role: "מאמן ראשי וספורטאי מקצועי",
      bio: "רון הוא מאמן כושר מוסמך עם 10 שנות ניסיון בתחום. הוא מתמחה באימוני כוח והתנגדות וידוע בגישה המוטיבציונית שלו.",
      socialLinks: {
        instagram: "#",
        linkedin: "#",
        facebook: "#"
      }
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=2074",
      name: "דנה כהן",
      role: "מאמנת אישית ומדריכת יוגה",
      bio: "דנה מתמחה באימונים פונקציונליים ויוגה. היא מסייעת ללקוחותיה להשיג איזון פיזי ונפשי באמצעות אימונים מותאמים אישית.",
      socialLinks: {
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=2070",
      name: "אלון יעקב",
      role: "מאמן קרוספיט ואתלטיקה",
      bio: "אלון הוא אלוף קרוספיט לשעבר ומתמחה באימוני עצימות גבוהה. הוא מאמן ספורטאים מקצועיים וחובבנים להשיג ביצועים מיטביים.",
      socialLinks: {
        instagram: "#",
        facebook: "#"
      }
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069",
      name: "מיכל אברהם",
      role: "מאמנת תזונה וכושר הוליסטי",
      bio: "מיכל משלבת ידע נרחב בתזונה עם תוכניות אימון מותאמות אישית. היא מאמינה בגישה הוליסטית לבריאות ואורח חיים בריא.",
      socialLinks: {
        instagram: "#",
        linkedin: "#",
        facebook: "#"
      }
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
            צוות <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">המאמנים</span> שלנו
          </h2>
          <div className="w-32 h-1.5 bg-blue-600 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="max-w-3xl mx-auto text-lg text-blue-700">
            צוות המאמנים המקצועי שלנו כאן כדי לעזור לכם להשיג את מטרות הכושר שלכם
          </p>
        </motion.div>

        {/* Trainers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <TrainerCard 
              key={index}
              imageUrl={trainer.imageUrl}
              name={trainer.name}
              role={trainer.role}
              bio={trainer.bio}
              socialLinks={trainer.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersTeam;