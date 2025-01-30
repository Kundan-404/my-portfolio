export default function Navbar() {
    return (
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Natesh Kumar</h1>
            <div className="space-x-6">
              <a href="#about" className="hover:text-secondary">About</a>
              <a href="#experience" className="hover:text-secondary">Experience</a>
              <a href="#projects" className="hover:text-secondary">Projects</a>
              <a href="#contact" className="hover:text-secondary">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }