import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../Redux/api/userApi/userApi";
import { toast } from "react-hot-toast";
import { useAppDispatch } from "../../Redux/hook";
import { setUser } from "../../Redux/features/userSlice";

const Login = () => {
  const [login, { data, isError, isSuccess, isLoading }] = useLoginMutation();
  console.log(data, isError, isLoading, isSuccess);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const options = {
      user: {
        email: email as string,
        password: password as string,
      },
    };
    const loggedInData: any = await login(options);
    console.log("logindata", loggedInData?.data?.data);
    if (loggedInData?.data?.success === true) {
      form.reset();

      localStorage.setItem("user", JSON.stringify(loggedInData.data.data));
      dispatch(setUser(loggedInData.data.data));
      toast.success("logged in successful");
      navigate("/");
    }
  };
  return (
    <div className="  rounded-md">
      <div className="mx-auto max-w-screen-xl  px-4 py-16 sm:px-6 lg:px-8  ">
        <div className="mx-auto max-w-lg shadow-xl bg-gray-400  shadow-cyan-100">
          <form
            onSubmit={handleSubmit}
            action=""
            className="mb-0 mt-6 space-y-1 rounded-lg p-2 shadow:p-6 lg:p-8 text-white"
          >
            <p className="text-center text-lg font-medium ">
              {" "}
              SignIn to Your account
            </p>

            <div>
              <div className="relative">
                <label htmlFor="email" className="">
                  Your Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-lg border-gray-200 p-2 pe-12  text-slate-900 font-sans shadow-sm outline-none"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div className="mb-2">
              <label htmlFor="password" className=" ">
                {" "}
                Password
              </label>
              <div className="relative">
                <input
                  required
                  type="password"
                  name="password"
                  className="w-full  rounded-lg  text-slate-900 font-sans  border-gray-200 p-2 pe-12  shadow-sm outline-none"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg  bg-slate-700 hover:bg-slate-900 focus:bg-slate-700 text-white px-5 py-3 text-sm font-medium text-white"
            >
              SignIn
            </button>

            <p className="text-center text-lg text-white">
              No account?
              <Link
                to={"/signup"}
                className="underline  bg-transparent text-zinc-200 mx-2 font-bold "
              >
                SignUp
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
