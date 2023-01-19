import { useEffect, useState } from "react";
import "./App.scss";

// components
import { Form } from "./components/Form";
import { SavedBrandsComponent } from "./components/SavedBrands";
import { Card } from "./components/Card";

// libraries
import { v4 as uuidv4 } from "uuid";

const getLocalStorage = () => {
  let savedBrands = localStorage.getItem("Saved Brands");

  if (savedBrands) {
    // converts string to object
    return JSON.parse(localStorage.getItem("Saved Brands"));
  } else {
    return [];
  }
};

function App() {
  const [branding, setBranding] = useState({
    primaryColor: "#94CDC6",
    primaryFont: "Shrikhand",
    secondaryFont: "Arial",
  });
  const [savedBrands, setSavedBrands] = useState(getLocalStorage);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBrand = {
      ...branding,
      id: uuidv4(),
    };
    setSavedBrands([...savedBrands, newBrand]);
  };

  // everytime savedBrands state changes, call useEffect and put it in local storage
  useEffect(() => {
    localStorage.setItem("Saved Brands", JSON.stringify(savedBrands));
  }, [savedBrands]);

  const handleChangeColor = (color) => {
    setBranding({
      ...branding,
      primaryColor: color.hex,
    });
  };

  const handleChangeFonts = (e) => {
    setBranding({
      ...branding,
      [e.target.name]: e.target.value,
    });
  };

  const previewItem = (primaryColor, primaryFont, secondaryFont) => {
    setBranding({
      primaryColor: primaryColor,
      primaryFont: primaryFont,
      secondaryFont: secondaryFont,
    });
  };

  const deleteItem = (id) => {
    const newSavedBrands = savedBrands.filter((brand) => brand.id !== id);
    setSavedBrands(newSavedBrands);
  };

  return (
    <div className="wrapper">
      <header>
        <h1>Brand Picker</h1>
      </header>
      <section className="form-card-container">
        <Form
          primaryColor={branding.primaryColor}
          handleChangeColor={handleChangeColor}
          handleChangeFonts={handleChangeFonts}
          handleSubmit={handleSubmit}
        />
        <Card
          primaryColor={branding.primaryColor}
          primaryFont={branding.primaryFont}
          secondaryFont={branding.secondaryFont}
        />
      </section>
      <section className="saved-brands-container">
        <SavedBrandsComponent
          brands={savedBrands}
          deleteItem={deleteItem}
          previewItem={previewItem}
        />
      </section>
    </div>
  );
}

export default App;
