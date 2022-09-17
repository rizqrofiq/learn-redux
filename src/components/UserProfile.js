import { useSelector } from "react-redux";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const username = useSelector((state) => state.auth.username);
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <small style={{ textAlign: "center" }}>Username: {username}</small>
    </main>
  );
};

export default UserProfile;
