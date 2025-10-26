import React, { useRef ,useEffect } from "react";
import "./Input.css";
function FocusPage() {
  const inputRef = useRef(null); // create a ref for the input
  const h1 = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // focus the input when button is clicked
    h1.current.style.color = "blue";
  };
  useEffect(() => {
    console.log("Component rendered!");
  });
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1 ref={h1}>useRef Example: Focus Input</h1>
      
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        style={{ padding: "10px", fontSize: "16px", width: "300px" }}
      />
      <br />
      <button
        onClick={handleFocus}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Focus the Input
      </button>
    </div>
  );
}

export default FocusPage;
