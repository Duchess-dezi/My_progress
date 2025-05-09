import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

function UserDetails() {
    const { id } = useParams();
    const { data: user, error, isPending } = useFetch('http://localhost:8000/users/' + id);
  return (
   <>
   <section>
    {isPending && <p>Loading user details...</p>}

    {error && <p>{error}</p>}

    {user && (
        <div>
            <h1>User {user.id} details</h1>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.number}</p>
        </div>
    )}
   </section>
   </> 
  )
}

export default UserDetails;