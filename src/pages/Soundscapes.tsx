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
              A place for listening.
            </p>
          </div>
          
          {/* Main description */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-soundscapes-sans text-lg leading-relaxed text-soundscapes-graphite mb-16">
              Soundscapes is a slow, thoughtful retreat shaped around a reference-grade audio system. Architecture, landscape and light set the stage; the music does the rest.
            </p>
          </div>
          
          {/* Feature sections */}
          <div className="space-y-12 max-w-2xl mx-auto">
            <div>
              <h3 className="font-soundscapes-serif font-light text-xl text-soundscapes-graphite mb-4">
                Less noise, more presence.
              </h3>
              <p className="font-soundscapes-sans text-base leading-relaxed text-soundscapes-graphite">
                Rooms are tuned for calm—materials chosen for how they feel and how they sound. There's space to sit, to notice, to hear detail you've never heard before.
              </p>
            </div>
            
            <div>
              <h3 className="font-soundscapes-serif font-light text-xl text-soundscapes-graphite mb-4">
                Hospitality, quietly done.
              </h3>
              <p className="font-soundscapes-sans text-base leading-relaxed text-soundscapes-graphite">
                Simple comforts, unhurried service, and a cellar of records to explore. Technology is there to help, then it gets out of the way.
              </p>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="text-center max-w-md mx-auto pt-8">
            <p className="font-soundscapes-sans text-base leading-relaxed text-soundscapes-graphite">
              If you're still curious, leave your email. We'll share the next chapter when it's ready.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soundscapes;