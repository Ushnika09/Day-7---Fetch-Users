import React from "react";
import "./App.css";
import Users from "./Users";

function App() {
  return (
    <div className="min-h-screen bg-teal-200/30 flex flex-col items-center py-10">
      
      <h1 className="text-4xl font-extrabold text-indigo-900 mb-6 text-center">
        🌟 Fetch User Data Dashboard 🌟
      </h1>

      
      <Users />
    </div>
  );
}

export default App;
