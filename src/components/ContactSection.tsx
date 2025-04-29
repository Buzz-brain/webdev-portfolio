import React, { useRef, useState } from 'react';
import SectionHeading from './common/SectionHeading';
import Button from './common/Button';
import { CONTACT_INFO, SOCIAL_LINKS } from '../utils/constants';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  }>({ message: '', type: null });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({ 
      message: 'Your message has been sent successfully!', 
      type: 'success' 
    });
    
    if (formRef.current) {
      formRef.current.reset();
    }
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus({ message: '', type: null });
    }, 5000);
  };

  // Map social platform names to Lucide icons
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'Facebook':
        return <Facebook size={20} />;
      case 'Twitter':
        return <Twitter size={20} />;
      case 'Instagram':
        return <Instagram size={20} />;
      case 'WhatsApp':
        return <MessageCircle size={20} />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Get in touch with me for collaborations or inquiries"
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-900 dark:text-white">Get In Touch</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Feel free to contact me for any project inquiries, collaborations, or if you just want to say hello. I'm always open to discussing new projects and opportunities.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md mr-4">
                  <Mail className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-blue-900 dark:text-white mb-1">Email</h4>
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md mr-4">
                  <Phone className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-blue-900 dark:text-white mb-1">Phone</h4>
                  <a 
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md mr-4">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-blue-900 dark:text-white mb-1">Address</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-blue-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-sm hover:shadow-md text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={`Follow on ${social.platform}`}
                  >
                    {getSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-blue-900 dark:text-white">Send a Message</h3>
              
              {formStatus.message && (
                <div 
                  className={`mb-6 p-4 rounded-md ${
                    formStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                      : 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 resize-none"
                  ></textarea>
                </div>
                
                <Button type="submit" variant="primary" className="w-full flex justify-center items-center gap-2">
                  <Send size={16} />
                  <span>Send Message</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;