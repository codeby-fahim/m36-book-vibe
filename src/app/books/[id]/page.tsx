// import { IBook } from '@/types/books.type';
// import React from 'react';

// interface IBookDetailPageProps{
//   params: Promise<{
//     id: string;
//   }>;
// }

// const getBooks = async () => {
//   const res = await fetch("http://localhost:3000/booksData.json");

//   if (!res.ok) {
//     throw new Error("Failed to fetch books");
//   }

//   const data = await res.json();
//   return data;
// };

// const BooksDetailPage = async({params}: IBookDetailPageProps) => {
//   const {id} = await params;
//   const booksData = await getBooks();
//   const book = booksData.find((book:IBook)=> String(book.bookId) === String(id));
 
//   return (
//     <div>
//       Books Details
//       <h2>{book.bookName}</h2>
//     </div>
//   );
// };

// export default BooksDetailPage;



import Image from "next/image";
import { IBook } from "@/types/books.type";
import { FaStar } from "react-icons/fa";
import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";

interface IBookDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async (): Promise<IBook[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL || 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const res = await fetch(`${baseUrl}/booksData.json`);
  // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

const BooksDetailPage = async ({
  params,
}: IBookDetailPageProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (book) => String(book.bookId) === String(id)
  );

  // If book doesn't exist
  if (!book) {
    return (
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Book Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          We couldnt find the book youre looking for.
        </p>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-10 md:py-16">
      <div className="grid items-center gap-10 rounded-3xl bg-white p-6 shadow-sm md:p-10 lg:grid-cols-2 lg:gap-16">

        {/* ================= LEFT : BOOK IMAGE ================= */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-[#f7f7f7] p-8 shadow-sm">
            <Image
              src={book.image}
              alt={book.bookName}
              width={500}
              height={700}
              className="mx-auto h-125 w-auto rounded-xl object-contain transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* ================= RIGHT : BOOK DETAILS ================= */}
        <div>

          {/* Category */}
          <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#23BE0A]">
            {book.category}
          </span>

          {/* Book Name */}
          <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="mt-4 text-lg text-gray-500">
            By{" "}
            <span className="font-semibold text-[#23BE0A]">
              {book.author}
            </span>
          </p>

          {/* Rating / Pages / Year */}
          <div className="mt-7 flex flex-wrap items-center gap-5 border-y border-gray-200 py-5">

            {/* Rating */}
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />

              <span className="font-bold text-gray-800">
                {book.rating}
              </span>

              <span className="text-gray-400">/ 5</span>
            </div>

            <div className="h-6 w-px bg-gray-300" />

            {/* Pages */}
            <div>
              <span className="font-semibold text-gray-800">
                {book.totalPages}
              </span>{" "}
              <span className="text-gray-500">Pages</span>
            </div>

            <div className="h-6 w-px bg-gray-300" />

            {/* Year */}
            <div>
              <span className="text-gray-500">Published: </span>

              <span className="font-semibold text-gray-800">
                {book.yearOfPublishing}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="font-semibold text-gray-700">
              Tags:
            </span>

            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-[#23BE0A]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Publisher + Category */}
          <div className="mt-7 grid grid-cols-2 gap-6 border-b border-gray-200 pb-7">

            <div>
              <p className="text-sm text-gray-400">
                Publisher
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                {book.publisher}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">
                Category
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                {book.category}
              </p>
            </div>

          </div>

          {/* Review */}
          <div className="mt-7">
            <h2 className="text-xl font-bold text-gray-900">
              About this book
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600 md:text-base">
              {book.review}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            
            <ReadButton book={book}></ReadButton>
            <WishListButton book={book}></WishListButton>


          </div>

        </div>
      </div>
    </section>
  );
};

export default BooksDetailPage;