/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";

import SingleReviewCard from "./SingleReviewCard";
import {
  useGetSingleReviewQuery,
  usePostBookReviewMutation,
} from "../../Redux/api/booksApi/booksApi";
import { useAppSelector } from "../../Redux/hook";
import { toast } from "react-hot-toast";

const ReviewsSection = () => {
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.user);

  const { data: reviews } = useGetSingleReviewQuery(id);
  console.log("review", reviews?.data);

  const [postBookComment, { data }] = usePostBookReviewMutation();
  console.log("post review", data);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!user) {
      return toast.error("please signIn to review");
    }

    const reviewText = event.target.elements.review.value;
    if (!reviewText) {
      return toast.error("please type your review to review");
    }
    const options = {
      data: {
        book: id,
        reviewText: reviewText,
        user: user?._id,
      },
    };
    const commentData: any = await postBookComment(options);
    console.log("comment", commentData);
    if (commentData?.data?.success) {
      toast.success("your review added");
      event.target.reset();
    }
  };
  console.log("post revview2");
  return (
    <div className="mt-7">
      {/* create reviews */}
      <form onSubmit={handleSubmit} className="flex justify-center">
        <div className="flex items-center">
          {/* text area */}
          <div className="w-[60%]  lg:w-96  ">
            <div className="relative w-full min-w-[200px]">
              <textarea
                className="peer h-[63px]  w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                name="review"
              ></textarea>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                write your review
              </label>
            </div>
          </div>

          {/* post button */}
          <button type="submit" className={`disabled:opacity-50`}>
            <span className="  text-white h-[65px] text-sm font-bold rounded-lg bg-gray-700  flex items-center px-4 cursor-pointer">
              add review
            </span>
          </button>
        </div>
      </form>

      {/* review show card  */}
      {reviews?.data.length > 0 ? (
        reviews?.data?.map((review: any) => {
          return <SingleReviewCard review={review}></SingleReviewCard>;
        })
      ) : (
        <div className=" flex justify-center mt-5 text-2xl font-sans font-bold">
          <h1>No Review Yet, Please add</h1>
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;
