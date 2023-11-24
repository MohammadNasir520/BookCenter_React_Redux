import { Link } from 'react-router-dom';
import { IBook } from '../globalInterfaces/book.interface';
import { useAddToWishListMutation } from '../Redux/api/wishListApi/wishListApi';
import { useAppSelector } from '../Redux/hook';
import { toast } from 'react-hot-toast';

interface IProps {
  book: IBook;
}

const BookCard = ({ book }: IProps) => {
  const { title, author, genre, image, publicationDate, _id } = book;

  const userId = useAppSelector(state => state.user.user?._id);

  const [
    addToWishList,
    { data, isLoading, isError, isSuccess, error: addWishError },
  ] = useAddToWishListMutation();

  if (isSuccess) {
    toast.success('added to wishlist');
  }
  if (addWishError) {
    toast.error('this book already added to your wishlist');
  }
  const handleAddToWishList = (bookId: string | undefined) => {
    const options = {
      wishListData: {
        user: userId,
        book: bookId,
      },
    };

    addToWishList(options);
  };

  return (
    <div>
      <div className="my-2  relative">
        <Link to={`/bookdetails/${_id}`}>
          <div className="relative flex min-w-[350px] max-w-[20rem] h-[550px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 p-4 pb-1 flex justify-center overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
              <img
                className=" min-h-[300px] max-h-[350px] min-w-[280px] max-w-[20rem]   rounded-sm "
                src={image}
                alt="book"
              />
            </div>
            <div className="p-2">
              <h4 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {title}
              </h4>
            </div>

            <div className="px-3">
              {/* author  */}
              <div className=" flex space-x-2 items-center py-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <h3 className=" block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {author}
                </h3>
              </div>

              {/* Genre */}
              <div className=" flex space-x-2 items-center mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
                <h3 className=" block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {genre}
                </h3>
              </div>
              {/*publication date*/}
              <div className=" flex space-x-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>

                <h3 className=" block font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {publicationDate.toString()}
                </h3>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex  absolute bottom-1 right-2 items-center justify-between p-1">
          <button
            onClick={() => handleAddToWishList(_id)}
            className="flex  select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
            + WishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
