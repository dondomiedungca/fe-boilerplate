"use client";

export default function Home() {
  const handleFetch = () => {
    fetch("http://localhost:3000/api", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <>
      <h4>This is boilerplate</h4>
      <button onClick={handleFetch}>Click me</button>
    </>
  );
}
