import { useState, FormEvent } from "react";
import { Mail, Github, Send, CheckCircle2 } from "lucide-react";
import { profile } from "../data/profile";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in every field.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("That doesn't look like a valid email address.");
      return;
    }

    // This site has no backend to receive the message, so submitting opens
    // a pre-filled email in the visitor's own mail client — it actually
    // reaches your inbox, unlike a form that just logs to local storage.
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setSent(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 border-t border-[#1a1a1d]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#ece9e4] tracking-tight">
            Contact
          </h2>
          <p className="mt-3 text-[#9c9a96] leading-relaxed max-w-md">
            Reach out about an opportunity, a project, or anything else — I'll get back to you by
            email.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-[#ece9e4] hover:text-[#c17a3d] transition-colors"
            >
              <Mail size={18} />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#ece9e4] hover:text-[#c17a3d] transition-colors"
            >
              <Github size={18} />
              github.com/suhel612pr
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-[#9c9a96] mb-1.5">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#131315] border border-[#262629] rounded-md px-4 py-2.5 text-[#ece9e4] focus:border-[#c17a3d] outline-none transition-colors"
              autoComplete="name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-[#9c9a96] mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#131315] border border-[#262629] rounded-md px-4 py-2.5 text-[#ece9e4] focus:border-[#c17a3d] outline-none transition-colors"
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-[#9c9a96] mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-[#131315] border border-[#262629] rounded-md px-4 py-2.5 text-[#ece9e4] focus:border-[#c17a3d] outline-none transition-colors resize-none"
            />
          </div>

          {error && <p className="text-sm text-[#e08787]">{error}</p>}

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-[#c17a3d] text-[#0b0b0c] font-medium px-5 py-2.5 rounded-md hover:bg-[#d68b49] transition-colors"
          >
            {sent ? <CheckCircle2 size={16} /> : <Send size={16} />}
            {sent ? "Opening your email app…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
