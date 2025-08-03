import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React from "react"
import './index.css'
import Search from "./components/Search";
function App() {
return (
    <div style={{ padding: "2rem" }}>
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  );
}
export default App;
