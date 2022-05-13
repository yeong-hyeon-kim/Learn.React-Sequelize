import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [state, setState] = useState({ list: [] });
  const [insert, setInsert] = useState({
    title: "",
    contents: "",
    date: "",
  });

  const { title, contents, date } = insert;

  const onChanges = (e: any) => {
    const { value, name } = e.target;
    console.log(value);
    setInsert({
      ...insert,
      [name]: value,
    });
  };

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

  let Input = () => {
    return (
      <tr>
        <td></td>
        <td>
          <input name="title" value={title} onChange={onChanges}></input>
        </td>
        <td>
          <input name="contents" value={contents} onChange={onChanges}></input>
        </td>
        <td>
          <input name="date" value={date} onChange={onChanges}></input>
        </td>
        <td>
          <button
            type="submit"
            onClick={async (e: any) => {
              console.log("Insert!");
              console.log(insert);
              console.log(
                await axios("http://localhost:4000/add/data", {
                  method: "post",
                  data: {
                    title: insert["title"],
                    contents: insert["contents"],
                    date: insert["date"],
                  },
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
            onClick={async (e: any) => {
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
            name={item["id"]}
            type="submit"
            onClick={async (e: any) => {
              const { name } = e.target;
              console.log(name);
              console.log(e.target);

              console.log(
                await axios("http://localhost:4000/delete/data", {
                  method: "delete",
                  data: { id: name },
                  headers: {
                    "Content-type": "application/json",
                    Accept: "*/*",
                  },
                })
              );
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
