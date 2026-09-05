import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import MySQLInteractiveLab from "./MySQLInteractiveLab";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 px-6 border-t border-[#1a1a1d]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#ece9e4] tracking-tight">
          Projects
        </h2>
        <p className="mt-2 text-[#9c9a96] max-w-xl">
          A few things I've built end to end.
        </p>

        <div className="mt-10 space-y-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`border border-[#262629] rounded-lg p-6 md:p-8 hover:border-[#38383c] transition-colors ${
                project.featured ? "bg-[#131315]" : ""
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-[#ece9e4]">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[#9c9a96] hover:text-[#ece9e4] transition-colors"
                    >
                      <Github size={16} />
                      Source
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[#c17a3d] hover:text-[#d68b49] transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-3 text-[#9c9a96] leading-relaxed max-w-2xl">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-[#9c9a96] border border-[#262629] rounded px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-lg font-semibold text-[#ece9e4]">
            Try the database behind these projects
          </h3>
          <p className="mt-2 text-[#9c9a96] max-w-xl">
            A small in-browser SQL simulator running the same schema as the Library
            Manager and Order Management projects above — pick a query and run it.
          </p>
          <div className="mt-6">
            <MySQLInteractiveLab />
          </div>
        </div>
      </div>
    </section>
  );
}
