export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="container">
        <p className="text-lg text-textSecondary dark:text-darkTextSecondary mb-4">Hi, my name is</p>
        <h1 className="text-5xl font-bold text-primary dark:text-darkPrimary mb-6">Natesh Kumar</h1>
        <h2 className="text-3xl text-textSecondary dark:text-darkTextSecondary mb-8">
          Computer Science Student & Web Developer
        </h2>
        <p className="text-lg text-textSecondary dark:text-darkTextSecondary max-w-2xl mb-12">
          Specializing in Cyber Security and Web Development at IBA Karachi.
        </p>
        <a 
          href="/assets/Natesh Kumar_resume.pdf" 
          download
          className="bg-primary text-white px-8 py-3 rounded-md hover:bg-secondary dark:bg-darkPrimary dark:hover:bg-darkSecondary"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}