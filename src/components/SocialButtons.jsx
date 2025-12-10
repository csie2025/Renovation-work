import { MessageCircle, Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const SocialButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram', color: 'bg-pink-600 hover:bg-pink-700' },
    { icon: <Youtube size={20} />, href: '#', label: '抖音/Youtube', color: 'bg-red-600 hover:bg-red-700' },
    { icon: <MessageCircle size={20} />, href: '#', label: 'Line諮詢', color: 'bg-green-500 hover:bg-green-600' },
  ];

  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col items-center space-y-4">
      {/* 社群按鈕 */}
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${social.color} w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 group relative`}
          aria-label={social.label}
        >
          {social.icon}
          <span className="absolute right-14 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {social.label}
          </span>
        </a>
      ))}
      
      {/* 回到頂部按鈕 */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-[#1a365d] text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:bg-[#c4a747] transition-all duration-300 transform hover:scale-110"
          aria-label="回到頂部"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default SocialButtons;