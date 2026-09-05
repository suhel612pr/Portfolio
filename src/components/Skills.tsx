import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 px-6 border-t border-[#1a1a1d]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#ece9e4] tracking-tight">
          Skills
        </h2>
        <p className="mt-2 text-[#9c9a96] max-w-xl">
          What I've actually worked with, grouped by area — no invented proficiency scores.
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-x-8 gap-y-10">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#c17a3d] mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-[#ece9e4] text-sm border-b border-[#1a1a1d] pb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
