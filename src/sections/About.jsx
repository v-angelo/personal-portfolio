import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

function About() {
  return (
    <section id="about" className="relative overflow-hidden py-32">
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-sm font-medium tracking-wider text-secondary-foreground uppercase">
                About Me
              </span>
            </div>

            {/* heading */}
            <h2 className="animation-delay-100 animate-fade-in text-4xl leading-tight font-bold text-secondary-foreground md:text-5xl">
              Building the future,
              <span className="font-serif font-normal text-white italic">
                {" "}
                one component at a time.
              </span>
            </h2>

            {/* content */}
            <div className="animation-delay-200 animate-fade-in space-y-4 text-muted-foreground">
              <p>
                I'm a passionate web developer constantly learning new
                technologies to bring out the best user experiences. My journey
                started with a curiosity for how things work on the web, and it
                has evolved into a deep expertise in modern frontend
                technologies.
              </p>
              <p>
                I specialize in React, Angular and Next.js, building everything
                from sleek landing pages to complex web applications. My
                approach combines technical excellence with a keen eye for
                design and user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                and try my hand at learning different skills.
              </p>
            </div>

            <div className="animation-delay-300 animate-fade-in rounded-2xl glass p-6 glow-border">
              <p className="text-lg font-medium text-foreground italic">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* right column */}
          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="animate-fade-in rounded-2xl glass p-6"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 hover:bg-primary/20">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
