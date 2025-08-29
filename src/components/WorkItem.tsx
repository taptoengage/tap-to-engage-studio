interface WorkItemProps {
  title: string;
  description: string;
  linkText: string;
  href?: string;
  isLast?: boolean;
  openInNewTab?: boolean;
}

const WorkItem = ({ title, description, linkText, href = "#contact", isLast = false, openInNewTab = false }: WorkItemProps) => {
  return (
    <div className={`py-8 ${!isLast ? 'border-b border-sepia/20' : ''}`}>
      <div className="space-y-3">
        <h3 className="font-serif text-xl text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-prose">
          {description}
        </p>
        <a 
          href={href}
          className="inline-block text-sm text-accent hover:text-foreground transition-colors duration-150"
          {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default WorkItem;