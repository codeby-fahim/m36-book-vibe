
import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/types/books.type";

const getBooks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await res.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-14">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Explore All Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
          Explore our collection of popular books and discover your next
          favorite read.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book:IBook) => {
          return <BookCard book={book} key={book.bookId}></BookCard>
        })}
      </div>
    </section>
  );
};

export default Books;