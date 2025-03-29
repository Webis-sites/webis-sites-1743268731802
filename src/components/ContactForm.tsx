'use client';

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // תטפל בשליחת הטופס כאן
    console.log('Form submitted:', formData);
    alert('תודה! הודעתך נשלחה בהצלחה.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const inputClasses = "w-full py-3 px-4 bg-blue-50 border border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-blue-900 placeholder-blue-300";

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 -mt-20 -ml-20 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 -mb-20 -mr-20 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-900 tracking-tight">
            צור <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">קשר</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="max-w-3xl mx-auto text-lg text-blue-700">
            יש לך שאלות? אנחנו כאן בשבילך. שלח לנו הודעה ונחזור אליך בהקדם.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="block mb-2 font-medium text-blue-900">
                  שם מלא
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="הכנס את שמך המלא"
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-blue-900">
                  אימייל
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-medium text-blue-900">
                  טלפון
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="050-1234567"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-blue-900">
                  נושא
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  <option value="">בחר נושא...</option>
                  <option value="membership">מידע על מנויים</option>
                  <option value="classes">מידע על שיעורים</option>
                  <option value="trainers">מידע על מאמנים אישיים</option>
                  <option value="feedback">משוב</option>
                  <option value="other">אחר</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium text-blue-900">
                הודעה
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="כתוב את הודעתך כאן..."
                required
                className={`${inputClasses} resize-none`}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-10 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto group"
              >
                <span>שלח הודעה</span>
                <FaPaperPlane className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;