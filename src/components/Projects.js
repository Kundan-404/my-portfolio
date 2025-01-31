import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 dark:text-accent">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-secondary p-6 rounded-lg shadow-md border border-neutral/20 dark:border-accent/20">
              <h3 className="text-xl font-semibold mb-4 dark:text-accent">{project.name}</h3>
              <p className="text-neutral dark:text-accent/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, i) => (
                  <span key={i} className="bg-accent text-neutral px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a 
                  href={project.sourceCode} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-tertiary dark:text-accent dark:hover:text-tertiary"
                >
                  Source Code
                </a>
                <a 
                  href={project.livePreview} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-tertiary dark:text-accent dark:hover:text-tertiary"
                >
                  Live Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}