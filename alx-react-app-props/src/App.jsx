import React from "react";
import ProfilePage from "./components/ProfilePage";
import UserContext from "./components/UserContext";


function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
  <UserContext.Provider value={{user: userData}} >

    <ProfilePage />

  </UserContext.Provider>
  );
}

export default App;
