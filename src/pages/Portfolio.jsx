const Portfolio = () => {
    const projects = [
      { id: 1, title: '現代簡約宅', category: '住宅設計', area: '45坪', style: '現代風', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop' },
      { id: 2, title: '商業辦公室', category: '商業空間', area: '80坪', style: '工業風', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop' },
      { id: 3, title: '北歐風住宅', category: '住宅設計', area: '35坪', style: '北歐風', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&auto=format&fit=crop' },
      { id: 4, title: '親子宅設計', category: '住宅設計', area: '60坪', style: '日式無印', image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&auto=format&fit=crop' },
      { id: 5, title: '餐廳設計', category: '商業空間', area: '50坪', style: '混搭風', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&auto=format&fit=crop' },
      { id: 6, title: '小坪數改造', category: '住宅設計', area: '20坪', style: '簡約風', image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&auto=format&fit=crop' },
    ];
  
    return (
      <div className="pt-8">
        <section className="section-padding">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">作品集</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
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
                          <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm">
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
      </div>
    );
  };
  
  export default Portfolio;