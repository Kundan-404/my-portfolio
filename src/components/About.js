export default function About() {
  return (
    <section id="about" className="py-20 bg-surface dark:bg-darkSurface">
      <div className="container">
        <h2 className="text-3xl font-bold text-primary dark:text-darkPrimary mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-textPrimary dark:text-darkTextPrimary mb-6">
              Hello! I'm Natesh Kumar, a Computer Science student at the Institute of Business Administration, Karachi. 
              I specialize in Cyber Security and Web Development, with a passion for building secure and scalable web solutions.
            </p>
            <p className="text-lg text-textSecondary dark:text-darkTextSecondary mb-6">
              I enjoy working on projects that solve real-world problems, whether it's developing responsive websites or 
              creating secure systems. My goal is to deliver high-quality, user-friendly applications that make an impact.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-primary dark:text-darkPrimary mb-4">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['Java', 'JavaScript', 'MERN Stack', 'WordPress', 'MySQL', 'Cyber Security'].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent dark:bg-darkAccent rounded-full mr-2"></div>
                    <span className="text-textPrimary dark:text-darkTextPrimary">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative group">
              <img 
                src="/assets/profile.png"
                alt="Natesh Kumar"
                className="rounded-lg shadow-xl w-64 h-64 object-cover border-4 border-primary dark:border-darkPrimary transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 border-4 border-accent dark:border-darkAccent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}