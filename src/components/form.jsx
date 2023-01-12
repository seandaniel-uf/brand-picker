import { ChromePicker } from "react-color";

export const Form = ({ primaryColor, handleChangeColor, handleChangeFont }) => {
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
      fontFamily: "Monsterrat",
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
    <form>
      <ChromePicker color={primaryColor} onChange={handleChangeColor} />
      <select onChange={(e) => handleChangeFont(e)}>
        {primaryFontOptions.map(({ id, fontFamily }) => {
          return (
            <option key={id} value={fontFamily}>
              {fontFamily}
            </option>
          );
        })}
      </select>
      <select onChange={(e) => handleChangeFont(e)}>
        {secondaryFontOptions.map(({ id, fontFamily }) => {
          return (
            <option key={id} value={fontFamily}>
              {fontFamily}
            </option>
          );
        })}
      </select>
    </form>
  );
};
