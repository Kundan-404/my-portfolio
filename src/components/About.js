export default function About() {
  return (
    <section id="about" className="py-20 bg-surface dark:bg-darkSurface">
      <div className="container">
        <h2 className="text-3xl font-bold text-primary dark:text-darkPrimary mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-textPrimary dark:text-darkTextPrimary text-justify mb-6">
              Hello! I'm Kundan Kumar, a Software Engineer at 1LINK (Pvt) Limited and a Computing Science student at IBA Karachi. I specialize in full-stack development, leveraging technologies like Java, ASP.NET Core, AngularJS, and the MERN stack to create robust and scalable applications.
            </p>
            <p className="text-lg text-textSecondary dark:text-darkTextSecondary text-justify mb-6">
                I am passionate about solving real-world problems, whether it's developing secure web applications or crafting dynamic, user-friendly interfaces. My goal is to deliver high-quality, innovative solutions that make a lasting impact.
            </p>
            {/* <div className="mt-8">
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
            </div> */}
          </div>
          {/* <div className="flex justify-center items-top">
            <div className="relative group">
              <img 
                src="/assets/profile.png"
                alt="Natesh Kumar"
                className="rounded-lg shadow-xl w-64 h-64 object-cover border-4 border-primary dark:border-darkPrimary transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 border-4 border-accent dark:border-darkAccent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div> */}

          <div className="flex justify-center items-top p-4">
            <div className="relative group w-64 h-64"> {/* Ensures container matches image size */}
              <img 
                src="/assets/profile.png"
                alt="Natesh Kumar"
                className="rounded-lg shadow-xl w-full h-full object-cover border-4 border-primary dark:border-darkPrimary transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 w-full h-full border-4 border-accent dark:border-darkAccent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>


        </div>
        <div className="mt-8">
              <h3 className="text-xl font-semibold text-primary dark:text-darkPrimary mb-4">
                Technical Skills
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {['Java', 'JavaScript', 'MERN Stack', 'WordPress', 'MySQL', 'Cyber Security'].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent dark:bg-darkAccent rounded-full mr-2"></div>
                    <span className="text-textPrimary dark:text-darkTextPrimary">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
      </div>
    </section>
  );
}
