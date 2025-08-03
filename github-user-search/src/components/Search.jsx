import React from "react";
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserData(null);
    setError("");
    setLoading(true);

    console.log("Searching GitHub user:", username);
    try {
      const data = await fetchUserData(username);
      console.log("Github user data:", data);
      setUserData(data);
    } catch (error) {
      setError("Looks like we cant find the user");
      console.error("Error fetching user:", error.message);
    }
    setLoading(false);
    setUsername("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Github Username"
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {loading && (
        <h1>Loading...</h1>
      )}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt="user's avatar" />
          <p>{userData.name}</p>
          <p>Username: {userData.login}</p>
          <a href={userData.html_url} target="_blank">
            View Github profile
          </a>
        </div>
      )}
    </div>
  );
}
export default Search;
