import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-lg">
        <h1 className="font-serif text-4xl font-light text-foreground mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-8">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-foreground text-background hover:bg-soil transition-colors duration-150 text-sm font-medium"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
