import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";
import "../index.css";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repo, setRepo] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsers([]);
    setError("");
    setLoading(true);

    try {
      const data = await fetchUserData(username, location, parseInt(repo, 10));

      const locationMatch = location
        ? data.location?.toLowerCase().includes(location.toLowerCase())
        : true;

      const repoMatch = repo ? data.public_repos >= parseInt(repo, 10) : true;

      if (locationMatch && repoMatch) {
        setUsers([data]);
      } else {
        setError("No user matches the advanced criteria.");
      }
    } catch {
      setError("Looks like we can't find the user.");
    }

    setLoading(false);
    setUsername("");
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100 flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">
          Search GitHub User
        </h2>

        <div className="space-y-1">
          <label className="block font-medium">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub Username"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="space-y-1">
          <label className="block font-medium">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="space-y-1">
          <label className="block font-medium">Min no. of repos</label>
          <input
            type="number"
            min="0"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            placeholder="e.g. 5"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-600 font-medium">Loading...</p>}
      {error && <p className="mt-4 text-red-500 font-semibold">{error}</p>}

      {users.length > 0 && (
        <div className="mt-6 grid gap-6 w-full max-w-md">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow p-6 text-center space-y-2"
            >
              <img
                src={user.avatar_url}
                alt="User Avatar"
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="text-lg font-bold">{user.name}</h3>
              <p className="text-sm text-gray-700">@{user.login}</p>
              <p className="text-sm text-gray-600">
                📍 {user.location || "Unknown"}
              </p>
              <p className="text-sm text-gray-600">
                📦 {user.public_repos} Public Repos
              </p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-500 hover:underline"
              >
                View GitHub Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
