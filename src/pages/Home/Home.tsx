import BookCard from "../../components/BookCard";

const Home = () => {
  const books = [10, 12, 2123, 1234, 1234];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  mx-5 place-items-center mt-3">
        {books.map((book) => (
          <BookCard></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
