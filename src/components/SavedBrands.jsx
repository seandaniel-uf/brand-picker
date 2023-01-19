// icons
import { FaTrash, FaEye } from "react-icons/fa";

export const SavedBrandsComponent = ({ brands, deleteItem, previewItem }) => {
  return brands.map(({ id, primaryColor, primaryFont, secondaryFont }) => {
    return (
      <div
        key={id}
        className="saved-brand"
        style={{ background: primaryColor }}
      >
        <div className="button-container">
          <button
            className="icon-button"
            onClick={() =>
              previewItem(primaryColor, primaryFont, secondaryFont)
            }
          >
            <FaEye />
          </button>
          <button className="icon-button" onClick={() => deleteItem(id)}>
            <FaTrash />
          </button>
        </div>
        <p style={{ fontFamily: `'${primaryFont}'` }}>{primaryFont}</p>
        <p style={{ fontFamily: `'${secondaryFont}'` }}>{secondaryFont}</p>
      </div>
    );
  });
};
