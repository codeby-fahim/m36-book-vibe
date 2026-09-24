// 'use client'

// import React, { createContext, ReactNode, useState } from 'react';

// export const BooksContext = createContext({});

// const BooksProvider = ({children}:{children: ReactNode}) => {
//   const [readBooks, setReadBooks] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const sharedData = {
//     readBooks,
//     setReadBooks,
//     wishlist,
//     setWishlist
//   }

//   return (
//       <BooksContext.Provider value={sharedData}>
//         {children}
//       </BooksContext.Provider>
//   );
// };

// export default BooksProvider;


'use client'

import { IBook } from '@/types/books.type';
import React, { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';
 // আপনার প্রজেক্টের IBook টাইপ বা ইন্টারফেসের সঠিক পাথ দিন

// ১. কনটেক্সট ডেটার জন্য টাইপ ডিফাইন করুন
export interface BooksContextType {
  readBooks: IBook[];
  setReadBooks: Dispatch<SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setWishlist: Dispatch<SetStateAction<IBook[]>>;
}

// ২. createContext-এ টাইপটি নির্দিষ্ট করে দিন
export const BooksContext = createContext<BooksContextType | null>(null);

const BooksProvider = ({ children }: { children: ReactNode }) => {
  // useState-এ টাইপ বলে দিন
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);

  const sharedData: BooksContextType = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={sharedData}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;