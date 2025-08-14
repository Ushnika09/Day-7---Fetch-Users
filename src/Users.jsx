import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="mt-6 w-full max-w-5xl px-4 flex justify-center flex-col ">
      
      <button
        onClick={fetchUsers}
        className="mb-6 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition m-auto"
      >
        Reload Users
      </button>

      {loading && <p className="text-gray-700">Loading users...</p>}
      {error && <p className="text-red-500 font-medium">Error: {error}</p>}


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white/70 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden hover:shadow-lg transition hover:scale-105 duration-300">

            <div className="p-4 bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200 text-gray-900">


              <h3 className="text-xl font-bold">{user.name}</h3>
            </div>


            <div className="p-5">
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Address:</span> {user.address.street}, {user.address.city}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
