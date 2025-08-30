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
        <div className="space-y-12">
          {/* Opening line */}
          <div className="text-center">
            <p className="font-soundscapes-sans text-xl leading-relaxed text-soundscapes-graphite">
              Step away from the noise.
            </p>
          </div>
          
          {/* Main description */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-soundscapes-sans text-lg leading-relaxed text-soundscapes-graphite mb-16">
              A place where time slows, and the details begin to matter again.
            </p>
          </div>
          
          {/* Feature sections */}
          <div className="space-y-12 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="font-soundscapes-sans text-base leading-relaxed text-soundscapes-graphite mb-8">
                Surrounded by quiet architecture and the rhythm of nature, you find space to breathe, to notice, to disconnect.
              </p>
            </div>
            
            <div className="text-center">
              <p className="font-soundscapes-sans text-base leading-relaxed text-soundscapes-graphite mb-8">
                It's luxury, but stripped of excess — nothing more than what belongs.
              </p>
            </div>
            
            <div className="text-center">
              <p className="font-soundscapes-sans text-base leading-relaxed text-soundscapes-graphite mb-4">
                And when the moment feels right, press play.
              </p>
              <p className="font-soundscapes-sans text-base leading-relaxed text-soundscapes-graphite">
                Get lost in your own soundtrack, like you've never heard it before.
              </p>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="text-center max-w-md mx-auto pt-8">
            <p className="font-soundscapes-sans text-base leading-relaxed text-soundscapes-graphite">
              Want the next update in your inbox?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soundscapes;