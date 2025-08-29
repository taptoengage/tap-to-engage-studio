const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-[960px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 border-b border-sepia/20">
          {/* Wordmark */}
          <h1 className="font-serif text-xl tracking-tight text-foreground">
            Tap To Engage
          </h1>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('whats-next')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              What's Next
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>
          
          {/* Mobile menu indicator */}
          <div className="md:hidden">
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;