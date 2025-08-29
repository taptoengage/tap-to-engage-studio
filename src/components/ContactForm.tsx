import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Stub API call - will be implemented later
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
        // You could add a toast notification here
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
      {/* Honeypot field for spam prevention */}
      <input 
        type="text" 
        name="website" 
        className="absolute -left-[9999px]" 
        tabIndex={-1} 
        autoComplete="off"
      />
      
      <div className="space-y-4">
        <div>
          <label 
            htmlFor="name" 
            className="block text-sm text-muted-foreground mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-sepia/30 text-foreground placeholder:text-muted-foreground focus:border-sepia focus:outline-none focus:ring-0 transition-colors"
          />
        </div>
        
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm text-muted-foreground mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-sepia/30 text-foreground placeholder:text-muted-foreground focus:border-sepia focus:outline-none focus:ring-0 transition-colors"
          />
        </div>
        
        <div>
          <label 
            htmlFor="message" 
            className="block text-sm text-muted-foreground mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-sepia/30 text-foreground placeholder:text-muted-foreground focus:border-sepia focus:outline-none focus:ring-0 resize-none transition-colors"
          />
        </div>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-8 py-3 bg-foreground text-background hover:bg-soil transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
      >
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};

export default ContactForm;