export default function Hero() {
    return (
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#F34F3255_1px,transparent_1px),linear-gradient(to_bottom,#F34F3255_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-600 mb-4">Hi, my name is</p>
          <h1 className="text-5xl font-bold mb-6">Natesh Kumar</h1>
          <h2 className="text-3xl text-gray-600 mb-8">
            Computer Science Student & Web Developer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mb-12">
            Specializing in Cyber Security and Web Development. Currently pursuing BSc at IBA Karachi.
          </p>
          <a 
            href="/assets/Natesh Kumar_resume.pdf" 
            download
            className="bg-accent text-neutral hover:bg-tertiary px-8 py-3 rounded-md "
          >
            Download Resume
          </a>
        </div>
      </section>
    );
  }