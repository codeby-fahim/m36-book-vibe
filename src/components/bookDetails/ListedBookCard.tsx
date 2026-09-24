
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IBook } from '@/types/books.type';
import { FiMapPin, FiUsers } from 'react-icons/fi';
import { IoDocumentTextOutline } from 'react-icons/io5';

const ListedBookCard = ({book}: {book: IBook}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-200 rounded-2xl bg-white mb-6 items-center">
      {/* Book Image Box */}
      <div className="bg-gray-100 p-6 rounded-2xl flex justify-center items-center w-full md:w-60 h-56 shrink-0">
        <div className="relative w-32 h-44 drop-shadow-md">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            className="object-contain rounded"
          />
        </div>
      </div>

      {/* Book Content */}
      <div className="grow space-y-4 w-full">
        {/* Title and Author */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{book.bookName}</h3>
          <p className="text-gray-600 font-medium mt-1">By : {book.author}</p>
        </div>

        {/* Tags & Year */}
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-800">Tag</span>
            {book.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-green-50 text-emerald-600 px-3 py-1 rounded-full font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FiMapPin className="text-lg" />
            <span>Year of Publishing: {book.yearOfPublishing}</span>
          </div>
        </div>

        {/* Publisher & Page count */}
        <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <FiUsers className="text-lg" />
            <span>Publisher: {book.publisher}</span>
          </div>
          <div className="flex items-center gap-2">
            <IoDocumentTextOutline className="text-lg" />
            <span>Page {book.totalPages}</span>
          </div>
        </div>

        <hr className="border-gray-200 my-2" />

        {/* Category, Rating, and Action Button */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            Category: {book.category}
          </span>
          <span className="bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-medium">
            Rating: {book.rating}
          </span>
          <Link href={`/books/${book.bookId}`}>
            <button className="bg-[#23BE0A] hover:bg-green-600 text-white font-medium px-5 py-2 rounded-full text-sm transition-colors">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;