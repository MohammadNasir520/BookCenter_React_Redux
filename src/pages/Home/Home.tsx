import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../../Redux/api/booksApi/booksApi";
import BookCard from "../../components/BookCard";
import { IBook } from "../../globalInterfaces/book.interface";
import FullPageSpinner from "../../shared/FullPageSpinner";

const Home = () => {
  const { data, error, isLoading } = useGetBooksQuery(null, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  console.log(data, error, isLoading);

  if (isLoading) {
    return <FullPageSpinner></FullPageSpinner>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  mx-5 place-items-center mt-3">
        {data?.data?.map((book: IBook) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>

      {/* see more button */}
      <Link to={"/allbooks"}>
        <button
          className="flex mx-auto my-5 select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-800 transition-all hover:bg-gray-500/10 active:bg-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-dark="true"
        >
          <h4 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            See More
          </h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default Home;
