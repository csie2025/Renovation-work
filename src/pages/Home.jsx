import { ChevronRight } from 'lucide-react';

const Home = () => {
  // 精選作品
  const featuredProjects = [
    { id: 1, title: '現代簡約宅', category: '住宅設計', area: '45坪', style: '現代風', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop' },
    { id: 2, title: '商業辦公室', category: '商業空間', area: '80坪', style: '工業風', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop' },
    { id: 3, title: '北歐風住宅', category: '住宅設計', area: '35坪', style: '北歐風', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&auto=format&fit=crop' },
    { id: 4, title: '親子宅設計', category: '住宅設計', area: '60坪', style: '日式無印', image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&auto=format&fit=crop' },
  ];

  // 服務特色
  const features = [
    { title: '專業設計', desc: '國際認證設計師團隊', icon: '🎨'},
    { title: '透明報價', desc: '詳細報價單，無隱藏費用', icon: '💰' },
    { title: '品質保證', desc: '使用優質建材，完善保固', icon: '✅' },
    { title: '準時完工', desc: '專案管理，確保準時交付', icon: '⏰' },
  ];

  // 服務流程
  const serviceSteps = [
    { step: '01', title: '需求諮詢', desc: '免費到府丈量評估' },
    { step: '02', title: '方案設計', desc: '3D立體設計圖呈現' },
    { step: '03', title: '預算報價', desc: '透明化報價流程' },
    { step: '04', title: '工程施作', desc: '專業施工團隊進場' },
    { step: '05', title: '完工驗收', desc: '雙確認驗收程序' },
    { step: '06', title: '售後服務', desc: '完善保固服務' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            打造您的
            <span className="text-yellow-600 ml-2">夢想空間</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-600">
            專業室內設計與裝潢工程，從設計到施工一站式服務，
            為您實現理想中的生活環境
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/portfolio" className="bg-blue-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition inline-flex items-center justify-center">
              查看作品集 <ChevronRight className="ml-2" size={20} />
            </a>
            <a href="/contact" className="border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-lg font-medium hover:bg-yellow-600 hover:text-white transition inline-flex items-center justify-center">
              免費諮詢
            </a>
          </div>
        </div>
      </section>

      {/* 公司特色 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">專業值得信賴</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">超過15年專業經驗，為您提供最優質的室內設計服務</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 精選作品 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">精選作品</h2>
              <p className="text-gray-600 mt-2">我們的成功案例展示</p>
            </div>
            <a href="/portfolio" className="text-blue-900 hover:text-yellow-600 font-medium flex items-center">
              查看更多作品 <ChevronRight className="ml-1" size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">
                          {project.category}
                        </span>
                        <span className="text-sm">{project.area}</span>
                      </div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <div className="flex justify-between text-gray-600">
                  <span>{project.category}</span>
                  <span>{project.style}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服務流程 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">六步驟完成夢想家</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">透明化的服務流程，讓您輕鬆完成裝潢夢想</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="text-4xl font-bold text-yellow-600 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">準備好開始您的設計之旅了嗎？</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            立即預約免費諮詢，我們的設計師將為您提供專業建議
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0973492589" className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-yellow-700 transition inline-flex items-center justify-center text-lg">
              📞 立即來電：09xxxxxxxx
            </a>
            <a href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition inline-flex items-center justify-center text-lg">
              線上預約諮詢
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;