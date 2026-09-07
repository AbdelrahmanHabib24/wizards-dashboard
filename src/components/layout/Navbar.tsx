interface NavbarProps {
  onMenuToggle?: () => void;
}

export function Navbar({ onMenuToggle }: NavbarProps) {
  return (
    <header className="h-16 px-4 md:px-10 border-b border-[rgba(73,68,84,0.3)] bg-[#051424]/80 backdrop-blur-[12px] flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center">
        {onMenuToggle && (
          <button
            onClick={onMenuToggle}
            className="md:hidden mr-3 p-1.5 text-[#CBC3D7] hover:text-white rounded-lg hover:bg-[#0D1C2D] transition"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}

        <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#FFB95F] truncate">
          Wizarding Registry
        </h1>

        <div className="relative hidden lg:block ml-10 xl:ml-20 w-64">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <img src="/assets/icon-search.svg" alt="" className="w-3.5 h-3.5 opacity-70" />
          </div>
          <input
            type="text"
            placeholder="Scrying records..."
            className="w-full pl-10 pr-4 py-1.5 bg-[#273647]/30 border border-transparent rounded-full text-sm text-[#D4E4FA] placeholder:text-[#6B7280] focus:outline-none focus:border-[#D0BCFF]/40 transition"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <button
          className="p-1.5 rounded-full hover:bg-[#273647]/30 text-[#CBC3D7] hover:text-[#D0BCFF] transition"
          aria-label="Notifications"
          title="Notifications"
        >
          <img src="/assets/icon-bell.svg" alt="" className="w-4 h-5 object-contain" />
        </button>

        <button
          className="p-1.5 rounded-full hover:bg-[#273647]/30 text-[#CBC3D7] hover:text-[#D0BCFF] transition"
          aria-label="Settings"
          title="Settings"
        >
          <img src="/assets/icon-settings.svg" alt="" className="w-5 h-5 object-contain" />
        </button>

        <div className="w-8 h-8 rounded-full border border-[rgba(208,188,255,0.3)] overflow-hidden flex-shrink-0">
          <img
            src="/assets/avatar-archmage.png"
            alt="Arch-Mage Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
