import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-surface dark:bg-darkSurface">
      <div className="container">
        <h2 className="text-3xl font-bold text-primary dark:text-darkPrimary mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-surface dark:bg-darkSurface rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-secondary/20 dark:border-darkSecondary/20"
            >
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-textPrimary dark:text-darkTextPrimary">
                    {project.name}
                  </h3>
                  <p className="text-textSecondary text-justify dark:text-darkTextSecondary mt-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-accent/10 dark:bg-darkAccent/20 text-accent dark:text-darkAccent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.sourceCode} 
                    className="text-primary dark:text-darkPrimary hover:text-secondary dark:hover:text-darkSecondary transition-colors"
                  >
                    Source Code
                  </a>
                  <a 
                    href={project.livePreview} 
                    className="text-primary dark:text-darkPrimary hover:text-secondary dark:hover:text-darkSecondary transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}