import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookCardProps{
  book: IBook;
}

const BookCard = ({book}: IBookCardProps) => {
  return (
    <div>
       <div
            
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={book.image}
                alt={book.bookName}
                width={800}
                height={600}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Category Badge */}
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#23BE0A] shadow-sm backdrop-blur-sm">
                {book.category}
              </span>
            </div>

            {/* Content */}
            <div className="pt-5">
              {/* Book name */}
              <h3 className="line-clamp-1 text-xl font-bold text-gray-900">
                {book.bookName}
              </h3>

              {/* Author */}
              <p className="mt-1 text-sm text-gray-500">
                by{" "}
                <span className="font-medium text-gray-700">
                  {book.author}
                </span>
              </p>

              {/* Rating + Pages */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-lg">⭐</span>
                  <span className="font-semibold text-gray-800">
                    {book.rating}
                  </span>
                  <span className="text-sm text-gray-400">/ 5</span>
                </div>

                <span className="text-sm text-gray-500">
                  {book.totalPages} pages
                </span>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom */}
              <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <p className="text-xs text-gray-400">Published</p>
                  <p className="text-sm font-semibold text-gray-700">
                    {book.yearOfPublishing}
                  </p>
                </div>

                <Link href={`/books/${book.bookId}`}>
                <button className="rounded-lg bg-[#23BE0A] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1fa609] hover:shadow-md  cursor-pointer">
                  View Details
                </button>
                </Link>
              </div>
            </div>
          </div>
    </div>
  );
};

export default BookCard;