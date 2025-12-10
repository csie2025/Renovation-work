import { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: '首頁', link: '/' },
    { name: '關於我們', link: '/about'},
    { name: '作品集', link: '/portfolio' },
    { name: '服務內容', link: '/services' },
    { name: '最新消息', link: '/news'},
    { name: '聯絡我們', link: '/contact'},
  ];

  return (
    <>
      {/* 頂部聯絡資訊 */}
      <div className="bg-primary text-white text-sm">
        <div className="container-custom px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:0973492589" className="flex items-center hover:text-secondary transition">
              <Phone size={16} className="mr-1" />
              09xxxxxxxx
            </a>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">服務時間：9:00-21:00</span>
          </div>
          <div className="flex space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-secondary transition">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-secondary transition">
              <Instagram size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-secondary transition">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* 主導航列 */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg py-0' : 'bg-white py-2'}`}>
        <div className="container-custom px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="text-primary">于室</span>
                <span className="text-secondary">設計</span>
              </div>
              <span className="text-xs bg-secondary text-white px-2 py-1 rounded-full">PRO</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200 group"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium text-gray-700 group-hover:text-primary">{item.name}</span>
                </a>
              ))}
              <a href="/contact" className="btn-primary ml-4">
                免費諮詢
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t animate-fadeInUp">
              <div className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </a>
                ))}
                <a href="/contact" className="btn-primary mt-4 text-center" onClick={() => setIsMenuOpen(false)}>
                  免費諮詢
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;