import { useEffect, useState } from "react";
import api from "../../api/apiClient.js";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Example: Spring Boot backend URL --> /api/dashboard
    axios
      .get("http://localhost:9191/api/dashboard")
      .then((response) => {
        console.log("got the data");
        setData(response.data); // assuming JSON array
        setLoading(false);
      })
      .catch((err) => {
        console.log("got the error");
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading Dashboard...</h3>;
  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          borderRadius: "8px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <h3>Fetched Data from Backend:</h3>

        {data.length === 0 && <p>No data found.</p>}

        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <strong>ID:</strong> {item.id} – <strong>Name:</strong>{" "}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
