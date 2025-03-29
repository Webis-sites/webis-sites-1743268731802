'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

interface PricingPlanProps {
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingPlan: FC<PricingPlanProps> = ({ 
  title, 
  price, 
  duration, 
  description, 
  features, 
  isPopular = false 
}) => {
  return (
    <motion.div 
      className={`rounded-3xl overflow-hidden shadow-2xl relative group ${
        isPopular ? 'ring-4 ring-blue-600 ring-offset-4 ring-offset-white' : 'border border-blue-100'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isPopular && (
        <div className="absolute top-6 left-0 bg-blue-600 text-white py-1 px-4 text-sm font-bold rounded-e-full shadow-lg z-10">
          הכי פופולרי
        </div>
      )}
      
      <div className={`p-8 bg-white h-full flex flex-col text-right ${isPopular ? 'bg-gradient-to-br from-blue-50 to-white' : ''}`}>
        <h3 className="text-2xl font-bold mb-4 text-blue-900">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-black text-blue-900">₪{price}</span>
          <span className="text-blue-500 mr-2">/ {duration}</span>
        </div>
        <p className="text-blue-700 mb-8">{description}</p>
        
        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-blue-800">
              <span className="text-blue-600 shrink-0"><FaCheck /></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.03] group-hover:shadow-lg mt-auto ${
            isPopular 
              ? 'bg-blue-600 hover:bg-blue-500 text-white' 
              : 'bg-white hover:bg-blue-50 text-blue-900 border-2 border-blue-200 hover:border-blue-300'
          }`}
        >
          הצטרפו עכשיו
        </button>
      </div>
    </motion.div>
  );
};

const MembershipPlans: FC = () => {
  const plans: PricingPlanProps[] = [
    {
      title: "חבילה בסיסית",
      price: "199",
      duration: "חודש",
      description: "מיועד ליחידים המעוניינים בגישה בסיסית למתקני המכון.",
      features: [
        "גישה לכל אזורי כושר הבסיסיים",
        "שעות פעילות רגילות",
        "אחסון אישי בסיסי",
        "אפליקציית מעקב אימונים",
        "שיתוף פעולה עם קהילת המכון"
      ],
    },
    {
      title: "חבילה פרימיום",
      price: "349",
      duration: "חודש",
      description: "אידיאלי למתאמנים רציניים המחפשים לקבל את המרב מהמנוי שלהם.",
      features: [
        "גישה בלתי מוגבלת 24/7",
        "כל שיעורי הקבוצה כלולים",
        "שימוש בסאונה ובריכה",
        "אימון אישי חודשי (2 פגישות)",
        "ייעוץ תזונה חודשי",
        "לוקר אישי קבוע"
      ],
      isPopular: true
    },
    {
      title: "חבילה משפחתית",
      price: "599",
      duration: "חודש",
      description: "אידיאלי למשפחות הרוצות להתאמן יחד ולחסוך.",
      features: [
        "חברות עבור 4 בני משפחה",
        "גישה לכל המתקנים והציוד",
        "שיעורי קבוצה כלולים",
        "תוכניות אימון מותאמות למשפחה",
        "פעילויות מיוחדות למשפחות",
        "הנחה על שירותים נוספים"
      ],
    },
    {
      title: "כרטיסייה גמישה",
      price: "500",
      duration: "10 כניסות",
      description: "הפתרון המושלם למי שזקוק לגמישות באימונים.",
      features: [
        "10 כניסות לשימוש ללא הגבלת זמן",
        "גישה לכל מתקני המכון",
        "כניסה לשיעורי קבוצה (על בסיס מקום פנוי)",
        "אחסון יומי",
        "שיתוף בין מספר משתמשים"
      ],
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
            תוכניות <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">המנוי</span> שלנו
          </h2>
          <div className="w-32 h-1.5 bg-blue-600 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="max-w-3xl mx-auto text-lg text-blue-700">
            בחרו את תוכנית המנוי המתאימה לכם והתחילו את מסע הכושר שלכם עוד היום
          </p>
        </motion.div>

        {/* Pricing plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan 
              key={index}
              title={plan.title}
              price={plan.price}
              duration={plan.duration}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
        
        {/* Additional note */}
        <div className="mt-16 text-center text-blue-600 max-w-3xl mx-auto">
          <p className="text-sm">
            * כל התוכניות כוללות גישה לאפליקציית המכון, מגבת ללא תשלום בכל ביקור וחודש נסיון ללא התחייבות.
            שאלות נוספות? <a href="#" className="font-bold underline hover:text-blue-800 transition-colors">צרו איתנו קשר</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;