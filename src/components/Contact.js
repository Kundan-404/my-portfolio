export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
        
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm currently open to new opportunities, collaborations, and interesting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
          {/* </div> */}
          
          {/* <div> */}
            <form 
            action="https://formspree.io/f/xovjwqdq" 
            method="POST"
            className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-primary text-white hover:bg-tertiary rounded-md "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        {/* </div> */}
      </div>
    </section>
  );
}
