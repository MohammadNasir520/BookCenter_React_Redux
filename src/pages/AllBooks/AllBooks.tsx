import { Link } from "react-router-dom";
import BookCard from "../../components/BookCard";
import { IBook } from "../../globalInterfaces/book.interface";
import {
  useGetBooksBySearchAndFilterQuery,
  useGetBooksQuery,
} from "../../Redux/api/booksApi/booksApi";
import { useState } from "react";
import FullPageSpinner from "../../shared/FullPageSpinner";

const AllBooks = () => {
  const [searchText, setSearchText] = useState("");
  const [genre, setGenre] = useState("");
  const [publicationYear, setpublicationYear] = useState("");

  const {
    data,
    error,
    isLoading: filterLoading,
  } = useGetBooksBySearchAndFilterQuery({
    searchText,
    genre: genre || undefined,
    publicationYear: publicationYear || undefined,
  });

  const { data: books, isLoading, isError } = useGetBooksQuery(undefined);

  //uniq genre getting
  let filteredGenre = new Set();
  books?.data.forEach((book: IBook) => {
    filteredGenre.add(book.genre);
  });
  const filteredGenreArray = Array.from(filteredGenre) as string[];

  //finding year for selected genre
  const selectedGenresYear = books?.data?.filter(
    (book: IBook) => book.genre == genre
  );

  //uniq year getting from searched books selectedGenresYear
  let filteredYear = new Set();
  selectedGenresYear?.forEach((book: IBook) => {
    filteredYear.add(book.publicationDate);
  });
  const filteredYearArray = Array.from(filteredYear) as string[];

  //........
  //uniq year getting from allbooks
  let filteredYearFromAllBooks = new Set();
  books?.data?.forEach((book: IBook) => {
    filteredYearFromAllBooks.add(book.publicationDate);
  });
  const filteredYearArrayFromallBooks = Array.from(
    filteredYearFromAllBooks
  ) as string[];

  console.log("year", filteredYearArrayFromallBooks);

  console.log("sy", selectedGenresYear);
  const handleSearch = (event: any) => {
    event?.preventDefault();
    const searchText = event.target.searchText.value;
    setSearchText(searchText);
  };
  if (isLoading) {
    return <FullPageSpinner></FullPageSpinner>;
  }
  return (
    <div>
      {/* <Link to={"/addbook"}>
        <button
          className="middle absolute right-3 none center rounded-lg bg-green-800 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Add Book
        </button>
      </Link> */}

      {/* <SearchAndFilter></SearchAndFilter> */}
      {/* search and filter start */}
      <div className=" mt-3 mb-8 flex justify-center  ">
        <div className="flex flex-col-reverse ">
          <div className=" flex space-x-2 mt-2">
            {/* select genre */}
            <div className="relative h-10 w-52 min-w-[200px]">
              <select
                onChange={(event) => {
                  setGenre(event.target.value),
                    setSearchText(""),
                    setpublicationYear("");
                }}
                className="peer h-full w-full outline-none rounded-[3px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-1 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              >
                <option disabled value="">
                  select Genre
                </option>
                {filteredGenreArray.map((value: string) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <label className=" font-sans before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Genre
              </label>
            </div>

            {/* select year  */}
            <div className="relative h-10 w-52 min-w-[200px]">
              <select
                defaultValue={""}
                onChange={(event) => {
                  setpublicationYear(event.target.value);
                }}
                className="peer h-full w-full rounded-[2px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-100 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-1 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              >
                <option disabled>year</option>
                {filteredYearArray.length ? (
                  <>
                    {filteredYearArray.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}{" "}
                  </>
                ) : (
                  <>
                    {filteredYearArrayFromallBooks.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}{" "}
                  </>
                )}
              </select>
              <label className=" font-sans before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Year
              </label>
            </div>
            {searchText || genre || publicationYear ? (
              <button
                onClick={() => {
                  setGenre(""), setpublicationYear(""), setSearchText("");
                }}
                className="middle absolute right-3 none center rounded-lg bg-green-800 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                clear previous search
              </button>
            ) : (
              ""
            )}
          </div>
          {/* search Input */}
          <form onSubmit={handleSearch}>
            <div className="relative flex h-10 w-full min-w-[200px] ">
              <input
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                type="text"
                name="searchText"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                required
              />
              <button
                className=" font-sans !absolute   right-1 top-1 z-10 select-none rounded bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none cursor-pointer !important"
                type="submit"
              >
                search
              </button>
              <label className=" font-sans before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-800 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-slate-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Search Books
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* serch and filter end */}

      {/* books */}
      {data?.data.length == 0 ? (
        <div className="h-screen grid place-items-center font-sans font-bold text-3xl w-full">
          <h1> No Books Found </h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  mx-5 place-items-center mt-3">
          {data?.data?.map((book: IBook) => (
            <BookCard key={book._id} book={book}></BookCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;
