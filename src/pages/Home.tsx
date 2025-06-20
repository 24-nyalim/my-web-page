
import { useEffect, useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section with Inline CSS */}
      <section 
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '80px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated Background Elements */}
        <div 
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '300px',
            height: '300px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite',
            transform: isVisible ? 'scale(1)' : 'scale(0)',
            transition: 'transform 1s ease-out'
          }}
        />
        
        <div 
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            width: '200px',
            height: '200px',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite reverse',
            transform: isVisible ? 'scale(1)' : 'scale(0)',
            transition: 'transform 1.5s ease-out'
          }}
        />

        <div 
          style={{
            textAlign: 'center',
            maxWidth: '800px',
            padding: '0 2rem',
            transform: isVisible ? 'translateY(0) opacity(1)' : 'translateY(30px) opacity(0)',
            transition: 'all 1s ease-out'
          }}
        >
          <h1 
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #2563eb, #7c3aed, #db2777)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.2'
            }}
          >
            Hello, I'm Nyalim Kuoth
          </h1>
          
          <p 
            style={{
              fontSize: '1.25rem',
              color: '#64748b',
              marginBottom: '2rem',
              lineHeight: '1.8'
            }}
          >
            I'm a passionate beginner front-end developer with an interest in gaining experience building beautiful, responsive web applications using React, TypeScript, and modern CSS frameworks.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              style={{
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '50px',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translateY(-2px)';
                target.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.4)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.3)';
              }}
            >
              View My Work
            </button>
            
            <button 
              style={{
                background: 'transparent',
                color: '#2563eb',
                padding: '1rem 2rem',
                borderRadius: '50px',
                border: '2px solid #2563eb',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = '#2563eb';
                target.style.color = 'white';
                target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = 'transparent';
                target.style.color = '#2563eb';
                target.style.transform = 'translateY(0)';
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What I'm Learning
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                description: "React, TypeScript, Tailwind CSS",
                icon: "💻"
              },
              {
                title: "Modern CSS", 
                description: "Flexbox, Grid, Responsive Design",
                icon: "🎨"
              },
              {
                title: "Development Tools",
                description: "Git, VS Code, Browser DevTools",
                icon: "⚙️"
              }
            ].map((skill, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
          }
        `
      }} />
    </div>
  );
};

export default Home;
