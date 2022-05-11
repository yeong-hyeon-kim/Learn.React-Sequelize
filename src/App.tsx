import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [state, setState] = useState({ list: [] });

  useEffect(() => {
    let list = async () => {
      const res = await axios.get("http://localhost:4000/get/data");

      if (res.data[0] === undefined) {
        let cover = [];
        cover.push(res.data);
      }

      setState({ list: res.data });
    };

    list();
  }, []);

  let Banner = () => {
    return <div>REACTIVE</div>;
  };

  let List = () => {
    const ItemList = state.list.map((item) => (
      <tr key={item["id"]}>
        <td>{item["id"]}</td>
        <td>{item["title"]}</td>
        <td>{item["contents"]}</td>
        <td style={{ backgroundColor: "indigo" }}>{item["date"]}</td>
      </tr>
    ));

    return (
      <table className="">
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>CONTENT</th>
          <th>DATE</th>
        </tr>
        {ItemList}
      </table>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <Banner></Banner>
        <List></List>
      </header>
    </div>
  );
}

export default App;
