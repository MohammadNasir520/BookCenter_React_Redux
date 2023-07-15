const BookCard = () => {
  return (
    <div className="my-2">
      <div className="relative flex max-w-[20rem] h-[500px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img
            src="https://pictures.abebooks.com/inventory/31367552755.jpg"
            alt="ui/ux review check"
          />
        </div>
        <div className="p-2">
          <h4 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Dracula
          </h4>
          <p className="mt-1 block font-sans text-lg font-normal leading-normal text-gray-700 antialiased">
            Because it's about my
          </p>
        </div>
        <div className="flex items-center justify-between p-1">
          <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
            January 10
          </p>
          <button
            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="relative flex max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img
            src="https://pictures.abebooks.com/inventory/31421147311.jpg"
            alt="ui/ux review check"
          />
        </div>
        <div className="p-2">
          <h4 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Dracula
          </h4>
          <p className="mt-1 block font-sans text-lg font-normal leading-normal text-gray-700 antialiased">
            Because it's about my
          </p>
        </div>
        <div className="flex items-center justify-between p-1">
          <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
            January 10
          </p>

          {/* details button */}

          <button
            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
