const Soundscapes = () => {
  return (
    <div className="min-h-screen bg-soundscapes-warm-stone py-12 px-6">
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
        <h1 className="font-soundscapes-serif font-light text-4xl md:text-5xl text-center text-soundscapes-graphite mb-4">
          Soundscapes
        </h1>
        
        {/* Tagline */}
        <p className="font-soundscapes-sans text-sm tracking-widest text-center text-soundscapes-forest-eucalypt mb-6 uppercase">
          Silence, amplified.
        </p>
        
        {/* Divider */}
        <div className="w-24 h-px bg-soundscapes-soft-brass mx-auto mb-12"></div>
        
        {/* Body text */}
        <div className="text-center">
          <p className="font-soundscapes-sans text-lg leading-relaxed text-soundscapes-graphite max-w-md mx-auto">
            Coming soon. A retreat shaped by sound, space, and design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Soundscapes;