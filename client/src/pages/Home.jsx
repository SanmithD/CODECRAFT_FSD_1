import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 transition-transform duration-1000 ${
          isLoaded ? "scale-100" : "scale-0"
        }`}
      />
      <div
        className={`absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-30 transition-transform duration-1000 delay-200 ${
          isLoaded ? "scale-100" : "scale-0"
        }`}
      />

      <div
        className={`relative text-center z-10 max-w-3xl transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-primary drop-shadow-lg">
          Welcome to <span className="text-secondary">ShopVerse</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-base-content/80">
          Discover high-quality products, unbeatable deals, and a shopping
          experience you’ll love — all in one place.
        </p>

        <div
          className={`mt-8 flex flex-wrap justify-center gap-4 transition-opacity duration-1000 delay-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link to="/items" className="btn btn-primary btn-lg">
            Shop Now <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link to="/about" className="btn btn-secondary btn-lg">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
