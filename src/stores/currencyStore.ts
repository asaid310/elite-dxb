import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CurrencyInfo {
  code: string;
  symbol: string;
  flag: string;
  rate: number; // rate from AED
}

export const GCC_CURRENCIES: CurrencyInfo[] = [
  { code: "AED", symbol: "د.إ", flag: "🇦🇪", rate: 1 },
  { code: "SAR", symbol: "ر.س", flag: "🇸🇦", rate: 1.0204 },
  { code: "KWD", symbol: "د.ك", flag: "🇰🇼", rate: 0.0833 },
  { code: "BHD", symbol: "د.ب", flag: "🇧🇭", rate: 0.1026 },
  { code: "OMR", symbol: "ر.ع", flag: "🇴🇲", rate: 0.1048 },
  { code: "QAR", symbol: "ر.ق", flag: "🇶🇦", rate: 0.9912 },
];

interface CurrencyStore {
  selected: CurrencyInfo;
  setSelected: (currency: CurrencyInfo) => void;
  convert: (aedAmount: number) => number;
  format: (aedAmount: number) => string;
}

export const useCurrencyStore = create<CurrencyStore>()(
  persist(
    (set, get) => ({
      selected: GCC_CURRENCIES[0],
      setSelected: (currency) => set({ selected: currency }),
      convert: (aedAmount) => {
        const { selected } = get();
        return aedAmount * selected.rate;
      },
      format: (aedAmount) => {
        const { selected } = get();
        const converted = aedAmount * selected.rate;
        return `${converted.toFixed(2)} ${selected.symbol}`;
      },
    }),
    {
      name: 'gcc-currency',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ selected: state.selected }),
    }
  )
);
