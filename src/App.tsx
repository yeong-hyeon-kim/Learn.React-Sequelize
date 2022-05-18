import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [state, setState] = useState({ list: [] });

  let GetData = async () => {
    const res = await axios.get("http://localhost:4000/get/data");

    if (res.data[0] === undefined) {
      let cover = [];
      cover.push(res.data);
    }
    setState({ list: res.data });
  };

  let DeleteData = async (e: any) => {
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
  };

  let UpdateData = async (e: any, item: any) => {
    const { name } = e.target;
    console.log("Update!");
    console.log(item);
    console.log(
      await axios("http://localhost:4000/update/data", {
        method: "put",
        data: {
          id: name,
          title: item["title"],
          contents: item["contents"],
          date: item["date"],
        },
        headers: {
          "Content-type": "application/json",
          Accept: "*/*",
        },
      })
    );
  };

  let CreateData = async (e: any) => {
    axios("http://localhost:4000/add/data", {
      method: "post",
      data: {
        title: e["title"],
        contents: e["contents"],
        date: e["date"],
      },
      headers: {
        "Content-type": "application/json",
        Accept: "*/*",
      },
    });
  };

  // Refresh Data
  useEffect(() => {
    GetData();
  }, []);

  let Banner = () => {
    return <div className="Banners">REACTIVE</div>;
  };

  let List = () => {
    const [update, setUpdate] = useState({
      title: "",
      contents: "",
      date: "",
    });

    const { title, contents, date } = update;

    const onChangeUpdate = (e: any) => {
      const { value, name } = e.target;
      console.log(value);
      setUpdate({
        ...update,
        [name]: value,
      });
    };

    let ItemList = state.list.map((item) => (
      <tr key={item["id"]}>
        <td>{item["id"]}</td>
        <td>
          {item["title"]}
          <input
            className="UpdateInput"
            name="title"
            onChange={onChangeUpdate}
          ></input>
        </td>
        <td>
          {item["contents"]}
          <input
            className="UpdateInput"
            name="contents"
            onChange={onChangeUpdate}
          ></input>
        </td>
        <td>
          {item["date"]}
          <input
            className="UpdateInput"
            name="date"
            type="datetime-local"
            onChange={onChangeUpdate}
          ></input>
        </td>
        <td>
          <button
            className="BtnUpdate"
            name={item["id"]}
            type="submit"
            onClick={async (e: any) => {
              UpdateData(e, update);
            }}
          >
            수정
          </button>
          <button
            className="BtnDelete"
            name={item["id"]}
            type="submit"
            onClick={async (e: any) => {
              DeleteData(e);
              GetData();
            }}
          >
            삭제
          </button>
        </td>
      </tr>
    ));

    return (
      <table>
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

  let Input = () => {
    const [insert, setInsert] = useState({
      title: "",
      contents: "",
      date: "",
    });

    const { title, contents, date } = insert;
    // const { UpdateTitle, UpdateContents, UpdateDate } = update;

    const onChanges = (e: any) => {
      const { value, name } = e.target;
      console.log(value);
      setInsert({
        ...insert,
        [name]: value,
      });
    };

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
          <input
            type="datetime-local"
            name="date"
            value={date}
            onChange={onChanges}
          ></input>
        </td>
        <td>
          <button
            className="BtnInsert"
            type="submit"
            onClick={async (e: any) => {
              console.log("Insert!");
              console.log(insert);
              CreateData(insert);
              GetData();
            }}
          >
            등록
          </button>
        </td>
      </tr>
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
