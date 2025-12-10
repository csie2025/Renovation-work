import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    '快速連結': [
      { name: '首頁', link: '/' },
      { name: '關於我們', link: '/about' },
      { name: '作品集', link: '/portfolio' },
      { name: '服務流程', link: '/services' },
      { name: '常見問題', link: '/faq' },
      { name: '聯絡我們', link: '/contact' },
    ],
    '服務項目': [
      { name: '住宅設計', link: '#' },
      { name: '辦公室設計', link: '#' },
      { name: '商業空間', link: '#' },
      { name: '舊屋翻新', link: '#' },
      { name: '系統櫃設計', link: '#' },
      { name: '裝潢工程', link: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* 公司資訊 */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-white">于室</span>
              <span className="text-[#c4a747]">設計</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              專業室內設計與裝潢工程，擁有多年設計經驗，
              致力於為客戶打造舒適、實用且具美感的居住空間。
            </p>
            <div className="flex space-x-4 pt-2">
              {[Facebook, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#c4a747] transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800">快速連結</h3>
            <ul className="space-y-3">
              {footerLinks['快速連結'].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.link}
                    className="text-gray-400 hover:text-[#c4a747] hover:pl-2 transition-all duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#c4a747] rounded-full mr-3 opacity-0 group-hover:opacity-100"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 服務項目 */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800">服務項目</h3>
            <ul className="space-y-3">
              {footerLinks['服務項目'].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.link}
                    className="text-gray-400 hover:text-[#c4a747] hover:pl-2 transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800">聯絡我們</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-[#c4a747] mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">新北市三重區</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-[#c4a747]" size={18} />
                <a href="tel:0973492589" className="text-gray-400 hover:text-[#c4a747]">
                  09xxxxxxxx
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-[#c4a747]" size={18} />
                <a href="mailto:openhouse899@gmail.com" className="text-gray-400 hover:text-[#c4a747]">
                    xx@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="text-[#c4a747]" size={18} />
                <span className="text-gray-400">09:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} 于室室內設計工程有限公司. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-[#c4a747]">隱私權政策</a>
              <a href="#" className="hover:text-[#c4a747]">服務條款</a>
              <a href="#" className="hover:text-[#c4a747]">網站地圖</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;