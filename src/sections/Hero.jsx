function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Image"
          className="h-full w-full object-cover opacity-40"
        />

        <div className="from-background/20 via-background/80 to-background absolute inset-0 bg-linear-to-b" />
      </div>

      {/* dots */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div>
        <div>
          {/* left - text content */}
          <div></div>

          {/* right - profile image */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
