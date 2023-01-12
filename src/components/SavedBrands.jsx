// icons
import { FaTrash } from "react-icons/fa";

export const SavedBrandsComponent = ({ brands, deleteItem }) => {
  {
    brands.map(({ id, primaryColor, primaryFont, secondaryFont }) => {
      return (
        <div
          key={id}
          className="saved-brand"
          style={{ background: primaryColor }}
        >
          <button onClick={deleteItem}>
            <FaTrash />
          </button>
          <p style={{ fontFamily: `'${primaryFont}'` }}>{primaryFont}</p>
          <p style={{ fontFamily: `'${secondaryFont}'` }}>{secondaryFont}</p>
        </div>
      );
    });
  }
};
