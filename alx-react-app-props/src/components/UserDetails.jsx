import { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
  const {user} = useContext(UserContext);
  return (
    <div>
      <p>Name: {user}</p>
      <p>Email: {user}</p>
    </div>
  );
}

export default UserDetails;