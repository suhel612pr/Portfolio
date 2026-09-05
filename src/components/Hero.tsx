import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Mail } from "lucide-react";
import { profile } from "../data/profile";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = profile.roles[roleIndex];
    const speed = deleting ? 35 : 55;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % profile.roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="pt-36 pb-24 md:pt-44 md:pb-32 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[minmax(0,1fr)_auto] gap-10 md:gap-16 items-center">
        <div>
          <p className="font-mono text-sm text-[#c17a3d] mb-5">Hi, I'm</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#ece9e4] leading-[1.1]">
            {profile.name}
          </h1>

          <div className="mt-4 h-9 md:h-10 flex items-center">
            <span className="text-xl md:text-2xl text-[#9c9a96]">
              {displayed}
              <span className="cursor-blink text-[#c17a3d]">|</span>
            </span>
          </div>

          <p className="mt-6 max-w-xl text-base md:text-lg text-[#9c9a96] leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#c17a3d] text-[#0b0b0c] font-medium px-5 py-3 rounded hover:bg-[#d68b49] transition-colors"
            >
              View Projects
              <ArrowUpRight size={16} />
            </a>

            {profile.resumeUrl ? (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#262629] px-5 py-3 rounded text-[#ece9e4] hover:border-[#38383c] transition-colors"
              >
                Resume
              </a>
            ) : null}

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#9c9a96] hover:text-[#ece9e4] px-2 py-3 transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-sm text-[#9c9a96] hover:text-[#ece9e4] px-2 py-3 transition-colors"
            >
              <Mail size={18} />
              {profile.email}
            </a>
          </div>
        </div>

        {profile.avatarUrl ? (
          <div className="order-first md:order-last mx-auto md:mx-0">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border border-[#262629]"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
