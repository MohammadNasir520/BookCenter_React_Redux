import { useState } from "react";
import BooksTable from "../../components/BooksTable";
import ReadingBookTable from "../../components/ReadingBookTable";
import FinishedReadingTable from "../../components/FinishedReadingTable";
import addButtonPic from "../../assets/add-button.png";
import { IButton } from "../../globalInterfaces/globalInterfaces";

const WishList = () => {
  const [activeTabNo, setActiveTabNo] = useState(1);
  const activeTabClass = `bg-indigo-500 text-white `;
  const nonActiveTabClass = ` bg-white text-indigo-500 `;

  let button = {
    th: "",
    title: "",
    img: "",
  };
  const ReadListButton: IButton = {
    th: "Add to ReadList",
    title: "ReadList",
    img: addButtonPic,
  };
  const FinishedButton: IButton = {
    th: "Add to FinishList",
    title: "FinishList",
    img: addButtonPic,
  };

  if (activeTabNo === 1) {
    button = ReadListButton;
  } else if (activeTabNo === 2) {
    button = FinishedButton;
  }
  return (
    <div>
      <div>
        <div className="grid grid-cols-3 gap-5">
          <button
            onClick={() => setActiveTabNo(1)}
            className={`  ${
              activeTabNo === 1 ? activeTabClass : nonActiveTabClass
            } p-4 rounded  shadow-md font-sans text-lg font-semibold `}
          >
            All Wished Book
          </button>
          <button
            onClick={() => setActiveTabNo(2)}
            className={`  ${
              activeTabNo === 2 ? activeTabClass : nonActiveTabClass
            } p-4 rounded  shadow-md font-sans text-lg font-semibold `}
          >
            currently Reading
          </button>
          <button
            onClick={() => setActiveTabNo(3)}
            className={`  ${
              activeTabNo === 3 ? activeTabClass : nonActiveTabClass
            } p-4 rounded  shadow-md font-sans text-lg font-semibold `}
          >
            Already read
          </button>
        </div>
        <div className="shadow-xl border border-gray-100 font-light lg:p-8 rounded text-gray-500 bg-white mt-6">
          {<BooksTable button={button}></BooksTable>}
        </div>
      </div>
    </div>
  );
};

export default WishList;
