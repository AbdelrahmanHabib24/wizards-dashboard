import { KPI_DATA } from '../../data/dashboard';

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="min-h-[148px] sm:min-h-[162px] md:h-[162px] bg-[rgba(5,20,36,0.8)] border border-[rgba(73,68,84,0.3)] backdrop-blur-[6px] rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
        <div className="space-y-[8.5px]">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase text-[#CBC3D7] leading-5 block">
            {KPI_DATA[0].title}
          </span>
          <div className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.01em] text-[#D0BCFF] leading-9 md:leading-10">
            {KPI_DATA[0].value}
          </div>
        </div>
        <div className="pt-4 sm:pt-6 flex items-center gap-2">
          <img src="/assets/icon-trend-up.svg" alt="" className="w-[10.53px] h-[10.5px] object-contain flex-shrink-0" />
          <span className="text-[11px] sm:text-xs font-medium tracking-[0.05em] leading-4 text-[#FFB95F] truncate">
            {KPI_DATA[0].badgeText}
          </span>
        </div>
      </div>

      <div className="min-h-[148px] sm:min-h-[162px] md:h-[162px] bg-[rgba(5,20,36,0.8)] border border-[rgba(73,68,84,0.3)] backdrop-blur-[6px] rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
        <div className="space-y-[8.5px]">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase text-[#CBC3D7] leading-5 block">
            {KPI_DATA[1].title}
          </span>
          <div className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.01em] text-[#FFB95F] leading-9 md:leading-10">
            {KPI_DATA[1].value}
          </div>
        </div>
        <div className="pt-4 sm:pt-6 flex items-center gap-2">
          <img src="/assets/icon-trend-formula.svg" alt="" className="w-[10.53px] h-[10.5px] object-contain flex-shrink-0" />
          <span className="text-[11px] sm:text-xs font-medium tracking-[0.05em] leading-4 text-[#FFB95F] truncate">
            {KPI_DATA[1].badgeText}
          </span>
        </div>
      </div>

      <div className="min-h-[148px] sm:min-h-[162px] md:h-[162px] bg-[rgba(5,20,36,0.8)] border border-[rgba(73,68,84,0.3)] border-l-4 border-l-[rgba(73,68,84,0.3)] backdrop-blur-[6px] rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
        <div className="space-y-[8.5px]">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase text-[#CBC3D7] leading-5 block">
            {KPI_DATA[2].title}
          </span>
          <div className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.01em] text-[#FFB4AB] leading-9 md:leading-10">
            {KPI_DATA[2].value}
          </div>
        </div>
        <div className="pt-4 sm:pt-6 flex items-center gap-2">
          <img src="/assets/icon-trend-alert.svg" alt="" className="h-[10.5px] w-auto object-contain flex-shrink-0" />
          <span className="text-[11px] sm:text-xs font-medium tracking-[0.05em] leading-4 text-[#FFB4AB] truncate">
            {KPI_DATA[2].badgeText}
          </span>
        </div>
      </div>
    </div>
  );
}
