const News = () => {
    const newsItems = [
      { date: '2024.12.10', title: '最新完工案例分享', desc: '現代簡約風格住宅設計案例' },
      { date: '2024.11.25', title: '裝潢材料價格趨勢', desc: '2024年第四季建材價格分析' },
      { date: '2024.10.15', title: '舊屋翻新注意事項', desc: '老屋改造的關鍵要點分享' },
      { date: '2024.09.30', title: '辦公室設計趨勢', desc: '現代化辦公室設計新趨勢' },
      { date: '2024.08.20', title: '系統櫃選擇指南', desc: '如何選擇適合的系統櫃' },
      { date: '2024.07.10', title: '色彩心理學在設計中的應用', desc: '色彩如何影響空間感受' },
    ];
  
    return (
      <div className="pt-8">
        <section className="section-padding">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">最新消息</h1>
            
            <div className="max-w-4xl mx-auto">
              {newsItems.map((news, index) => (
                <div key={index} className="border-b border-gray-200 py-8 hover:bg-gray-50 transition-colors px-4 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="text-sm text-gray-500 mb-2 md:mb-0 md:w-32">{news.date}</div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                      <p className="text-gray-600">{news.desc}</p>
                    </div>
                    <a href="#" className="text-primary font-medium mt-2 md:mt-0">閱讀更多 →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default News;