import PromptInput from "./prompt-input";

const SUGGESTIONS = ["Landing page", "Dashboard UI", "CLI tool"];

export default function InitiateChat() {
  return (
    <section className="relative flex-1 h-full flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Ambient glow behind the prompt box */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 700px 400px at 50% 40%, rgba(94,234,212,0.06), transparent)",
        }}
      />

      <div className="relative z-10 text-center mb-8">
        <h1 className="font-serif italic text-[42px] leading-tight text-white/90">
          What are we building today?
        </h1>
        <p className="text-[14px] text-white/40 mt-2">
          Describe it. Forge scaffolds, codes, and ships it.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <PromptInput />

        <div className="flex items-center justify-center gap-2 mt-4">
          {SUGGESTIONS.map((label) => (
            <button
              key={label}
              className="text-[12.5px] px-3 py-1.5 rounded-full border border-white/10 text-white/45 hover:text-white/80 hover:border-white/25 transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}