import { adminRequest, userRequest } from "../api/userApi";
import { useQuery } from "@tanstack/react-query";
import UserCard from "../components/UserCard";
import AdminCard from "../components/AdminCard";

const Dashboard = () => {

  const role: "ADMIN" | "USER" = localStorage.getItem('role') as "ADMIN" | "USER";

  async function fetchData() {
    try {
      if(role === "ADMIN") {
        const res = await adminRequest();
        return res;
      }
      else if (role === "USER") {
        const res = await userRequest();
        return res;
      }
    }catch (error) {
      console.error("error fetching dashboard data:", error);
    }
  }

  const {data, isLoading, error} = useQuery({
    queryKey: ['dashboardData', role],
    queryFn: fetchData,
  })


  if(isLoading) {
    return (
      <div className="flex flex-col gap-8 justify-center items-center bg-gray-800 w-lvw h-lvh">
        <h1 className="text-6xl text-white">Dashboard</h1>
        <p className="text-xl text-white">Welcome, {role}!</p>
        <p className="text-white">Loading data...</p>
      </div>
    )
  }

  if(error) {
    return (
      <div className="flex flex-col gap-8 justify-center items-center bg-gray-800 w-lvw h-lvh">
        <h1 className="text-6xl text-white">Dashboard</h1>
        <p className="text-xl text-white">Welcome, {role}!</p>
        <p className="text-white">Error loading data.</p>
      </div>
    )
  }
 

  return (
    <div className="flex flex-col gap-8 justify-center items-center bg-gray-800 w-lvw h-lvh">
      <h1 className="text-6xl text-white">Dashboard</h1>
      <p className="text-xl text-white">Welcome, {role}!</p>

      {data && role === "USER" && <UserCard data={data} />}
      {data && role === "ADMIN" && <AdminCard data={data} />}


      <a href="/logout" className="text-white">
        <button className="p-4 bg-red-600 rounded-2xl">
          logout
        </button>
      </a>

    </div>
  )
}

export default Dashboard