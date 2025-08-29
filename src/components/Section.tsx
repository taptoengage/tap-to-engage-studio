interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'paper' | 'linen';
}

const Section = ({ children, className = '', id, background = 'paper' }: SectionProps) => {
  const bgClass = background === 'linen' ? 'bg-linen' : 'bg-paper';
  
  return (
    <section 
      id={id}
      className={`${bgClass} py-20 md:py-28 ${className}`}
    >
      <div className="max-w-[960px] mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;