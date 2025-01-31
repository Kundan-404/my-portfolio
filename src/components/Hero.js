export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#F34F3255_1px,transparent_1px),linear-gradient(to_bottom,#F34F3255_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#DB9F7555_1px,transparent_1px),linear-gradient(to_bottom,#DB9F7555_1px,transparent_1px)]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <p className="text-lg text-neutral dark:text-accent/80 mb-4">Hi, my name is</p>
        <h1 className="text-5xl font-bold mb-6 dark:text-accent">Natesh Kumar</h1>
        <h2 className="text-3xl text-neutral dark:text-accent/80 mb-8">
          Computer Science Student & Web Developer
        </h2>
        <p className="text-lg text-neutral dark:text-accent/80 max-w-2xl mb-12">
          Specializing in Cyber Security and Web Development at IBA Karachi.
        </p>
        <a 
          href="/assets/Natesh Kumar_resume.pdf" 
          download
          className="border-2 border-neutral font-semibold text-neutral hover:bg-neutral hover:text-white px-8 py-3 rounded-md dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-neutral"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}