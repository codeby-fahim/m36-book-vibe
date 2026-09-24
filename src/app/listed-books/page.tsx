'use client'
import ListedBookCard from '@/components/bookDetails/ListedBookCard';
import { BooksContext, BooksContextType } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext, useState } from 'react';

const ListedBooks = () => {
  const {readBooks, wishlist} = useContext(BooksContext) as BooksContextType;
  const [shortBy, setShortBy] = useState<"rating"| "pages" | "year">("rating");



  const sortedBooks = (book: IBook[])=>{
    const sortedBooks = [...book];

    if(shortBy === "rating"){
      sortedBooks.sort((a, b)=> b.rating - a.rating);
    } else if( shortBy === "pages"){
      sortedBooks.sort((a, b)=> b.totalPages - a.totalPages);
    }else if(shortBy === "year"){
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;

  }

  const sortedReadBooks = sortedBooks(readBooks) ;
  const sortedWishlist = sortedBooks(wishlist) ;





  return (
    <div className='container mx-auto py-8'>
      <h2 className='my-4 bg-amber-100 py-16 text-center font-bold rounded-3xl text-4xl'>Listed Books</h2>
      {/* <h2>Total ReadBook List: {readBooks.length}</h2>
      <h2>Total Wishlist List: {wishlist.length}</h2> */}
      <div className='text-center'>
      <select 
         value={shortBy}
         onChange={(e)=> setShortBy(e.target.value as "rating"| "pages" | "year")}
         defaultValue="Pick a Runtime" className="select select-success">
        <option disabled={true}>Short By</option>
        <option value={"rating"}>Rating</option>
        <option value={"pages"}>Number of Pages</option>
        <option value={"year"}>Publisher Year</option>
      </select>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input type="radio" name="my_tabs_2" className="tab" aria-label={`Read Books (${readBooks.length})`} />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {
             sortedReadBooks.length > 0 ? sortedReadBooks.map((book:IBook)=>{
              return <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
            }) : (
              <p className='font-bold text-3xl text-center'>No Read Books Found</p>
            )
          }
        </div>

        <input type="radio" name="my_tabs_2" className="tab" aria-label={`Wishlist Books (${wishlist.length})`} defaultChecked />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {
             sortedWishlist.length > 0 ? sortedWishlist.map((book:IBook)=>{
              return <ListedBookCard book={book} key={book.bookId}></ListedBookCard>
            }) : (
              <p className='font-bold text-3xl text-center'>No WishList Books Found</p>
            )
          }
        </div>

        
      </div>
    </div>
  );
};

export default ListedBooks;






