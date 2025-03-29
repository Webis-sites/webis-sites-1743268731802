import { FC } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section 
      dir="rtl" 
      className={`relative min-h-screen overflow-hidden ${className}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 to-blue-800/95"></div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
          alt="מכון כושר ביתא - אימון מקצועי"
          layout="fill"
          objectFit="cover"
          priority
          className="mix-blend-overlay opacity-40"
        />
      </div>
      
      {/* Glassmorphism decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-blue-400/10 backdrop-blur-xl border border-blue-300/20 shadow-2xl transform rotate-12"></div>
      <div className="absolute bottom-1/4 left-10 w-40 h-40 rounded-full bg-blue-300/10 backdrop-blur-xl border border-blue-200/20 shadow-2xl"></div>
      <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"></div>
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center items-center md:items-end text-right">
        {/* Glassmorphism card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 md:p-12 max-w-xl w-full">
          {/* Logo */}
          <div className="mb-8 text-center md:text-right">
            <h3 className="inline-block text-xl font-bold bg-blue-600 text-white px-6 py-2 rounded-full shadow-xl">
              מכון כושר ביתא
            </h3>
          </div>
          
          {/* Hero content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              <span className="block transform hover:scale-105 transition-transform duration-300 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white">
                מכון כושר מוביל
              </span>
              <span className="block text-blue-300 drop-shadow-lg transform hover:scale-105 transition-transform duration-300">
                בישראל
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed">
              חווית לקוח מושלמת בכל ביקור
            </p>
            
            <p className="text-blue-200/90 text-lg leading-relaxed">
              אנחנו מכון כושר מוביל בתחום עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            
            {/* CTA Button */}
            <div className="pt-6">
              <button 
                className="group relative bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-rotate-1 focus:outline-none focus:ring-4 focus:ring-blue-500/50 overflow-hidden"
                aria-label="קבע תור עכשיו למכון הכושר"
              >
                <span className="relative z-10">קבע תור עכשיו</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative fitness icons/elements */}
        <div className="absolute bottom-10 left-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full p-4 shadow-2xl hidden md:block transform hover:rotate-12 transition-transform duration-300">
          <div className="w-16 h-16 flex items-center justify-center text-3xl">
            💪
          </div>
        </div>
        <div className="absolute top-20 right-20 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full p-3 shadow-2xl hidden lg:block transform hover:-rotate-12 transition-transform duration-300">
          <div className="w-12 h-12 flex items-center justify-center text-2xl">
            🏋️‍♀️
          </div>
        </div>
      </div>
      
      {/* Accessibility skip link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black p-2 z-50">
        דלג לתוכן הראשי
      </a>
    </section>
  );
};

export default HeroSection;