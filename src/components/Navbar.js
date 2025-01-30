export default function Navbar() {
    return (
      <nav className="fixed w-full bg-primary  shadow-sm z-50">
        <div className="max-w-4xl border-solid solid; mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Natesh Kumar</h1>
            <div className="space-x-6 text-lg font-semibold">
              {/* <a href="#about" className="hover:text-tertiary">About</a>
              <a href="#experience" className="hover:text-tertiary">Experience</a>
              <a href="#projects" className="hover:text-tertiary">Projects</a>
              <a href="#contact" className="hover:text-tertiary">Contact</a> */}

                <a href="#about" className="nav-link">About</a>
                <a href="#experience" className="nav-link">Experience</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }