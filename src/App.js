import { useState } from "react"; 
import FeaturedPark from "./FeaturedPark.js";
import './App.css';

function App() {

  const [parksList, setParksList] = useState(["Safibrooke", "Trinity Bell", "Cherry Sunday"]);

  const removePark = (nameOfParkToRemove) => {
    // Copy array
    const copyOfParksList = [...parksList];

    // Iterate through copy of array looking for the part we want to remove. We want a new array that has all parts except the one we want to remove
    const newArray = copyOfParksList.filter((parkString) => {
      return parkString !== nameOfParkToRemove;
    })
    setParksList(newArray);
  };

  return (
    <div className="App">
      <h1>Pretty pretty parks!</h1>
      
      {
      parksList.length > 0 
      ? <h3>Look at this nice list of parks</h3>
      : <p>fffffffff we bulldozed too much!</p>
      }

      {
        parksList.map((park, index) => {
          return (
            <FeaturedPark 
            key={index}
            parkName={park}
            bulldozer={removePark}
             />
          )
        })
      }

    </div>
  );
}

export default App;
