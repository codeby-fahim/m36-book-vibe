'use client'
import { BooksContext, BooksContextType } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { Bounce, toast } from 'react-toastify';

const ReadButton = ({book}:{book: IBook}) => {
  
  const {readBooks, setReadBooks} = useContext(BooksContext) as BooksContextType;

  const handleReadBook=()=>{
    setReadBooks([...readBooks, book]);
    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });
  }


  return (
    
      <button onClick={()=> handleReadBook()} className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-8 py-3.5 font-semibold text-gray-800 transition-all duration-300 hover:border-[#23BE0A] hover:text-[#23BE0A] cursor-pointer">
              <FaBookOpen />
              Read
            </button>
    
  );
};

export default ReadButton;