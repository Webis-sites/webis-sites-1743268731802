'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const FooterSection: FC = () => {
  const currentYear = new Date().getFullYear();

  // Gallery images from Unsplash
  const galleryImages = [
    "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1471",
    "https://images.unsplash.com/photo-1540496905036-5937c10647cc?q=80&w=1470",
    "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1974",
    "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=1470",
    "https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=1929",
    "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1450"
  ];

  return (
    <footer className="bg-blue-900 text-white py-16 relative overflow-hidden" dir="rtl">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-blue-800/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 rounded-full bg-blue-800/50 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-blue-300">Beta</span> Gym
            </h3>
            <p className="mb-6 text-blue-100 leading-relaxed">
              במשך למעלה מ-10 שנים אנו מובילים את תחום הכושר והבריאות בישראל עם הציוד המתקדם ביותר והמאמנים המקצועיים ביותר.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Link 
                href="#" 
                className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaFacebookF />
              </Link>
              <Link 
                href="#" 
                className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaTwitter />
              </Link>
              <Link 
                href="#" 
                className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaInstagram />
              </Link>
              <Link 
                href="#" 
                className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-200">קישורים מהירים</h3>
            <ul className="space-y-3">
              {[
                { title: 'עמוד הבית', href: '/' },
                { title: 'אודות', href: '#about' },
                { title: 'שירותים', href: '#services' },
                { title: 'מנויים', href: '#pricing' },
                { title: 'המאמנים שלנו', href: '#trainers' },
                { title: 'המתקנים שלנו', href: '#facilities' },
                { title: 'גלריה', href: '#gallery' },
                { title: 'צור קשר', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-blue-100 hover:text-blue-300 transition-colors duration-300 flex items-center"
                  >
                    <span className="ml-2">›</span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-200">צור קשר</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-1 ml-3 text-blue-300">
                  <FaMapMarkerAlt />
                </div>
                <span className="text-blue-100">רחוב האימונים 12, תל אביב</span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 ml-3 text-blue-300">
                  <FaPhone />
                </div>
                <span className="text-blue-100">03-1234567</span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 ml-3 text-blue-300">
                  <FaEnvelope />
                </div>
                <span className="text-blue-100">info@betagym.co.il</span>
              </li>
            </ul>
            
            <h3 className="text-xl font-bold mt-8 mb-4 text-blue-200">שעות פעילות</h3>
            <ul className="space-y-2 text-blue-100">
              <li>ראשון - חמישי: 6:00 - 23:00</li>
              <li>שישי: 7:00 - 18:00</li>
              <li>שבת: 8:00 - 16:00</li>
            </ul>
          </div>
          
          {/* Column 4: Gallery & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-200">גלריה</h3>
            <div className="grid grid-cols-3 gap-2 mb-8">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <Link href="#gallery">
                    <div className="relative h-20 w-full hover:opacity-80 transition-opacity duration-300">
                      <Image
                        src={image}
                        alt={`תמונת גלריה ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-blue-200">הירשם לניוזלטר</h3>
            <p className="text-blue-100 mb-4 text-sm">
              הירשם לקבלת עדכונים, מבצעים ותכנים בלעדיים
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="הזן את האימייל שלך"
                className="w-full py-3 px-4 bg-blue-800 text-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-blue-400"
              />
              <button
                type="submit"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-200 hover:text-blue-100 transition-colors duration-300"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="mt-16 pt-8 border-t border-blue-800 text-center text-blue-300">
          <p>© {currentYear} Beta Gym. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;