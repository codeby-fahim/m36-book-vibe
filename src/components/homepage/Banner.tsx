
import Image from "next/image";
import hero from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
      <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-[#fbf2f2] p-6 md:p-10 lg:grid-cols-2 lg:p-16">
        
        {/* Content */}
        <div className="order-2 lg:order-1">
          <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-[#23BE0A] shadow-sm">
            Discover Your Next Read
          </span>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Books to freshen up
            <br />
            your bookshelf
          </h1>

          <p className="mb-8 max-w-lg text-base leading-7 text-gray-600 md:text-lg">
            Explore amazing books, discover new stories, and find your next
            favorite read.
          </p>

          <button className="rounded-lg bg-[#23BE0A] px-7 py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#1fa609] hover:shadow-lg cursor-pointer">
            View The List
          </button>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={hero}
              alt="A collection of books"
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;