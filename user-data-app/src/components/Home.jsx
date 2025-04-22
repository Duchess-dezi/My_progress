import UserList from "./UserList";
import useFetch from "../useFetch";

const Home = () => {
    const {data: users, isPending, error } = useFetch('http://localhost:8000/users')
  return (
    <>
    {error && <p>{error}</p>}
    {isPending && <p>Loading users...</p>}
    {users && <UserList users={users} />}
    </>
  )
}

export default Home;