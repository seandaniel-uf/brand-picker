import { useState } from "react";
import { Form } from "./components/Form";
import "./App.scss";
import { FaBook } from "react-icons/fa";

function App() {
  const [branding, setBranding] = useState({
    primaryColor: "#94CDC6",
    primaryFont: "Shrikhand",
    secondaryFont: "Arial",
  });

  const handleSubmit = () => {
    console.log("Submit Handled");
  };

  const handleChangeColor = (color) => {
    console.log(color.hex);
    setBranding({
      ...branding,
      primaryColor: color.hex,
    });
  };

  const handlePrimaryFontChange = (e) => {
    console.log(e.target.value);
    setBranding({
      ...branding,
      primaryFont: e.target.value,
    });
  };

  const handleSecondaryFontChange = (e) => {
    console.log(e.target.value);
    setBranding({
      ...branding,
      secondaryFont: e.target.value,
    });
  };

  return (
    <div class="wrapper">
      <header>
        <h1>Brand Picker</h1>
      </header>
      <section className="form-card-container">
        <Form
          primaryColor={branding.primaryColor}
          handleChangeColor={handleChangeColor}
          handlePrimaryFontChange={handlePrimaryFontChange}
          handleSecondaryFontChange={handleSecondaryFontChange}
          handleSubmit={handleSubmit}
        />
        <div className="card">
          <img src="https://content.cdntwrk.com/files/aHViPTEyOTE1MiZjbWQ9aXRlbWVkaXRvcmltYWdlJmZpbGVuYW1lPWl0ZW1lZGl0b3JpbWFnZV82Mzg0YzgwZDVmYTA0LmpwZyZ2ZXJzaW9uPTAwMDAmc2lnPTExODExOGRmMzZhNjIxZjRiMmM3YmFlZDFmMjVjMTQ1" />
          <div className="card-content-container">
            <h2 style={{ fontFamily: `'${branding.primaryFont}'` }}>
              Primary Font Family Content Title
            </h2>
            <span
              class="h2-border"
              style={{ background: branding.primaryColor }}
            ></span>
            <div
              className="description-icon"
              style={{ fontFamily: `'${branding.secondaryFont}'` }}
            >
              <p>
                Here is a paragraph including Secondary Font Family. Lorem Ipsum
                dolor sit conseceteteur ala la sit dor lorem ipsum
              </p>
              <FaBook style={{ fill: branding.primaryColor }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
