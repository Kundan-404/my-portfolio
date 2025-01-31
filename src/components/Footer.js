export default function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-primary text-white">
      
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Natesh Kumar</h3>
            <p className="text-sm">
              Computer Science student specializing in Cyber Security and Web Development.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:nateshkumar485@gmail.com" className="hover:text-neutral transition-colors">
                  nateshkumar485@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>+92 301 3226188</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">🌍</span>
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/nateshkumar485" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white hover:border-neutral transition-colors"
              >
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/nateshkumar485" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white hover:border-neutral transition-colors"
              >
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Natesh Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}