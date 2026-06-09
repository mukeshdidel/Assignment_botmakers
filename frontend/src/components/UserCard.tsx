
const UserCard = ({data}: {data: any}) => {
  return (
    <div className="bg-green-900 p-8 rounded-2xl">
        <h2 className="text-xl text-white">Data:</h2>
        <p className="text-white">{data.message}</p>
    </div>
  )
}

export default UserCard