import { useEffect, useState } from "react";
import { adminRequest, userRequest } from "../api/userApi";

const Dashboard = () => {

  const role: "ADMIN" | "USER" = localStorage.getItem('role') as "ADMIN" | "USER";
  
  const [data, setData] = useState<any>(null);

  async function fetchData() {
    try {
      if(role === "ADMIN") {
        const res = await adminRequest();
        setData(res);
      }
      else if (role === "USER") {
        const res = await userRequest();
        setData(res);
      }
    }catch (error) {
      console.error("error fetching dashboard data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="flex flex-col gap-8 justify-center items-center bg-gray-800 w-lvw h-lvh">
      <h1 className="text-6xl text-white">Dashboard</h1>
      <p className="text-xl text-white">Welcome, {role}!</p>

      {data ? (
        <div>
          <h2 className="text-xl text-white">Data:</h2>
          <p className="text-white">{data.message}</p>
          <p className="text-white">{data.userCount ? `User Count: ${data.userCount}` : null}</p>
        </div>
      ) : (
        <p className="text-white">Loading data...</p>
      )}

        <a href="/logout" className="text-white">
          <button className="p-4 bg-red-600 rounded-2xl">
            logout
          </button>
        </a>

    </div>
  )
}

export default Dashboard