// icons
import { FaBook } from "react-icons/fa";

export const Card = ({ primaryFont, secondaryFont, primaryColor }) => {
  return (
    <div className="card">
      <img src="https://content.cdntwrk.com/files/aHViPTEyOTE1MiZjbWQ9aXRlbWVkaXRvcmltYWdlJmZpbGVuYW1lPWl0ZW1lZGl0b3JpbWFnZV82Mzg0YzgwZDVmYTA0LmpwZyZ2ZXJzaW9uPTAwMDAmc2lnPTExODExOGRmMzZhNjIxZjRiMmM3YmFlZDFmMjVjMTQ1" />
      <div className="card-content-container">
        <h2 style={{ fontFamily: `'${primaryFont}'` }}>
          Primary Font Family Content Title
        </h2>
        <hr className="h2-border" style={{ background: primaryColor }}></hr>
        <div
          className="description-icon"
          style={{ fontFamily: `'${secondaryFont}'` }}
        >
          <p>
            Here is a paragraph including Secondary Font Family. Lorem Ipsum
            dolor sit conseceteteur ala la sit dor lorem ipsum
          </p>
          <FaBook style={{ fill: primaryColor }} />
        </div>
      </div>
    </div>
  );
};
