import { Link } from "react-router-dom";
import BookCard from "../../components/BookCard";
import SearchAndFilter from "../../components/SearchAndFilter";

import { IBook } from "../../globalInterfaces/book.interface";
import { useGetBooksQuery } from "../../Redux/api/booksApi/booksApi";

const AllBooks = () => {
  const { data, error, isLoading } = useGetBooksQuery(null);
  console.log(data, error, isLoading);
  return (
    <div>
      <Link to={"/addbook"}>
        <button
          className="middle absolute right-3 none center rounded-lg bg-green-800 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Add Book
        </button>
      </Link>
      <SearchAndFilter></SearchAndFilter>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  mx-5 place-items-center mt-3">
        {data?.data?.map((book: IBook) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
