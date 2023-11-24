import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from '../../Redux/api/booksApi/booksApi';
import { toast } from 'react-hot-toast';
import { useAppSelector } from '../../Redux/hook';
import { useAddToWishListMutation } from '../../Redux/api/wishListApi/wishListApi';

const BookDetailsCard = () => {
  const userId = useAppSelector(state => state.user.user?._id);

  const [addToWishList, { isSuccess: addTowishlist, error: addWishError }] =
    useAddToWishListMutation();

  if (addTowishlist) {
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
  const loggedInUserId = useAppSelector(state => state.user.user?._id);

  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const { data } = useGetSingleBookQuery(id);

  const [deleteBook, { data: deleteData }] = useDeleteBookMutation();

  const handleDelete = () => {
    deleteBook(id);
  };
  if (deleteData?.success === true) {
    toast.success(`${deleteData?.data?.title} is deleted`);
    navigate('/');
  }

  const isUserMatch = loggedInUserId === data?.data?.user;

  return (
    <div className="w-full lg:h-[400px] flex justify-center mt-6 ">
      <div className="relative flex ju flex-col w-full justify-center max-w-[48rem] md:flex-row rounded-sm bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 md:w-2/5  flex justify-center shrink-0 overflow-hidden rounded-sm rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={data?.data?.image} alt="image" className="  max-w-full  " />
        </div>
        <div className="p-6 flex flex-col justify-center w-full">
          {/* <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            startups
          </h6> */}

          {/* book name */}
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {data?.data?.title}
          </h4>

          {/* author  */}
          <div className=" flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <h3 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {data?.data?.author}
            </h3>
          </div>

          {/* Genre */}
          <div className=" flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            <h3 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {data?.data?.genre}
            </h3>
          </div>
          {/*publication date*/}
          <div className=" flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>

            <h3 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {data?.data?.publicationDate}
            </h3>
          </div>

          <div className="flex">
            <a className="inline-block" href="#">
              <button
                onClick={() => {
                  handleAddToWishList(data?.data?._id);
                }}
                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                + wishList
              </button>
            </a>

            {isUserMatch && loggedInUserId && (
              <>
                <Link to={`/editbook/${id}`}>
                  <button
                    className="middle none center rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-green-500 transition-all hover:bg-green-500/10 active:bg-green-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-dark="true"
                  >
                    Edit
                  </button>
                </Link>

                <button
                  // onClick={handleDelete}
                  onClick={() => setShowModal(true)}
                  className="middle none center rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-dark="true"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ..........................modal....................... */}

      <div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto lg:w-5/12">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-1  rounded-t">
                    <h3 className="text-lg font-semibold mx-3">
                      Want to Delete book?
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}

                  <div className="px-4 py-3">
                    <h1>After deleting, the book will not be undone</h1>
                  </div>

                  {/*footer*/}
                  <div className="flex items-center justify-end  rounded-b">
                    <button
                      onClick={() => setShowModal(false)}
                      className=" text-green-600 active:bg-emerald-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      close
                    </button>
                    <button
                      onClick={handleDelete}
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default BookDetailsCard;
