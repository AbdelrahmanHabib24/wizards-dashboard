import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from 'recharts';
import { ACTIVITY_CHART_DATA, SPECIALTY_CHART_DATA } from '../../data/dashboard';

export function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 h-[360px] sm:h-[398px] bg-[rgba(5,20,36,0.8)] border border-[rgba(73,68,84,0.3)] rounded-xl p-5 sm:p-6 backdrop-blur-[6px] flex flex-col justify-between shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#D4E4FA]">
            Registry Activity
          </h3>
          <div className="px-3 sm:px-3.5 py-1 sm:py-1.5 bg-[#1C2B3C]/80 border border-[rgba(73,68,84,0.3)] rounded-lg text-xs font-normal text-[#CBC3D7] cursor-default">
            Last 30 Days
          </div>
        </div>

        <div className="h-64 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ACTIVITY_CHART_DATA}
              margin={{ top: 20, right: 10, left: 10, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="0"
                vertical={false}
                stroke="rgba(73, 68, 84, 0.2)"
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-[#0D1C2D] border border-[rgba(208,188,255,0.3)] rounded-lg p-3 shadow-xl text-xs space-y-1">
                        <div className="font-semibold text-[#D0BCFF]">{data.day}</div>
                        <div className="text-[#D4E4FA]">
                          New Registrations: <span className="font-bold text-[#FFB95F]">{data.newRegistrations}</span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
                cursor={{ fill: 'rgba(208, 188, 255, 0.05)' }}
              />
              <Bar
                dataKey="newRegistrations"
                fill="rgba(208, 188, 255, 0.18)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-between text-xs text-[#CBC3D7] px-2 font-normal">
          <span>Moon Start</span>
          <span>Full Moon</span>
          <span>Moon End</span>
        </div>
      </div>

      <div className="h-[360px] sm:h-[398px] bg-[rgba(5,20,36,0.8)] border border-[rgba(73,68,84,0.3)] rounded-xl p-5 sm:p-6 backdrop-blur-[6px] flex flex-col justify-between shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#D4E4FA]">
          Wizards by Specialty
        </h3>

        <div className="relative h-48 w-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const item = payload[0].payload;
                    return (
                      <div className="bg-[#0D1C2D] border border-[rgba(208,188,255,0.3)] rounded-lg p-2.5 shadow-xl text-xs space-y-1">
                        <div className="font-semibold text-[#D4E4FA]">{item.name}</div>
                        <div className="text-[#CBC3D7]">
                          Count: <span className="font-bold text-[#FFB95F]">{item.count}</span> ({item.percentage}%)
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Pie
                data={SPECIALTY_CHART_DATA}
                cx="50%"
                cy="50%"
                innerRadius={66}
                outerRadius={88}
                dataKey="count"
                stroke="#051424"
                strokeWidth={3}
              >
                {SPECIALTY_CHART_DATA.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
            <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#D4E4FA] leading-none">
              1.2k
            </span>
            <span className="text-xs text-[#CBC3D7] font-normal mt-1">
              Total
            </span>
          </div>
        </div>

        <div className="space-y-3 pb-2 text-sm">
          {SPECIALTY_CHART_DATA.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-[#CBC3D7] font-normal">{item.name}</span>
              </div>
              <span className="text-[#D4E4FA] font-normal">
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
