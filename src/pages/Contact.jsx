const Contact = () => {
    return (
      <div className="pt-8">
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">聯絡我們</h1>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* 聯絡資訊 */}
                <div>
                  <h2 className="text-2xl font-bold mb-8">聯絡資訊</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        📍
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">地址</h3>
                        <p className="text-gray-600">新北市三重區</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        📞
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">電話</h3>
                        <a href="tel:0973492589" className="text-primary hover:underline">
                          09xxxxxxxx
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        ✉️
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <a href="mailto:openhouse899@gmail.com" className="text-primary hover:underline">
                          xx@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        ⏰
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">服務時間</h3>
                        <p className="text-gray-600">周一至周六 9:00 - 21:00</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 聯絡表單 */}
                <div>
                  <h2 className="text-2xl font-bold mb-8">線上諮詢</h2>
                  
                  <form className="space-y-6">
                    <div>
                      <label className="block text-gray-700 mb-2">姓名 *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="請輸入您的姓名"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">電話 *</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="請輸入您的電話"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="請輸入您的 Email"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">諮詢內容 *</label>
                      <textarea 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent h-32"
                        placeholder="請簡述您的需求..."
                        required
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn-primary w-full py-4 text-lg">
                      送出諮詢
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Contact;