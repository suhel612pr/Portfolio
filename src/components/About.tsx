import { MapPin } from "lucide-react";
import { profile, education, experience } from "../data/profile";

const timeline = [...experience, ...education];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 border-t border-[#1a1a1d]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-12 md:gap-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#ece9e4] tracking-tight">
            About
          </h2>
          <div className="mt-2 flex items-center gap-2 text-sm text-[#6b6966]">
            <MapPin size={14} />
            {profile.location}
          </div>

          <div className="mt-6 space-y-4">
            {profile.about.map((para, i) => (
              <p key={i} className="text-[#9c9a96] leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-[#6b6966] mb-6">
            Education &amp; Experience
          </h3>
          <ol className="relative border-l border-[#262629] pl-6 space-y-8">
            {timeline.map((item, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#c17a3d]" />
                <p className="text-sm font-mono text-[#6b6966]">{item.period}</p>
                <h4 className="mt-1 text-[#ece9e4] font-semibold">{item.title}</h4>
                <p className="text-sm text-[#9c9a96]">
                  {item.organization} — {item.location}
                </p>
                <p className="mt-2 text-sm text-[#9c9a96] leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
