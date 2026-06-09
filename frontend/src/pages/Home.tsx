import { useEffect, useState } from "react"
import { backendStatusRequest } from "../api/userApi";

const Home = () => {

  const [data, setData] = useState<any | null>(null);

  const fetchData = async() => {
    try { 
      const res = await backendStatusRequest();
      setData(res);
    }catch (error) {
      console.error("error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="bg-gray-800 text-white h-lvh w-lvw flex flex-col gap-8 items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      {data && <p className="mt-4 text-lg">Backend Status: {data.message}</p>}

      <a href="dashboard" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Dashboard
      </a>
      <a href="login" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Login
      </a>

    </div>  
  )
}

export default Home