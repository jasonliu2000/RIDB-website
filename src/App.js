import { useState, useEffect } from "react";

const App = () => {
  const [recAreas, setRecAreas] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_RIDB_BASE_URL}/recareas?limit=50&offset=0&apikey=${process.env.REACT_APP_RIDB_API_KEY}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.RECDATA);
        setRecAreas(data.RECDATA);
      }
    );
  }, []);

  return (
    <div>
    <p>RIDB - hello world</p>
    <p>Showing 50 rec areas:</p>
    <ul>
      {recAreas.map( recArea => <li key={recArea.RecAreaID}>{recArea.RecAreaName}</li> )}
    </ul>
  </div>
  );
}

export default App;
