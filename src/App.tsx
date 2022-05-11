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
    let list = async () => {
      const res = await axios.get("http://localhost:4000/get/data");

      if (res.data[0] === undefined) {
        let cover = [];
        cover.push(res.data);
      }

      setState({ list: res.data });
    };

    return <div>List</div>;
  };

  let List = () => {
    const ItemList = state.list.map((item) => (
      <li key={item["id"]}>
        {item["id"]}, {item["title"]}, {item["contents"]}, {item["date"]}
      </li>
    ));

    return <div>{ItemList}</div>;
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
