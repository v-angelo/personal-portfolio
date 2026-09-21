import AnimatedButton from "@/components/AnimatedButton";
import { ArrowUpRight } from "lucide-react";
import { FaGithubAlt } from "react-icons/fa";

const projects = [
  {
    title: "Nimbus Core",
    description:
      "A weather app built using React and Openweather API featuring around the world location search, forecasts and custom weather themes features.",
    image: "/projects/project01.jpg",
    tags: ["React", "TailwindCSS", "OpenweatherAPI"],
    link: "https://nimbus-core.vercel.app",
    github: ["https://github.com/v-angelo/NimbusCore"],
  },
  {
    title: "Memoir",
    description:
      "A diary app built using MERN Stack technologies with personalized themes and complete journaling features plus server-side encryption.",
    image: "/projects/project02.jpg",
    tags: ["MongoDB", "Express", "React", "NodeJS", "TailwindCSS"],
    link: "https://memoir-diary-app.vercel.app",
    github: [
      "https://github.com/v-angelo/memoir-diary-app",
      "https://github.com/v-angelo/memoir-server",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-20">
      {/* bg glows */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-highlight/5 blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="animate-fade-in text-sm font-medium tracking-wider text-secondary-foreground uppercase">
            Featured Work
          </span>
          <h2 className="animation-delay-100 mt-4 mb-6 animate-fade-in text-4xl font-bold text-secondary-foreground md:text-5xl">
            Projects that
            <span className="font-serif font-normal text-foreground italic">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="animation-delay-200 animate-fade-in text-muted-foreground">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* projects grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group animate-fade-in overflow-hidden rounded-2xl glass md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-50" />

                {/* overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full glass p-3 transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                  <a
                    href={project.github[0]}
                    onClick={(e) => {
                      e.preventDefault();

                      project.github.forEach((link) => {
                        window.open(link, "_blank");
                      });
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full glass p-3 transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    <FaGithubAlt className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="rounded-full border border-border/50 bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* view all cta */}
        <div className="animation-delay-500 mt-12 animate-fade-in text-center">
          <AnimatedButton>
            View All Projects
            <ArrowUpRight className="h-5 w-5" />
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}

export default Projects;
