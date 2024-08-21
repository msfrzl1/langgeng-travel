import { Link } from "react-router-dom";
import Gap from "../../Elements/Gap";

export default function AuthLayout({ title, type, children }) {
  return (
    <div className="flex min-h-screen items-center justify-center font-poppins">
      <div
        className={`w-full ${
          type === "login" ? "max-w-md" : "max-w-xl"
        } m-0 rounded-lg px-4 py-8 shadow-none sm:m-5 sm:shadow-lg`}
      >
        <h1 className="text-center text-3xl font-bold text-gray-800">
          {title}
        </h1>
        <Gap y={0.2} />
        <p className="tex-slate-500 text-center font-medium">
          Welcome, Please enter your detail
        </p>
        <Gap y={1.2} />
        {children}
        <div className="mt-2 text-center text-sm">
          <p>
            {type === "login" ? "Don't have account?" : "Alredy have account?"}{" "}
            {type === "login" ? (
              <Link to="/register" className="font-semibold text-blue-500">
                Registration
              </Link>
            ) : (
              <Link to="/login" className="font-semibold text-blue-500">
                Login
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
