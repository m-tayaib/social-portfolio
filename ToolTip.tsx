function ToolTip() {
    return (
        <div className="flex justify-center items-center pt-5">
            <div className="relative p-[1px] rounded-2xl overflow-hidden group">

                {/* Animated Glow Border */}
                <div className="absolute inset-0 rounded-2xl 
  bg-[conic-gradient(from_0deg_at_50%_50%,transparent,#bbf7d0,#ffffff,#eaddcf,transparent)] 
  animate-[spin_4s_linear_infinite] 
  blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                </div>

                {/* Soft Outer Glow */}
                <div className="absolute inset-0 rounded-2xl 
          bg-white/10 blur-xl opacity-40">
                </div>

                {/* Card Content */}
                <div className="relative flex items-center gap-2 rounded-2xl 
  bg-black/70 backdrop-blur-xl 
  border border-white/10 
  text-white px-5 py-3 
  text-xs sm:text-sm md:text-base 
  tracking-wide hover:scale-105 transition-all duration-500 ease-in-out text-nowrap">

                    <div className="relative flex items-center justify-center">
                        <span className="absolute inline-flex h-6 w-6 rounded-full bg-white/50 animate-ping"></span>

                        {/* Center Dot */}
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-white shadow-2xl"></span>
                    </div>

                    Junior Full-Stack Developer ⚡️ Hireable
                </div>

            </div>
        </div>
    )
}

export default ToolTip