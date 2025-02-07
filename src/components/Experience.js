import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-surface dark:bg-darkSurface">
      <div className="container">
        <h2 className="text-3xl font-bold text-primary dark:text-darkPrimary mb-12">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-4 border-secondary dark:border-darkSecondary">
              <div className="absolute w-6 h-6 bg-primary dark:bg-darkPrimary rounded-full -left-[14px] top-0"></div>
              <div className="pl-6">
                <h3 className="text-xl font-semibold text-textPrimary dark:text-darkTextPrimary">
                  {exp.role} @ {exp.company}
                </h3>
                <p className="text-textSecondary dark:text-darkTextSecondary mb-4">{exp.duration}</p>
                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <li 
                      key={i}
                      className="text-textPrimary dark:text-darkTextPrimary before:content-['▹'] before:text-accent dark:before:text-darkAccent before:absolute before:left-0 pl-6 relative"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}