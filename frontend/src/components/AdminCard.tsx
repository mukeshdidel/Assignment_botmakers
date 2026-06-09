
const AdminCard = ({data}: {data: any}) => {
    
    

  return (
    <div className="bg-blue-900 p-8 rounded-2xl">
      <h2 className="text-xl text-white">Admin Data:</h2>
      <p className="text-white">{data.message}</p>
      <p className="text-white">{data.userCount ? `User Count: ${data.userCount}` : null}</p>
    </div>
  )
}

export default AdminCard