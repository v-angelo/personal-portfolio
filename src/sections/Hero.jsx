import AnimatedButton from "@/components/AnimatedButton";
import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const skills = [
  "React",
  "Angular",
  "Next.js",
  "MongoDB",
  "Express",
  "Node.js",
  "Git",
  "GitHub",
  "TailwindCSS",
  "Javascript",
  "Typescript",
];

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
        <div className="grid items-center gap-12 lg:grid-cols-3">
          {/* left - text content */}
          <div className="space-y-8 lg:col-span-2">
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
                building modern web applications with clean code, thoughtful
                design, and seamless user experiences.
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

            {/* social links */}
            <div className="animation-delay-400 flex animate-fade-in items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: FaGithub, href: "https://github.com/v-angelo" },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/v-angelo",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="rounded-full glass p-2 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                >
                  {<social.icon className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* right - profile */}
          <div className="animation-delay-300 relative animate-fade-in">
            {/* profile image */}
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 animate-pulse rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl" />

              <div className="relative rounded-3xl glass p-2 glow-border">
                <img
                  src=""
                  alt="ProfilePic"
                  className="aspect-4/5 w-full rounded-2xl object-cover"
                />

                {/* floating badge */}
                <div className="absolute -right-4 -bottom-4 animate-float rounded-xl glass px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* stats badge */}
                <div className="animation-delay-500 absolute -top-4 -left-4 animate-float rounded-xl glass px-4 py-3">
                  <div className="text-xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">Year Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skills section */}
        <div className="animation-delay-600 mt-20 animate-fade-in">
          <p className="mb-6 text-center text-sm text-muted-foreground">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 transition-colors hover:text-muted-foreground">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="animation-delay-800 absolute bottom-4 left-1/2 z-50 -translate-x-1/2 animate-fade-in">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
