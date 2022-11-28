import { Fragment, useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  //   console.log(name);
  console.log(data);
  const fetchData = () => {
    const nameList = name.split(",");
    // console.log(nameList.length);
    let pass = "";
    // console.log(nameList);
    nameList.forEach(myFuction);
    function myFuction(item, index) {
      if (index + 1 === nameList.length) {
        pass += "name[]=" + item;
      } else {
        pass += "name[]=" + item + "&";
      }
    }
    console.log(pass);
    return fetch(`https://api.agify.io/?${pass}`)
      .then((Response) => Response.json())
      .then((data) => setData(data));
  };

  function handleName(event) {
    setName(event.target.value);
  }
  function handleButton() {
    fetchData();
  }
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
        <table border={2}>
          <th>Name</th>
          <th>Age</th>
          <th>Number of People</th>
          {data.map((item) => {
            console.log(item);
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.count}</td>
              </tr>
            );
          })}
        </table>
        {/* <ul>
          {data && (
            <Fragment>
              <li>Name : {data.name}</li>
              <li>Age : {data.age}</li>
              <li>Number of People : {data.count}</li>
            </Fragment>
          )}
        </ul> */}
      </div>
    </div>
  );
}

export default App;
