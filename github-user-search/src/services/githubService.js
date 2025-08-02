const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const headers = {
    Authorization: `Bearer ${GITHUB_API_KEY}`,
};

fetch("https://api.github.com/user", {headers})
.then(res => res.json())
.then(data => console.log(data));