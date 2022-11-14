import React from "react";
import Header from "./components/Header";
import TicketList from "./components/TicketList";

function App(){
  return (
    <React.Fragment>
      <Header />
      <TicketList />
    </React.Fragment>
  );
}

export default App;