const Soundscapes = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-[820px] mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src="/assets/soundscapes/soundscapes-logo.png" 
            alt="Soundscapes logo"
            className="h-24 w-auto"
          />
        </div>
        
        {/* Headline */}
        <h1 className="font-serif text-4xl md:text-5xl text-center text-foreground mb-4">
          Soundscapes
        </h1>
        
        {/* Tagline */}
        <p className="text-sm tracking-widest text-center text-muted-foreground mb-6 uppercase font-sans">
          Silence, amplified.
        </p>
        
        {/* Divider */}
        <div className="w-24 h-px bg-foreground/20 mx-auto mb-12"></div>
        
        {/* Body text */}
        <div className="text-center">
          <p className="text-lg leading-relaxed text-foreground max-w-md mx-auto">
            Coming soon. A retreat shaped by sound, space, and design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Soundscapes;