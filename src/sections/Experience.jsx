const eduExp = [
  {
    period: "2026-present",
    role: "Freelance Web Developer",
    institution: "",
    description:
      "Working on personal and freelance projects, improving my skills and gaining more experience.",
    technologies: ["MERN", "MEAN", "NextJS", "TailwindCSS"],
    current: true,
  },
  {
    period: "2025-2026",
    role: "MEARN Stack Development Intern",
    institution: "Luminar Technolab",
    description:
      "Got into web development field, created a bunch of frontend & full stack web apps using MEARN Stack technologies and RESTful APIs",
    technologies: [
      "React",
      "Angular",
      "NextJS",
      "MongoDB",
      "Express",
      "NodeJS",
    ],
    current: false,
  },
  {
    period: "2012-2016",
    role: "B.Tech Student",
    institution: "NIT Calicut",
    description: "Electronics & Communication Engineering",
    technologies: [],
    current: false,
  },
];
function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-m-5 overflow-hidden py-16"
    >
      <div className="absolute top-1/2 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-highlight/5 blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* section header */}
        <div className="mb-16 max-w-3xl">
          <span className="animate-fade-in text-sm font-medium tracking-wider text-secondary-foreground uppercase">
            Career Journey
          </span>
          <h2 className="animation-delay-100 mt-4 mb-6 animate-fade-in text-4xl font-bold text-secondary-foreground md:text-5xl">
            Experience and{" "}
            <span className="font-serif font-normal text-foreground italic">
              {" "}
              Education.
            </span>
          </h2>

          <p className="animation-delay-200 animate-fade-in text-muted-foreground">
            A timeline of my professional growth.
          </p>
        </div>

        {/* timeline */}
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent shadow-[0_0_25px_rgba(32,178,166,0.8)] timeline-glow md:left-1/2 md:-translate-x-1/2" />

          {/* experience items */}
          <div className="space-y-12">
            {eduExp.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid animate-fade-in gap-8 md:grid-cols-2"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* timeline dot */}
                <div className="absolute top-0 left-0 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2">
                  {exp.current && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75" />
                  )}
                </div>

                {/* content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`rounded-2xl glass border border-primary/30 p-6 transition-all duration-500 hover:border-primary/50`}
                  >
                    <span className="text-sm font-medium text-primary">
                      {exp.period}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.institution}</p>
                    <p className="mt-4 text-sm text-muted-foreground">
                      {exp.description}
                    </p>
                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="rounded-full bg-surface px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
