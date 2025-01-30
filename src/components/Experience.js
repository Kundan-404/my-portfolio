import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Where I’ve Worked</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-neutral">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-gray-600 mb-2">{exp.role} • {exp.duration}</p>
              <ul className="list-disc space-y-2 pl-6">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-gray-700">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}