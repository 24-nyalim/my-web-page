
import { useState, useEffect } from 'react';

const About = () => {
  const [progressVisible, setProgressVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setProgressVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React & Next.js', level: 90 },
    { name: 'Node.js & Express', level: 85 },
    { name: 'Python & Django', level: 80 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Database Design', level: 82 }
  ];

  return (
    <>
      {/* Embedded CSS */}
      <style>{`
        .about-container {
          min-height: 100vh;
          padding-top: 100px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }
        
        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }
        
        .hero-section {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .profile-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          margin: 0 auto 2rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: white;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }
        
        .profile-image:hover {
          transform: scale(1.05) rotate(5deg);
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
        }
        
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        
        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .content-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .content-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }
        
        .card-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .card-text {
          color: #4a5568;
          line-height: 1.7;
          font-size: 1.1rem;
        }
        
        .skills-section {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .skills-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .skill-item {
          margin-bottom: 1.5rem;
        }
        
        .skill-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #2d3748;
        }
        
        .progress-bar {
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 4px;
          transition: width 1.5s ease-out;
        }
        
        .background-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0.1;
        }
        
        .shape-1 {
          position: absolute;
          top: 10%;
          left: 5%;
          width: 100px;
          height: 100px;
          background: white;
          border-radius: 50%;
          animation: float1 8s ease-in-out infinite;
        }
        
        .shape-2 {
          position: absolute;
          top: 60%;
          right: 10%;
          width: 150px;
          height: 150px;
          background: white;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          animation: float2 10s ease-in-out infinite;
        }
        
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(90deg); }
        }
      `}</style>

      <div className="about-container">
        <div className="background-shapes">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
        </div>
        
        <div className="content-wrapper">
          <div className="hero-section">
            <div className="profile-image">👨‍💻</div>
            <h1 className="hero-title">About Me</h1>
            <p className="hero-subtitle">Crafting Digital Excellence Since 2019</p>
          </div>

          <div className="content-grid">
            <div className="content-card">
              <h2 className="card-title">My Journey</h2>
              <p className="card-text">
                With over 5 years of experience in web development, I've had the privilege 
                of working with startups and Fortune 500 companies alike. My journey began 
                with a computer science degree, but my real education came from building 
                real-world applications that solve actual problems.
              </p>
              <br />
              <p className="card-text">
                I believe in the power of clean code, user-centered design, and continuous 
                learning. Every project is an opportunity to push boundaries and create 
                something meaningful.
              </p>
            </div>

            <div className="content-card">
              <h2 className="card-title">My Philosophy</h2>
              <p className="card-text">
                "Great software is not just about functionality—it's about creating 
                experiences that delight users and solve real problems." This philosophy 
                drives every line of code I write and every design decision I make.
              </p>
              <br />
              <p className="card-text">
                I'm passionate about staying ahead of technology trends while never 
                forgetting the fundamentals. Whether it's optimizing performance or 
                crafting intuitive user interfaces, I strive for excellence in every detail.
              </p>
            </div>
          </div>

          <div className="skills-section">
            <h2 className="skills-title">Technical Skills</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-label">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{
                        width: progressVisible ? `${skill.level}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
