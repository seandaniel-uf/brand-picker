import { useState } from "react";
import { Form } from "./components/form";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [branding, setBranding] = useState({
    primaryFont: "",
    secondaryFont: "",
    primaryColor: "",
    secondaryColor: "",
  });

  const handleChangeColor = (color) => {
    console.log(color);
    setBranding({
      primaryColor: color.hex,
    });
  };

  const handleChangeFont = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <h1>Brand Picker</h1>
      <Form
        color={branding.primaryColor}
        handleChangeColor={handleChangeColor}
        handleChangeFont={handleChangeFont}
      />
    </>
  );
}

export default App;
