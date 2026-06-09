import { useForm } from "react-hook-form";
import { loginUser } from "../api/authApi";
import { useNavigate} from "react-router-dom";

type formData = {
  email: string;
  password: string;
}


const Login = () => {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { isSubmitting } } = 
    useForm<formData>();

  const onSubmit = async (data: formData) => {
    try{
        const res = await loginUser(data);
        localStorage.setItem("token", res.token);
        localStorage.setItem("role", res.role);
        console.log("Login successful", res);
        navigate("/dashboard");
    }catch(err){
      console.error("Login failed", err);
    }
  }


  return (
    <div className="w-lvw h-lvh flex items-center justify-center bg-gray-800">
        <div className="p-12 flex flex-col items-center justify-center bg-gray-700 rounded-lg text-white gap-4">
          <h1 className="text-2xl font-bold text-white mb-4">Login</h1>
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col gap-8"
          >
            <input
              {
                ...register("email")
              }
              placeholder="email"
            />
            <input
              type="password"
              {
                ...register("password")
              }
              placeholder="password"
            />
            <button type="submit" disabled={isSubmitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
            
            <a href="/register" className="text-blue-500 hover:text-blue-700">Sign up</a>

          </form>
        </div>
    </div>
  )
}

export default Login