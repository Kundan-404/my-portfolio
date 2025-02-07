export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-darkPrimary text-white dark:text-darkTextPrimary">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Natesh Kumar</h3>
            <p className="text-sm opacity-90">
              Creating digital solutions with security and precision
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:opacity-80 transition-opacity">About</a></li>
              <li><a href="#experience" className="hover:opacity-80 transition-opacity">Experience</a></li>
              <li><a href="#projects" className="hover:opacity-80 transition-opacity">Projects</a></li>
              <li><a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://linkedin.com/in/nateshkumar485" className="hover:opacity-80 transition-opacity">LinkedIn</a></li>
              <li><a href="https://github.com/nateshkumar485" className="hover:opacity-80 transition-opacity">GitHub</a></li>
              <li><a href="mailto:nateshkumar485@gmail.com" className="hover:opacity-80 transition-opacity">Email</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="hover:opacity-80 transition-opacity">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:opacity-80 transition-opacity">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Natesh Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}