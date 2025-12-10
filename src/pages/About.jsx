const About = () => {
    return (
      <div className="pt-8">
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">關於我們</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-6">
                  于室設計成立於 2010 年，擁有超過 15 年的室內設計與裝潢工程經驗。
                  我們致力於為客戶打造兼具美觀與實用性的居住空間。
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 my-12">
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4 text-primary">我們的使命</h3>
                    <p className="text-gray-600">
                      透過專業的設計與施工，為每一位客戶實現夢想中的居住環境，
                      讓每個空間都能展現獨特的個性與品味。
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4 text-primary">核心價值</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• 專業設計與施工品質</li>
                      <li>• 透明化的報價流程</li>
                      <li>• 完善的售後服務</li>
                      <li>• 準時完工的承諾</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default About;