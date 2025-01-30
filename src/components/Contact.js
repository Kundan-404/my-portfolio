export default function Contact() {
    return (
      <section className="py-16 bg-white" id="contact">
        <div className="container text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="mb-8">
            Currently open to internship opportunities and interesting projects.
            Let's discuss how I can contribute to your team!
          </p>
          <a 
            href="mailto:nateshkumar485@gmail.com" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Say Hello
          </a>
        </div>
      </section>
    );
  }