import { useState } from 'react';
import { useWizards } from '../../hooks/useWizards';
import { WizardDetailModal } from './WizardDetailModal';
import type { Wizard } from '../../types/wizard';

const ITEMS_PER_PAGE = 4;

function formatId(id: string) {
  return id.length > 16
    ? `${id.slice(0, 8)}...${id.slice(-6)}`
    : id;
}

export function WizardsTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedWizard, setSelectedWizard] = useState<Wizard | null>(null);

  const { wizards, isLoading, isError, error, refetch } = useWizards(searchTerm);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(wizards.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentWizards = wizards.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-[rgba(5,20,36,0.8)] border border-[rgba(208,188,255,0.1)] rounded-xl backdrop-blur-[6px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-[rgba(73,68,84,0.2)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#D4E4FA]">
          Master Wizard Registry
        </h3>

        <div className="flex items-center gap-2 p-1.5 bg-[rgba(28,43,60,0.4)] border border-[rgba(73,68,84,0.3)] rounded-xl w-full sm:w-auto">
          <div className="relative flex items-center w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src="/assets/icon-search.svg" alt="" className="w-3.5 h-3.5 opacity-60" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search wizards..."
              className="w-full pl-9 pr-3 py-1 bg-transparent text-sm text-[#D4E4FA] placeholder:text-[rgba(203,195,215,0.5)] focus:outline-none"
              aria-label="Search wizards"
            />
          </div>

          <div className="w-[1px] h-6 bg-[rgba(73,68,84,0.3)] flex-shrink-0" />

          <button
            onClick={() => refetch()}
            className="flex items-center gap-2 px-3 py-1 rounded-lg text-sm text-[#CBC3D7] hover:text-white hover:bg-[#273647]/50 transition flex-shrink-0"
          >
            <img src="/assets/icon-filter.svg" alt="" className="w-3.5 h-2.5 opacity-80" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[750px] text-left border-collapse">
          <thead>
            <tr className="bg-[rgba(28,43,60,0.5)] border-b border-[rgba(73,68,84,0.2)] text-xs sm:text-sm font-semibold tracking-[0.05em] uppercase text-[#CBC3D7]">
              <th scope="col" className="py-3.5 sm:py-5 px-3.5 sm:px-6 w-[190px]">ID</th>
              <th scope="col" className="py-3.5 sm:py-5 px-3.5 sm:px-6 w-[134px]">FIRST NAME</th>
              <th scope="col" className="py-3.5 sm:py-5 px-3.5 sm:px-6 w-[135px]">LAST NAME</th>
              <th scope="col" className="py-3.5 sm:py-5 px-3.5 sm:px-6 w-[368px]">ASSOCIATED ELIXIRS</th>
              <th scope="col" className="py-3.5 sm:py-5 px-3.5 sm:px-6 w-[114px] text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(73,68,84,0.1)] text-sm">
            {isLoading ? (
              Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
                <tr key={`skeleton-${idx}`} className="animate-pulse">
                  <td className="py-6 px-6">
                    <div className="h-4 w-32 bg-[rgba(73,68,84,0.2)] rounded" />
                  </td>
                  <td className="py-6 px-6">
                    <div className="h-4 w-20 bg-[rgba(73,68,84,0.2)] rounded" />
                  </td>
                  <td className="py-6 px-6">
                    <div className="h-4 w-24 bg-[rgba(73,68,84,0.2)] rounded" />
                  </td>
                  <td className="py-6 px-6">
                    <div className="h-4 w-40 bg-[rgba(73,68,84,0.2)] rounded" />
                  </td>
                  <td className="py-6 px-6 text-right">
                    <div className="h-6 w-8 bg-[rgba(73,68,84,0.2)] rounded ml-auto" />
                  </td>
                </tr>
              ))
            ) : isError ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-sm">
                  <div className="max-w-md mx-auto space-y-3">
                    <p className="text-[#FFB4AB] font-semibold">
                      Failed to load records from the Ministry Codex.
                    </p>
                    <p className="text-xs text-[#CBC3D7]">
                      {error instanceof Error ? error.message : 'Connection disruption.'}
                    </p>
                    <button
                      onClick={() => refetch()}
                      className="px-4 py-1.5 rounded-lg bg-[#273647] hover:bg-[#34465d] text-white text-xs font-semibold transition"
                    >
                      Retry Connection
                    </button>
                  </div>
                </td>
              </tr>
            ) : currentWizards.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-14 text-center text-sm text-[#CBC3D7]">
                  <div className="space-y-2">
                    <p className="text-base font-semibold text-white">No Registered Wizards Found</p>
                    <p className="text-xs text-[rgba(203,195,215,0.7)]">
                      {searchTerm ? `No records matching "${searchTerm}".` : 'No wizards in registry.'}
                    </p>
                    {searchTerm && (
                      <button
                        onClick={handleClearSearch}
                        className="mt-2 px-3 py-1 bg-[#273647] text-xs font-medium text-[#D4E4FA] rounded-md hover:bg-[#34465d] transition"
                      >
                        Clear Search
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ) : (
              currentWizards.map((wizard) => {
                const hasElixirs = wizard.elixirs && wizard.elixirs.length > 0;

                return (
                  <tr
                    key={wizard.id}
                    className="hover:bg-[rgba(28,43,60,0.2)] transition-colors group"
                  >
                    <td className="py-3.5 sm:py-5 px-3.5 sm:px-6 font-mono text-xs sm:text-sm text-[#D0BCFF] whitespace-nowrap">
                      {formatId(wizard.id)}
                    </td>

                    <td className="py-3.5 sm:py-5 px-3.5 sm:px-6 font-normal whitespace-nowrap">
                      {wizard.firstName ? (
                        <span className="text-[#D4E4FA]">{wizard.firstName}</span>
                      ) : (
                        <span className="text-[#CBC3D7]">(None)</span>
                      )}
                    </td>

                    <td className="py-3.5 sm:py-5 px-3.5 sm:px-6 font-semibold text-[#D4E4FA] whitespace-nowrap">
                      {wizard.lastName || 'Unknown'}
                    </td>

                    <td className="py-3.5 sm:py-5 px-3.5 sm:px-6">
                      {hasElixirs ? (
                        <div className="flex flex-wrap gap-2">
                          {wizard.elixirs.slice(0, 2).map((elixir, i) => (
                            <span
                              key={elixir.id || i}
                              className="inline-flex items-center px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-[rgba(238,152,0,0.1)] border border-[rgba(238,152,0,0.2)] text-[#FFB95F] whitespace-nowrap"
                            >
                              {elixir.name}
                            </span>
                          ))}
                          {wizard.elixirs.length > 2 && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[rgba(160,120,255,0.1)] border border-[rgba(160,120,255,0.2)] text-[#D0BCFF] whitespace-nowrap">
                              +{wizard.elixirs.length - 2} more
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-xs font-medium text-[rgba(203,195,215,0.5)] whitespace-nowrap">
                          None registered
                        </span>
                      )}
                    </td>

                    <td className="py-3.5 sm:py-5 px-3.5 sm:px-6 text-right">
                      <button
                        onClick={() => setSelectedWizard(wizard)}
                        className="p-1.5 sm:p-2 rounded-lg hover:bg-[#273647]/60 text-[#CBC3D7] hover:text-[#D0BCFF] transition"
                        title="View Wizard Dossier"
                        aria-label={`View dossier for ${wizard.firstName || ''} ${wizard.lastName || 'wizard'}`}
                      >
                        <img
                          src="/assets/icon-row-action.svg"
                          alt="Action"
                          className="w-5 h-3.5 object-contain inline-block"
                        />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="p-4 sm:px-6 sm:py-4 bg-[rgba(28,43,60,0.3)] border-t border-[rgba(73,68,84,0.2)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#CBC3D7]">
        <div>
          Showing {wizards.length > 0 ? `${startIndex + 1}-${Math.min(startIndex + ITEMS_PER_PAGE, wizards.length)}` : '0'} of{' '}
          {wizards.length.toLocaleString()} Records
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1 || wizards.length === 0}
            className="p-2 rounded-lg hover:bg-[#273647]/50 disabled:opacity-30 disabled:pointer-events-none transition"
            aria-label="Previous page"
          >
            <svg className="w-2.5 h-3 rotate-180" viewBox="0 0 8 12" fill="none">
              <path d="M1.5 1.5L6.5 6L1.5 10.5" stroke="#CBC3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs sm:text-sm font-semibold transition ${
                  currentPage === page
                    ? 'bg-[#D0BCFF] text-[#3C0091]'
                    : 'text-[#CBC3D7] hover:text-white hover:bg-[#273647]/50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages || wizards.length === 0}
            className="p-2 rounded-lg hover:bg-[#273647]/50 disabled:opacity-30 disabled:pointer-events-none transition"
            aria-label="Next page"
          >
            <svg className="w-2.5 h-3" viewBox="0 0 8 12" fill="none">
              <path d="M1.5 1.5L6.5 6L1.5 10.5" stroke="#CBC3D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {selectedWizard && (
        <WizardDetailModal
          wizard={selectedWizard}
          onClose={() => setSelectedWizard(null)}
        />
      )}
    </div>
  );
}
