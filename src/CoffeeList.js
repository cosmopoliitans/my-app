import React, { useState, useEffect } from "react";
import axios from "axios";

function CoffeeList() {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/coffee/hot")
      .then((response) => {
        setCoffeeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <ul>
          {coffeeData.map((coffee) => (
            <li key={coffee.id}>
              <img src={coffee.image} alt={coffee.title} />
              <h3>{coffee.title}</h3>
              <h4>
                {coffee.ingredients.map((ingredient, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && ", "}
                    {ingredient}
                  </React.Fragment>
                ))}{" "}
              </h4>
              <p>{coffee.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CoffeeList;
