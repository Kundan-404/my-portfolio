export default function Hero() {
    return (
      <section className="min-h-screen flex items-center pt-20">
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
            className="bg-secondary text-white px-8 py-3 rounded-md hover:bg-blue-700"
          >
            Download Resume
          </a>
        </div>
      </section>
    );
  }