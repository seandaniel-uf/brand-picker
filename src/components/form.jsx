import { ChromePicker } from "react-color";

export const Form = ({
  handleSubmit,
  primaryColor,
  handleChangeColor,
  handlePrimaryFontChange,
  handleSecondaryFontChange,
}) => {
  const primaryFontOptions = [
    {
      id: 1,
      fontFamily: "Shrikhand",
    },
    {
      id: 2,
      fontFamily: "Libre Baskerville",
    },
    {
      id: 3,
      fontFamily: "Bangers",
    },
  ];

  const secondaryFontOptions = [
    {
      id: 4,
      fontFamily: "Arial",
    },
    {
      id: 5,
      fontFamily: "Lato",
    },
    {
      id: 6,
      fontFamily: "Roboto",
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <label class="color-label">Primary Color</label>
      <ChromePicker color={primaryColor} onChange={handleChangeColor} />
      <div className="label-select-container">
        <label>Primary Font</label>
        <select onChange={(e) => handlePrimaryFontChange(e)}>
          {primaryFontOptions.map(({ id, fontFamily }) => {
            return (
              <option key={id} value={fontFamily}>
                {fontFamily}
              </option>
            );
          })}
        </select>
      </div>
      <div className="label-select-container">
        <label>Secondary Font</label>
        <select onChange={(e) => handleSecondaryFontChange(e)}>
          {secondaryFontOptions.map(({ id, fontFamily }) => {
            return (
              <option key={id} value={fontFamily}>
                {fontFamily}
              </option>
            );
          })}
        </select>
      </div>
      <button type="submit" class="btn" style={{ background: primaryColor }}>
        Save
      </button>
    </form>
  );
};
