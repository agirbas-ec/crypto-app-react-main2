import React from "react";
import "./Deneme.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Deneme() {
  const [data, setData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {data.map((e) => {
        return (
          <>
            <div className="container">
              <div className="card">
                <p>{e.name}</p>
                <h2>{e.email}</h2>
                <p>{e.phone}</p>
                <h2>{e.website}</h2>
                <p>{e.company.name}</p>
                <h2>{e.address.street}</h2>
                <p>{e.address.city}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Deneme;
