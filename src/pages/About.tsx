

const About = () => {
  return (
    <div className="min-h-screen bg-blue-100 pt-20">
      <div className="container mx-auto px-8 py-16">
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/fe7a7467-2721-41c8-a02b-70f23af37adc.png" 
            alt="Nyalim Kuoth"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
          />
          <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            Hi! I'm Nyalim Kuoth, a passionate beginner front-end developer eager to dive into the world of web development.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            I'm currently learning React, TypeScript, and modern CSS frameworks to build beautiful and responsive web applications.
            Every day is a new opportunity to learn something exciting in this ever-evolving field.
          </p>
          <p className="text-lg text-gray-600">
            My goal is to create user-friendly interfaces that provide excellent user experiences while continuously improving my skills and staying up-to-date with the latest technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

