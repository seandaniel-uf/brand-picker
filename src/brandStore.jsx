import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export const useBrandStore = create((set, get) => ({
  branding: {
    primaryColor: "#94CDC6",
    primaryFont: "Shrikhand",
    secondaryFont: "Arial",
  },
  savedBrands: [],
  getLocalStorage: () => {
    let savedBrands = localStorage.getItem("Saved Brands");
    console.log(savedBrands);

    if (savedBrands) {
      savedBrands = JSON.parse(localStorage.getItem("Saved Brands"));
    } else {
      savedBrands = [];
    }

    set((state) => ({
      savedBrands: savedBrands,
    }));
  },
  handleSubmit: (e) => {
    e.preventDefault();
    const newBrand = {
      // ...branding,
      id: uuidv4(),
    };
    set((state) => ({
      ...state,
      newBrand,
    }));
  },
  handleChangeColor: (color) => {
    set((state) => ({
      ...state,
      primaryColor: color.hex,
    }));
  },
  handleChangeFonts: (e) => {
    set((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  },
  previewItem: (primaryColor, primaryFont, secondaryFont) => {
    set((state) => ({
      ...state,
      primaryColor: primaryColor,
      primaryFont: primaryFont,
      secondaryFont: secondaryFont,
    }));
  },

  deleteItem: (id) => {
    const newSavedBrands = savedBrands.filter((brand) => brand.id !== id);
    set((state) => ({
      ...state,
      savedBrands: newSavedBrands,
    }));
  },
  setItem: () => {
    localStorage.setItem(
      "Saved Brands",
      JSON.stringify(set((state) => ({ ...state, branding: get().branding })))
    );
  },
}));
