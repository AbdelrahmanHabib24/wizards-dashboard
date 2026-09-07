import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { StatsCards } from './components/ui/StatsCards';
import { Charts } from './components/ui/Charts';
import { WizardsTable } from './components/ui/WizardsTable';

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#051424] text-[#D4E4FA] flex flex-col selection:bg-[#D0BCFF]/20 selection:text-white">
      <Navbar onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-1 min-w-0">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="flex-1 p-4 sm:p-6 md:p-10 pb-16 md:pb-20 max-w-[1024px] xl:max-w-7xl mx-auto w-full space-y-8 md:space-y-12 min-w-0">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold tracking-[-0.025em] text-[#D4E4FA] leading-tight md:leading-[48px]">
              Wizarding Registry Dashboard
            </h1>
            <p className="text-sm sm:text-base md:text-[18px] text-[#CBC3D7] leading-normal md:leading-7 font-normal">
              Overseeing the mystical equilibrium across all magical realms.
            </p>
          </div>

          <StatsCards />
          <Charts />
          <WizardsTable />
        </main>
      </div>
    </div>
  );
}

export default App;
