import { NAV_ITEMS, FOOTER_NAV_ITEMS } from '../../data/dashboard';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed md:sticky top-0 md:top-16 inset-y-0 left-0 z-50 md:z-20 w-64 h-screen md:h-[calc(100vh-4rem)] bg-[#0D1C2D] border-r border-[rgba(73,68,84,0.2)] flex flex-col justify-between transition-transform duration-300 ease-in-out backdrop-blur-[20px] overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex flex-col py-6">
          <div className="px-6 flex flex-col items-center text-center pb-8 border-b md:border-b-0 border-[rgba(73,68,84,0.2)]">
            <div className="relative mb-2">
              <div className="w-16 h-16 rounded-xl p-[1px] bg-gradient-to-br from-[#D0BCFF] to-[#FFB95F] shadow-sm">
                <div className="w-full h-full bg-[#0D1C2D] rounded-[11px] flex items-center justify-center">
                  <img
                    src="/assets/icon-sparkle.svg"
                    alt="Registry Sparkle"
                    className="w-7 h-7 object-contain"
                  />
                </div>
              </div>
            </div>

            <h2 className="text-base font-black tracking-tight text-[#FFB95F]">
              Registry
            </h2>
            <p className="text-xs text-[#CBC3D7] opacity-70 tracking-wide font-medium mt-0.5">
              Ministry of Alchemical Records
            </p>
          </div>

          <nav className="px-4 space-y-1 mt-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all ${
                  item.active
                    ? 'bg-[rgba(238,152,0,0.2)] border-l-2 border-[#FFB95F] text-[#FFB95F]'
                    : 'text-[#CBC3D7] hover:text-white hover:bg-[#273647]/30'
                }`}
              >
                <img
                  src={item.icon}
                  alt=""
                  className="w-4 h-4 object-contain opacity-90"
                />
                <span>{item.label}</span>
              </a>
            ))}

            <div className="pt-6 pb-2 px-2">
              <button className="w-full py-3 px-6 rounded-xl bg-[#D0BCFF] hover:bg-[#c2abf8] text-[#3C0091] font-semibold text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0px_4px_6px_-4px_rgba(208,188,255,0.2),0px_10px_15px_-3px_rgba(208,188,255,0.2)] transition active:scale-[0.98]">
                <img src="/assets/icon-plus.svg" alt="" className="w-2.5 h-2.5" />
                <span>New Elixir</span>
              </button>
            </div>
          </nav>
        </div>

        <div className="p-4 border-t border-[rgba(73,68,84,0.1)] space-y-1">
          {FOOTER_NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex items-center gap-4 px-4 py-2.5 rounded-lg text-sm font-semibold text-[#CBC3D7] hover:text-white hover:bg-[#273647]/30 transition"
            >
              <img src={item.icon} alt="" className="w-5 h-5 opacity-80" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
