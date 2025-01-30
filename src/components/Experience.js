export default function Experience() {
    const experiences = [
      {
        company: "360 Digital Eyes",
        role: "WordPress Developer Intern",
        duration: "July 2023 – Aug 2023",
        points: [
          "Developed and maintained responsive WordPress websites with 100% uptime",
          "Optimized page load speeds and enhanced UI design"
        ]
      },
      {
        company: "AdjcnX (Remote)",
        role: "Web Developer Intern",
        duration: "June 2023 – July 2023",
        points: [
          "Improved responsive design and user experience",
          "Achieved 99% cross-browser compatibility"
        ]
      }
    ];
  
    return (
      <section className="py-16 bg-white" id="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-blue-600 pl-4">
                <h3 className="font-bold text-lg">{exp.company}</h3>
                <p className="text-gray-600">{exp.role} | {exp.duration}</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
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