import { useState } from "react";
import BooksTable, { IWishListBook } from "../../components/BooksTable";
import addButtonPic from "../../assets/add-button.png";
import undoButtonPic from "../../assets/cancel.png";
import { IButton } from "../../globalInterfaces/globalInterfaces";
import {
  useAddReadingListMutation,
  useGetAllWishListsQuery,
} from "../../Redux/api/wishListApi/wishListApi";
import { useParams } from "react-router-dom";

const WishList = () => {
  const { id } = useParams();
  const [activeTabNo, setActiveTabNo] = useState(1);

  const [addReadingList, { data, isError, isSuccess, error }] =
    useAddReadingListMutation();

  console.log(data, isError, isSuccess, error);

  const activeTabClass = `bg-indigo-500 text-white `;
  const nonActiveTabClass = ` bg-white text-indigo-500 `;

  let options = {
    id: id,
    status: "",
  };

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
  const UndoButton: IButton = {
    th: "Undo",
    title: "undo",
    img: undoButtonPic,
  };
  let action = null;

  const handleAddToReadList = (book: IWishListBook) => {
    console.log(book);
    addReadingList({
      id: book._id,
      wishListUpdatedData: { status: "reading" },
    });
  };
  const handleAddToFinishList = (book: IWishListBook) => {
    console.log(book);
    addReadingList({
      id: book._id,
      wishListUpdatedData: { status: "Finished" },
    });
  };
  const handleUndo = (book: IWishListBook) => {
    console.log(book);
    addReadingList({
      id: book._id,
      wishListUpdatedData: { status: "not read" },
    });
  };

  if (activeTabNo === 1) {
    button = ReadListButton;
    action = handleAddToReadList;
    options.status = "not read";
  } else if (activeTabNo === 2) {
    button = FinishedButton;
    action = handleAddToFinishList;
    options.status = "reading";
  } else if (activeTabNo === 3) {
    button = UndoButton;
    options.status = "Finished";
    action = handleUndo;
  }

  const { data: wishLists } = useGetAllWishListsQuery(options, {
    refetchOnMountOrArgChange: true,
  });
  console.log("wishlist data", wishLists);
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
          {
            <BooksTable
              button={button}
              wishLists={wishLists}
              action={action}
              undo={handleUndo}
            ></BooksTable>
          }
        </div>
      </div>
    </div>
  );
};

export default WishList;
