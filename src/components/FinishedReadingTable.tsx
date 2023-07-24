import { useEffect } from "react";
import { Link } from "react-router-dom";
import addButtonPic from "../assets/add-button.png";

const FinishedReadingTable = () => {
  const books = [
    {
      author: "Dracula",
      imageUrl: "https://pictures.abebooks.com/inventory/31367552755.jpg",
      email: "Author",
      role: "admin",
      district: "sirajgonj",
      batch: "2020",
    },
    {
      author: "Dracula",
      imageUrl: "https://pictures.abebooks.com/inventory/31367552755.jpg",
      email: "Author",
      role: "admin",
      district: "sirajgonj",
      batch: "2020",
    },
    {
      author: "Dracula",
      imageUrl: "https://pictures.abebooks.com/inventory/31367552755.jpg",
      email: "Author",
      role: "admin",
      district: "sirajgonj",
      batch: "2020",
    },
  ];

  useEffect(() => {}, []);

  const handleDelete = () => {};
  const handleApprove = () => {};

  return (
    // <!-- component -->
    <div className="overflow-hidden  border border-gray-200 shadow-md  ">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-2 py-4 font-medium text-gray-900">
              Books
            </th>
            <th scope="col" className="px-2 py-4 font-medium text-gray-900">
              Genre
            </th>
            <th scope="col" className="px-2 py-4 font-medium text-gray-900">
              publication Year
            </th>
            <th scope="col" className="px-2 py-4 font-medium text-gray-900">
              Reading status
            </th>
            <th scope="col" className="px-2 py-4 font-medium text-gray-900">
              add to readList
            </th>
            <th scope="col" className="px-2 py-4 font-medium text-gray-900">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {books.map((user) => (
            <tr className="hover:bg-gray-50">
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="h-10 w-10">
                  <img
                    className="h-full w-full  object-cover object-center"
                    src={user.imageUrl}
                    alt=""
                  />
                  {/* <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span> */}
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">{user.author}</div>
                  <div className="text-gray-400">{user?.email}</div>
                </div>
              </th>

              {/* batch */}
              <td className="md:px-6 py-4">
                <span className="inline-flex items-center gap-1    py-1  font-semibold">
                  {user?.batch}
                </span>
              </td>
              <td className="md:px-6 py-4">{user?.district}</td>

              <td className="md:px-6 py-4">
                <div className="flex gap-2">
                  <span className="inline-flex items-center text-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                    {user.role}
                  </span>

                  {/* approve button */}
                  {user.role === "requested" && (
                    <span className=" cursor-pointer inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-bold text-green-500">
                      approve
                    </span>
                  )}
                  {/* <span
                                            className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                                        >
                                            Develop
                                        </span> */}
                </div>
              </td>

              {/*............................. edit button............................. */}
              <td className="md:px-6 py-4 cursor-pointer">
                <div className="flex text-center gap-4">
                  <img className="h-6 w-6" src={addButtonPic} alt="" />
                </div>
              </td>

              {/*.............................delete button............................. */}
              <td className="md:px-6 py-4">
                <div className="flex  gap-4">
                  <Link x-data="{ tooltip: 'Delete' }" to={""}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 text-red-600"
                      x-tooltip="tooltip"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinishedReadingTable;
