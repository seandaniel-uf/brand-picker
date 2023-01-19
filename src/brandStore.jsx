import { create } from "zustand";

export const useBrandStore = create((set, get) => ({
  savedBrands: [],
  deleteItem: (id) => {
    const newSavedBrands = savedBrands.filter((brand) => brand.id !== id);
    set((state) => ({ ...state, savedBrands: newSavedBrands }));
  },
}));
