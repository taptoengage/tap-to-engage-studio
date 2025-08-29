const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background">
      <div className="max-w-[960px] mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col space-y-6">
          {/* Links */}
          <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-foreground transition-colors"
            >
              About
            </button>
            <span className="text-sepia">·</span>
            <button 
              onClick={() => scrollToSection('work')}
              className="hover:text-foreground transition-colors"
            >
              Work
            </button>
            <span className="text-sepia">·</span>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <span className="text-sepia">·</span>
            <a 
              href="#privacy" 
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </a>
          </nav>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © Tap To Engage. Crafted in Australia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;