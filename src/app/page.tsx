export default function Home() {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
      {/* Organic morphing shape */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] bg-gradient-to-br from-gray-100 to-gray-200 animate-morph"
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-md sm:max-w-lg md:max-w-xl">
        {/* Main text */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4 sm:mb-6 opacity-0 animate-fade-in-up delay-100 animate-float">
          Good things
          <br />
          <span className="font-normal">are coming</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-black/50 mb-10 sm:mb-12 md:mb-14 opacity-0 animate-fade-in-up delay-200">
          Something new is in the works.
        </p>

        {/* Shimmer divider */}
        <div className="w-16 sm:w-20 md:w-24 h-px mx-auto mb-10 sm:mb-12 md:mb-14 animate-shimmer opacity-0 animate-fade-in-up delay-300" />

        {/* LinkedIn link */}
        <a
          href="https://www.linkedin.com/in/sam-t-morgan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 sm:gap-3 text-black/60 hover:text-black transition-colors duration-300 group opacity-0 animate-fade-in-up delay-400"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <span className="text-sm sm:text-base font-medium tracking-wide">
            Connect with me
          </span>
        </a>
      </div>
    </section>
  );
}
