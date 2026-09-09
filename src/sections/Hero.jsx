import AnimatedButton from "@/components/AnimatedButton";
import { Button } from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";

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

        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
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
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* left - text content */}
          <div className="space-y-8">
            {/* banner text */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-primary">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                Full Stack Developer • MEARN Specialist
              </span>
            </div>

            {/* hero text*/}
            <div className="space-y-4">
              <h1 className="animation-delay-100 animate-fade-in text-5xl leading-tight font-bold md:text-6xl lg:text-7xl">
                Transforming <br />
                <span className="text-primary glow-text">ideas</span> into
                powerful
                <br />
                <span className="font-serif font-normal text-white italic">
                  web apps.
                </span>
              </h1>

              <p className="animation-delay-200 max-w-lg animate-fade-in text-lg text-muted-foreground">
                Hi, I'm Visal Angelo — a Full-Stack Developer focused on
                building modern web applications that look great, perform fast,
                and scale without getting in the way.
              </p>
            </div>

            {/* ctas */}
            <div className="animation-delay-300 flex animate-fade-in flex-wrap gap-4">
              <Button size="lg">
                Contact Me <ArrowRight className="h-5 w-5" />
              </Button>

              <AnimatedButton>
                <Download className="h-5 w-5" />
                Download CV
              </AnimatedButton>
            </div>
          </div>

          {/* right - profile image */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
