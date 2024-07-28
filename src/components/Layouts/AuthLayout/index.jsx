import { Link } from "react-router-dom";
import Gap from "../../Elements/Gap";

export default function AuthLayout({ title, type, children }) {
  return (
    <div className="min-h-screen flex justify-center items-center font-poppins">
      <div className="w-full max-w-md p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          {title}
        </h1>
        <Gap y={0.2} />
        <p className="font-medium text-center tex-slate-500">
          Welcome, Please enter your detail
        </p>
        <Gap y={1.2} />
        {children}
        <div className="text-sm text-center mt-2">
          <p>
            {type === "login" ? "Don't have account?" : "Alredy have account?"}{" "}
            {type === "login" ? (
              <Link to="/register" className="text-blue-500 font-semibold">
                Registration
              </Link>
            ) : (
              <Link to="/login" className="text-blue-500 font-semibold">
                Login
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
