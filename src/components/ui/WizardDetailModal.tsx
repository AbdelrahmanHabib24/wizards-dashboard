import { useEffect, useRef } from 'react';
import type { Wizard } from '../../types/wizard';

interface WizardDetailModalProps {
  wizard: Wizard | null;
  onClose: () => void;
}


export function WizardDetailModal({ wizard, onClose }: WizardDetailModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (wizard) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }

    return () => {
      if (dialog.open) {
        dialog.close();
      }
    };
  }, [wizard]);

  if (!wizard) return null;

  const displayName = [wizard.firstName, wizard.lastName].filter(Boolean).join(' ') || 'Unknown Wizard';
  const elixirCount = wizard.elixirs?.length ?? 0;

  return (
    <dialog
      ref={dialogRef}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          onClose();
        }
      }}
      aria-labelledby="modal-member-name"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(5,20,36,0.7)] backdrop-blur-[6px] w-full h-full max-w-none max-h-none border-0 outline-none m-0 backdrop:bg-transparent"
    >
      <div
        className="relative w-full max-w-[896px] bg-[#0D1C2D] border border-[#494454] rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-[rgba(13,28,45,0.5)] border-b border-[rgba(73,68,84,0.2)] flex items-center justify-between flex-shrink-0 gap-4">
          <div className="space-y-0.5 min-w-0">
            <span className="text-xs sm:text-sm font-normal tracking-[0.1em] uppercase text-[#D0BCFF] leading-5 sm:leading-6 block">
              MEMBER PROFILE
            </span>
            <h2 id="modal-member-name" className="text-xl sm:text-3xl font-semibold tracking-[-0.01em] text-[#D4E4FA] leading-tight truncate">
              {displayName}
            </h2>
          </div>

          <div className="text-right flex-shrink-0">
            <span className="text-xs sm:text-sm font-normal text-[#CBC3D7] leading-5 sm:leading-6 block">
              Registry ID
            </span>
            <span className="text-sm sm:text-lg md:text-2xl font-semibold text-[#FFB95F] leading-tight block font-mono">
              {wizard.id.length > 16 ? `${wizard.id.slice(0, 8)}...${wizard.id.slice(-4)}` : wizard.id}
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
            <div className="md:col-span-4 flex flex-col items-center gap-4 sm:gap-6">
              <div className="relative flex items-center justify-center w-32 h-32 sm:w-48 sm:h-48">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[rgba(208,188,255,0.2)] to-[rgba(255,185,95,0.2)] blur-[20px] opacity-50" />
                <div className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-[#0D1C2D] border-2 border-[rgba(208,188,255,0.3)] p-2 shadow-[0px_0px_15px_0px_rgba(208,188,255,0.4)] flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/crest-skower.png"
                    alt="Crest"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 w-full">
                <span className="px-3.5 py-1 rounded-full text-xs sm:text-sm font-normal leading-6 bg-[rgba(208,188,255,0.1)] border border-[rgba(208,188,255,0.3)] text-[#D0BCFF] whitespace-nowrap">
                  {elixirCount > 0 ? `${elixirCount} Formulas` : 'Registered Wizard'}
                </span>
              </div>
            </div>

            <div className="md:col-span-8 space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8 sm:gap-y-6 p-4 sm:p-6 bg-[rgba(1,15,31,0.4)] border border-[rgba(73,68,84,0.1)] rounded-xl">
                <div>
                  <span className="text-xs sm:text-sm font-normal text-[#CBC3D7] block">
                    First Name
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#D4E4FA] block mt-1">
                    {wizard.firstName || '—'}
                  </span>
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-normal text-[#CBC3D7] block">
                    Last Name
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#D4E4FA] block mt-1">
                    {wizard.lastName || '—'}
                  </span>
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-normal text-[#CBC3D7] block">
                    Known Elixirs
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#FFB95F] block mt-1">
                    {elixirCount} Formulas
                  </span>
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-normal text-[#CBC3D7] block">
                    Registry Identifier
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-semibold text-[#D4E4FA] block mt-1 truncate" title={wizard.id}>
                    {wizard.id}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-[rgba(73,68,84,0.2)]">
                  <img
                    src="/assets/icon-associated-elixirs.svg"
                    alt=""
                    className="w-[19px] h-[18px] object-contain"
                  />
                  <h3 className="text-lg sm:text-xl font-normal text-[#D4E4FA]">
                    Associated Elixirs
                  </h3>
                </div>

                {wizard.elixirs && wizard.elixirs.length > 0 ? (
                  <div className="space-y-3">
                    {wizard.elixirs.map((elixir, idx) => (
                      <div
                        key={elixir.id || idx}
                        className="flex items-center justify-between p-3.5 bg-[rgba(28,43,60,0.4)] rounded-lg"
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="w-10 h-10 rounded bg-[rgba(208,188,255,0.1)] border border-[rgba(208,188,255,0.2)] flex items-center justify-center flex-shrink-0">
                            <img
                              src="/assets/icon-modal-potion.svg"
                              alt=""
                              className="w-5 h-5 object-contain"
                            />
                          </div>
                          <div className="text-base font-normal text-[#D4E4FA] truncate">
                            {elixir.name}
                          </div>
                        </div>

                        <img
                          src="/assets/icon-modal-arrow.svg"
                          alt=""
                          className="w-[7.4px] h-3 opacity-70 ml-2 flex-shrink-0"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 rounded-lg bg-[rgba(28,43,60,0.2)] text-sm text-[#CBC3D7] italic">
                    None registered
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-[rgba(13,28,45,0.8)] border-t border-[rgba(73,68,84,0.2)] flex items-center justify-end gap-3 sm:gap-6 flex-shrink-0">
          <button
            onClick={onClose}
            className="px-5 sm:px-8 py-2 sm:py-2.5 text-sm sm:text-base font-normal text-[#CBC3D7] hover:text-white transition rounded-xl"
          >
            Close
          </button>
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-5 sm:px-8 py-2 sm:py-2.5 bg-[#D0BCFF] hover:bg-[#c2abf8] text-[#3C0091] font-bold text-sm sm:text-base rounded-xl shadow-[0px_4px_6px_-4px_rgba(208,188,255,0.2),0px_10px_15px_-3px_rgba(208,188,255,0.2)] transition active:scale-[0.98]"
          >
            <img src="/assets/icon-modal-edit.svg" alt="" className="w-[13.5px] h-[13.5px]" />
            <span>Edit Record</span>
          </button>
        </div>
      </div>
    </dialog>
  );
}
