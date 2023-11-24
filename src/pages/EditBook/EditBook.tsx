import { toast } from 'react-hot-toast';
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from '../../Redux/api/booksApi/booksApi';

import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { uploadImage } from '../../api/uploadImage';
import { IBook } from '../../globalInterfaces/book.interface';

const EditBook = () => {
  const { id } = useParams();
  const [updatedData, setUpdatedData] = useState<Partial<IBook>>({});
  const [image, setImage] = useState('');
  const [disable, setDisable] = useState(false);

  const { data: book } = useGetSingleBookQuery(id);

  const [updateBook, { isLoading, isSuccess }] = useUpdateBookMutation();

  const navigate = useNavigate();

  const handleImageUpload = (event: any) => {
    setDisable(true);
    const form = event.target;
    const image = form.files[0];
    uploadImage(image).then(url => {
      if (url) {
        setImage(url);
        setDisable(false);
      }
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    let options = {
      id: id,
      data: updatedData,
    };

    if (image) {
      options.data.image = image;
    }

    updateBook(options);
  };
  if (isSuccess) {
    toast.success('your book is updated');
    navigate('/');
  }

  return (
    <div>
      <div className="bg-gray-100 py-2 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-lg sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="block pl-2 justify-center font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Edit book</h2>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="divide-y divide-gray-200">
                  <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <label className="leading-loose font-sans">
                        Book Title
                      </label>
                      <input
                        onChange={event =>
                          setUpdatedData({
                            ...updatedData,
                            title: event.target.value,
                          })
                        }
                        defaultValue={book?.data?.title}
                        name="title"
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Book title"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Book Author</label>
                      <input
                        onChange={event =>
                          setUpdatedData({
                            ...updatedData,
                            author: event.target.value,
                          })
                        }
                        defaultValue={book?.data?.author}
                        name="author"
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="author name"
                      />
                    </div>

                    <div className=" flex items-center space-x-4">
                      <div className="flex flex-col">
                        <label className="leading-loose">Genre</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            onChange={event =>
                              setUpdatedData({
                                ...updatedData,
                                genre: event.target.value,
                              })
                            }
                            defaultValue={book?.data?.genre}
                            name="genre"
                            type="text"
                            className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Genre"
                          />
                          <div className="absolute left-3 top-2"></div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose">
                          Publication year
                        </label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            onChange={event =>
                              setUpdatedData({
                                ...updatedData,
                                publicationDate: event.target.value,
                              })
                            }
                            defaultValue={book?.data?.publicationDate}
                            name="date"
                            type="text"
                            className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="2020"
                          />
                          <div className="absolute left-3 top-2"></div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="flex flex-col">
                    <label className="leading-loose">Book Description</label>
                    <input
                    
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Optional"
                    />
                  </div> */}

                    {/* upload pic form */}
                    <div className="my-3">
                      <div className=" justify-center  ">
                        <label className=" h-[67px]  flex flex-col items-center  bg-[#d7ccc8] text-blue  shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                          <svg
                            className="w-full h-6"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          <span className="mt-2 text-xs lg:text-base leading-normal">
                            upload pic
                          </span>
                          <input
                            onChange={handleImageUpload}
                            accept="image/*"
                            name="image"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center space-x-4">
                    {/* <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                      <svg
                        className="w-6 h-6 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>{" "}
                      Cancel
                    </button> */}
                    <button
                      disabled={disable ? true : false}
                      className="bg-blue-500 disabled:bg-blue-300 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                    >
                      <>
                        {isLoading
                          ? 'uploading'
                          : isSuccess
                          ? 'updated'
                          : 'update'}
                      </>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
