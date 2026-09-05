import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1d] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#6b6966]">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React, Vite &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
