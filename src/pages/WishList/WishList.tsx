import { useState } from 'react';
import BooksTable, { IWishListBook } from '../../components/BooksTable';
import addButtonPic from '../../assets/add-button.png';
import undoButtonPic from '../../assets/cancel.png';
import { IButton } from '../../globalInterfaces/globalInterfaces';
import {
  useAddReadingListMutation,
  useGetAllWishListsQuery,
} from '../../Redux/api/wishListApi/wishListApi';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const WishList = () => {
  const { id } = useParams();
  const [activeTabNo, setActiveTabNo] = useState(1);

  const [addReadingList] = useAddReadingListMutation();

  const activeTabClass = `bg-indigo-500 text-white `;
  const nonActiveTabClass = ` bg-white text-indigo-500 `;

  let options = {
    id: id,
    status: '',
  };

  let button = {
    th: '',
    title: '',
    img: '',
  };
  const ReadListButton: IButton = {
    th: 'Add to ReadList',
    title: 'ReadList',
    img: addButtonPic,
  };
  const FinishedButton: IButton = {
    th: 'Add to FinishList',
    title: 'FinishList',
    img: addButtonPic,
  };
  const UndoButton: IButton = {
    th: 'Undo',
    title: 'undo',
    img: undoButtonPic,
  };
  let action = null;

  const handleAddToReadList = async (book: IWishListBook) => {
    const result: any = await addReadingList({
      id: book._id,
      wishListUpdatedData: { status: 'reading' },
    });
    if (result.data.success) {
      toast.success('added to  reading list');
    }
  };
  const handleAddToFinishList = async (book: IWishListBook) => {
    const result: any = await addReadingList({
      id: book._id,
      wishListUpdatedData: { status: 'Finished' },
    });
    if (result.data.success) {
      toast.success('added to not finished list');
    }
  };
  const handleUndo = async (book: IWishListBook) => {
    const result: any = await addReadingList({
      id: book._id,
      wishListUpdatedData: { status: 'not read' },
    });

    if (result.data.success) {
      toast.success('undo from finish and added to not read list');
    }
  };

  if (activeTabNo === 1) {
    button = ReadListButton;
    action = handleAddToReadList;
    options.status = 'not read';
  } else if (activeTabNo === 2) {
    button = FinishedButton;
    action = handleAddToFinishList;
    options.status = 'reading';
  } else if (activeTabNo === 3) {
    button = UndoButton;
    options.status = 'Finished';
    action = handleUndo;
  }

  const { data: wishLists, error: wishError } = useGetAllWishListsQuery(
    options,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <div>
      <div>
        <div className="grid grid-cols-3 gap-5 mt-4">
          <button
            onClick={() => setActiveTabNo(1)}
            className={`  ${
              activeTabNo === 1 ? activeTabClass : nonActiveTabClass
            } p-4 rounded  shadow-md font-sans text-lg font-semibold `}
          >
            Not Read Book
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
            Finished
          </button>
        </div>
        <div className="shadow-xl lg:min-h-[400px] border border-gray-100 font-light lg:p-8 rounded text-gray-500 bg-white mt-6">
          {wishLists?.data.length > 0 ? (
            <BooksTable
              button={button}
              wishLists={wishLists}
              action={action}
              undo={handleUndo}
            ></BooksTable>
          ) : (
            <div className="w-full grid place-items-center">
              <h1 className="font-sans font-bold text-xl">No book added Yet</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishList;
