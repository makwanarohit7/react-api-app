import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  let nameList = "";
  //   console.log(name);
  console.log(data);
  function fetchdata() {
    const list = name.split(",");
    // console.log(list);
    list.forEach((item, index) => {
      if (index + 1 === list.length) {
        nameList += "name[]=" + item;
      } else {
        nameList += "name[]=" + item + "&";
      }
    });
    // console.log(nameList);
    console.log(data);
    fetch(`https://api.genderize.io/?${nameList}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }
  function handleButton() {
    fetchdata();
  }
  function handleInput(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <div>
        <input type="text" onChange={handleInput} />
        <button onClick={handleButton}>Get Details</button>
        <table border={1}>
          <th>Name</th>
          <th>gender</th>
          <th>count</th>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.count}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
