import { useForm } from "react-hook-form";
import { registerUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

type formData = {
  name: string;
  email: string;
  password: string;
  role: "USER" | "ADMIN";
}


const Register = () => {

  const navigate = useNavigate();
  

  const { register, handleSubmit, formState: { errors, isSubmitting } } = 
    useForm<formData>({
      defaultValues: {
        role: "USER"
      }
  });

  const onSubmit = async (data: formData) => {
    try{
        const res = await registerUser(data);
        localStorage.setItem("token", res.token);
        localStorage.setItem("role", res.role);
        console.log("Registration successful", res);
        navigate("/dashboard");
    }catch(err){
      console.error("Registration failed", err);
    }
  }


  return (
    <div className="w-lvw h-lvh flex items-center justify-center bg-gray-800">
        <div className="p-12 flex flex-col items-center justify-center bg-gray-700 rounded-lg text-white gap-4">
          <h1 className="text-2xl font-bold text-white mb-4">Register</h1>
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col gap-8"
          >
            <input
              {
                ...register("name", { required: "Name is required" })
              }
              placeholder="name"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}

            <input
              {
                ...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                })
              }
              placeholder="email"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <input
              type="password"
              {
                ...register("password", { 
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })
              }
              placeholder="password"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

            <select {...register("role")}>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>

            <button type="submit" disabled={isSubmitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {isSubmitting ? "Registering..." : "Register"}
            </button>

            <a href="/login" className="text-blue-500 hover:text-blue-700">Login</a>

          </form>
        </div>
    </div>
  )
}

export default Register