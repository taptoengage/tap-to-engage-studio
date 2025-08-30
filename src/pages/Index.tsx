import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import WorkItem from '../components/WorkItem';
import ContactForm from '../components/ContactForm';

const Index = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans text-base md:text-base">
      <Header />
      
      {/* Hero Section */}
      <Section className="pt-32 md:pt-40">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground mb-6 leading-tight tracking-tight">
            Boutique apps. Built with intention.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Tap To Engage designs lean, helpful software with personality and purpose.
          </p>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-lg leading-relaxed text-foreground">
              We're a small studio that moves quickly and thinks carefully. We cut features, keep the useful ones, and craft software that feels obvious in the hand.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <dt className="text-sm text-muted-foreground">Focus</dt>
              <dd className="text-foreground">Web apps & product systems</dd>
            </div>
            <div className="space-y-2">
              <dt className="text-sm text-muted-foreground">Approach</dt>
              <dd className="text-foreground">Prototype → Prove → Polish</dd>
            </div>
            <div className="space-y-2">
              <dt className="text-sm text-muted-foreground">Ethos</dt>
              <dd className="text-foreground">Honest, practical, humane</dd>
            </div>
          </div>
        </div>
      </Section>

      {/* Work Section */}
      <Section id="work">
        <div className="mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            Current work
          </h2>
        </div>
        
        <div>
          <WorkItem
            title="Optimised Trainer"
            description="A client-management platform for personal trainers, built around smart scheduling and clear credit redemption."
            linkText="See product"
            href="https://optimisedtrainer.com"
            openInNewTab
          />
          <WorkItem
            title="The Commissioner"
            description="Meta-governance tools for fantasy leagues: simple fairness, quick decisions, less admin drama."
            linkText="See concept"
          />
          <WorkItem
            title="Pocket Concierge"
            description="A digital concierge for short-stay hosts—local offers, guest guides, and easy curation."
            linkText="See pilot"
            isLast
          />
        </div>
      </Section>

      {/* What's Next Section */}
      <Section id="whats-next" background="linen">
        <div className="max-w-2xl">
          <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
            What's next: Soundscapes
          </h3>
          <p className="text-lg leading-relaxed text-foreground mb-8">
            A slow, thoughtful retreat for listening. Architecture, landscape, and a serious audio system—held together by quiet design.
          </p>
          <a 
            href="/soundscapes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-foreground text-background hover:bg-soil transition-colors duration-150 text-sm font-medium"
          >
            Curious?
          </a>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
            Contact
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-12">
            Say hello, ask a question, or propose a build. Short notes welcome.
          </p>
          <ContactForm />
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;