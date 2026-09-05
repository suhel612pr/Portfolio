import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-[#131315] border border-[#262629] hover:border-[#38383c] flex items-center justify-center text-[#9c9a96] hover:text-[#ece9e4] transition-colors"
    >
      <ArrowUp size={16} />
    </button>
  );
}
