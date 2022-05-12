import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [state, setState] = useState({ list: [] });
  const [Insert, setInsert] = useState({
    id: "",
    title: "",
    contents: "",
    date: "",
  });

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

  //   id: 2,
  //   title: "TEST Title",
  //   contents: "TEST Contents",
  //   date: "2022-05-10",

  let Input = () => {
    // const InsertValue = (e) => {
    //   console.log(e.target);
    // };

    // const InsertValue = onChangeInsertValue = (e) => {

    // });
    //onChange={onChangeInsertValue}

    return (
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <button
            type="submit"
            onClick={async (e) => {
              console.log("Insert!");
              console.log(
                await axios("http://localhost:4000/add/data", {
                  method: "post",
                  data: { R: "s" },
                  headers: {
                    "Content-type": "application/json",
                    Accept: "*/*",
                  },
                })
              );
            }}
          >
            등록
          </button>
        </td>
      </tr>
    );
  };

  let Banner = () => {
    return <div className="Banners">REACTIVE</div>;
  };

  let List = () => {
    const ItemList = state.list.map((item) => (
      <tr key={item["id"]}>
        <td>{item["id"]}</td>
        <td>{item["title"]}</td>
        <td>{item["contents"]}</td>
        <td>{item["date"]}</td>
        <td>
          <button
            type="submit"
            onClick={async (e) => {
              console.log("Update!");
              console.log(item);
              console.log(
                await axios("http://localhost:4000/add/data", {
                  method: "post",
                  data: item,
                  headers: {
                    "Content-type": "application/json",
                    Accept: "*/*",
                  },
                })
              );
            }}
          >
            수정
          </button>
          <button
            type="submit"
            onClick={async (e) => {
              console.log("Delete!");
            }}
          >
            삭제
          </button>
        </td>
      </tr>
    ));

    return (
      <table className="">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>CONTENT</th>
            <th>DATE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>{ItemList}</tbody>
        <tfoot>
          <Input></Input>
        </tfoot>
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
