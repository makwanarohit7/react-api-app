import { Fragment, useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  console.log(name);
  // console.log(data);
  const fetchData = () => {
    return fetch(`https://api.agify.io/?name=${name}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  function handleName(event) {
    setName(event.target.value);
  }
  function handleButton() {
    fetchData();
  }

  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <div>
      <h1>Enter Name To Expected Age</h1>
      <input type="text" onChange={handleName} />

      <button
        type="submit"
        disabled={name.trim().length === 0}
        onClick={handleButton}
      >
        Give Data
      </button>
      <div>
        <ul>
          {data && (
            <Fragment>
              <li>Name : {data.name}</li>
              <li>Age : {data.age}</li>
              <li>Number of People : {data.count}</li>
            </Fragment>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
