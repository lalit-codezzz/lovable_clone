const RECENT_PROJECTS = [
    "Landing page redesign",
    "Auth flow prototype",
    "Analytics dashboard",
  ];
  
  export default function Sidebar() {
    return (
      <aside className="w-[260px] shrink-0 h-full border-r border-white/[0.07] bg-[#0E0F12] flex flex-col">
        {/* Brand */}
        <div className="px-5 py-5 flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-[6px] bg-gradient-to-br from-[#5EEAD4] to-[#0EA5A0]" />
          <span className="font-serif italic text-[19px] text-white/90">
            Forge
          </span>
        </div>
  
        {/* New project */}
        <div className="px-3">
          <button className="w-full flex items-center justify-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-[13px] text-white/70 hover:bg-white/[0.04] hover:text-white transition-colors">
            <span className="text-base leading-none">+</span> New project
          </button>
        </div>
  
        {/* Recent list */}
        <div className="px-5 pt-8 pb-2 text-[11px] tracking-wide uppercase text-white/30">
          Recent
        </div>
        <nav className="flex-1 px-2 space-y-0.5 overflow-y-auto">
          {RECENT_PROJECTS.map((project) => (
            <a
              key={project}
              href="#"
              className="block px-3 py-2 rounded-md text-[13px] text-white/50 hover:bg-white/[0.04] hover:text-white/80 transition-colors truncate"
            >
              {project}
            </a>
          ))}
        </nav>
  
        {/* Account */}
        <div className="px-3 py-4 border-t border-white/[0.07] flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#5EEAD4]/20 border border-[#5EEAD4]/30 flex items-center justify-center text-[11px] font-medium text-[#5EEAD4]">
            N
          </div>
          <span className="text-[13px] text-white/60">Account</span>
        </div>
      </aside>
    );
  }