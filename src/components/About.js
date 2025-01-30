export default function About() {
    return (
      <section className="py-16" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="mb-4">
            Hello! I'm Natesh, a Computer Science student at the Institute of Business Administration, Karachi, 
            specializing in Cyber Security and Web Development. I enjoy building solutions that solve real-world problems.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div>
              <h3 className="font-bold mb-2">Education</h3>
              <p className="text-gray-600">
                BSc Computer Science<br/>
                Institute of Business Administration, Karachi<br/>
                2020 - 2024 | Cyber Security Major
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'JavaScript', 'MERN Stack', 'WordPress', 'MySQL'].map(skill => (
                  <span key={skill} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }