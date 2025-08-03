import axios from "axios";

export async function fetchUserData(username, location = "", minRepos = 0) {
  const queryParts = [`${username} in:login`];

  if (location) {
    queryParts.push(`location:${location}`);
  }

  if (minRepos > 0) {
    queryParts.push(`repos:>=${minRepos}`);
  }

  const query = queryParts.join(" ");
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  const response = await axios.get(url);

  if (response.data.total_count === 0) {
    throw new Error("No users found.");
  }

  const user = response.data.items[0];
  const userDetails = await axios.get(`https://api.github.com/users/${user.login}`);

  return userDetails.data;
}
