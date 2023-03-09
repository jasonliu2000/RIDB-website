import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_RIDB_BASE_URL}/recareas/10175174/links?limit=50&offset=0&apikey=${process.env.REACT_APP_RIDB_API_KEY}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(response => 
      response.json()
    ).then(data => 
      console.log(data)
    )
  }, []);

  return (
    <div>
    <p>RIDB - hello world</p>
  </div>
  );
}

export default App;
