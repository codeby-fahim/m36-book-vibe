'use client'
import { BooksContext, BooksContextType } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import  { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Bounce, toast } from 'react-toastify';

const WishListButton = ({book}:{book: IBook}) => {

  const {wishlist, setWishlist} = useContext(BooksContext) as BooksContextType;

  const handleWishList=()=>{
    setWishlist([...wishlist, book]);
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
    <button onClick={()=> handleWishList()} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#23BE0A] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#1fa609] hover:shadow-lg cursor-pointer">
              <FaHeart />
              Add to Wishlist
            </button>
  );
};

export default WishListButton;