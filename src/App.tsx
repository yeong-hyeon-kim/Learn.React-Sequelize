import React from "react";
import "./App.css";

function App() {

  let Banner = () =>{
    return(
      <div>
        안녕하세요?
      </div>
    )
  }

  let Table = () =>{
    return(
      <div>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <Banner></Banner>
        <Table></Table>
      </header>
    </div>
  );
}

export default App;
