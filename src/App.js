import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/kanbanBoard/KanbanBoard";
import { Header } from "./components/header/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import "./App.css";
import { ICONS } from "./constants/icons";
import useFetch from "./hooks/useFetch";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState(
    localStorage.getItem("groupBy") || "status"
  );
  const [sortBy, setSortBy] = useState(
    localStorage.getItem("sortBy") || "priority"
  );

  const { data, loading, error } = useFetch();

  useEffect(() => {
    if (data) {
      const ticketsData = data.tickets;
      const usersData = data.users;
      setTickets(ticketsData);
      setUsers(usersData);
    }
  }, [data]);

  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
  }, [groupBy]);

  useEffect(() => {
    localStorage.setItem("sortBy", sortBy);
  }, [sortBy]);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <img src={ICONS.LOADER} alt="..." className="loader-img" />
      </div>
    );
  }

  if (error) {
    return <div className="error-wrapper">Something Went Wrong!</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <main className="app">
        <Header
          setGroupBy={setGroupBy}
          groupBy={groupBy}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <KanbanBoard
          tickets={tickets}
          users={users}
          groupBy={groupBy}
          sortBy={sortBy}
        />
      </main>
    </ThemeProvider>
  );
};

export default App;
