export default function Projects() {
    const projects = [
      {
        title: "Bone Bank Module",
        description: "Cloud-based MERN platform for bone graft management",
        tech: ["MERN Stack", "Cloud", "Encryption"]
      },
      {
        title: "Quiz Management System",
        description: "MERN stack platform with automated grading system",
        tech: ["React", "Node.js", "MongoDB"]
      }
    ];
  
    return (
      <section className="py-16" id="projects">
        <div className="container">
          <h2 className="section-title">Key Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }