'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// סוגי התמונות בגלריה
type GalleryCategory = 'הכל' | 'אימונים' | 'מתקנים' | 'קבוצות';

interface GalleryItemProps {
  imageUrl: string;
  title: string;
  category: GalleryCategory;
}

const PortfolioGallery: FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('הכל');
  
  // רשימת התמונות בגלריה עם תמונות מ-Unsplash
  const galleryItems: GalleryItemProps[] = [
    {
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070",
      title: "אימון כוח מקצועי",
      category: "אימונים"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069",
      title: "חדר כושר מתקדם",
      category: "מתקנים"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2074",
      title: "אימון קבוצתי",
      category: "קבוצות"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070",
      title: "משקולות חופשיות",
      category: "מתקנים"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070",
      title: "אימון קרוספיט",
      category: "אימונים"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070",
      title: "אימון אישי",
      category: "אימונים"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070",
      title: "יוגה קבוצתית",
      category: "קבוצות"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070",
      title: "מכשירי כושר",
      category: "מתקנים"
    }
  ];
  
  // סינון התמונות לפי הקטגוריה הפעילה
  const filteredItems = activeCategory === 'הכל' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);
  
  // קטגוריות לסינון
  const categories: GalleryCategory[] = ['הכל', 'אימונים', 'מתקנים', 'קבוצות'];

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
            הגלריה <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">שלנו</span>
          </h2>
          <div className="w-32 h-1.5 bg-blue-600 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="max-w-3xl mx-auto text-lg text-blue-700 mb-10">
            צפו בתמונות ממתחם האימונים, המתקנים והפעילויות במכון הכושר שלנו
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-blue-200'
                    : 'bg-white text-blue-800 hover:bg-blue-50'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          layout
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-2xl overflow-hidden shadow-2xl group relative h-80"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              layout
            >
              <div className="relative h-full w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-900/0 transition-opacity duration-300 group-hover:opacity-100 opacity-70"></div>
                <div className="absolute bottom-0 right-0 p-6 text-right">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <span className="inline-block px-3 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-sm rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGallery;