const Services = () => {
    const services = [
      { title: '室內設計規劃', desc: '完整的空間規劃與設計', icon: '📐' },
      { title: '裝潢工程施工', desc: '專業施工團隊，品質保證', icon: '🔨' },
      { title: '舊屋翻新改造', desc: '老屋改造，賦予新生命', icon: '🏚️' },
      { title: '系統櫃設計', desc: '客製化系統櫃設計', icon: '🗄️' },
      { title: '商業空間設計', desc: '辦公室、店面設計', icon: '🏢' },
      { title: '家具配置建議', desc: '專業家具配置規劃', icon: '🛋️' },
    ];
  
    return (
      <div className="pt-8">
        <section className="section-padding">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">服務內容</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">服務流程</h2>
              <div className="space-y-6">
                {[
                  '初步諮詢與需求溝通',
                  '現場丈量與評估',
                  '設計方案提案',
                  '預算報價確認',
                  '工程施工',
                  '完工驗收',
                  '售後服務',
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-medium">{step}</h3>
                      <p className="text-gray-600 text-sm mt-1">詳細說明流程內容...</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Services;