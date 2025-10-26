import React, { useState, useMemo } from "react";

function UseMemoExample() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const users = [
    "Ilyas",
    "Youssef",
    "Sara",
    "Ali",
    "Fatima",
    "Ayoub",
    "Hajar",
  ];

  console.log("Component rendered!");

  // 🔥 useMemo: only runs when 'search' changes
  const filteredUsers = useMemo(()  => {
    console.log("Filtering users...");
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🔍 useMemo Example</h2>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "15px",
          width: "200px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <br />

      <button
        onClick={() => setCount((prev) => prev + 1)}
        style={{
          padding: "8px 12px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "15px",
        }}
      >
        Increment Count ({count})
      </button>

      {/* 🧱 Display filtered users */}
      <div>
        {filteredUsers.map((user) => (
          <div
            key={user}
            style={{
              padding: "10px",
              marginBottom: "8px",
              background: "#f3f3f3",
              borderRadius: "6px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ margin: 0 }}>{user}</h3>
          </div>
        ))}

        {/* Show message if no results */}
        {filteredUsers.length === 0 && (
          <p style={{ color: "gray" }}>No users found 😢</p>
        )}
      </div>
    </div>
  );
}

export default UseMemoExample;
