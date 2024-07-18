import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/kanbanBoard/KanbanBoard";
import { Header } from "./components/header/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import "./App.css";
import { ICONS } from "./constants/icons";
import useFetch from "./hooks/useFetch";
import { getGroupedTickets, sortTickets } from "./utils/kanbanUtils";

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
      setTickets(data.tickets);
      setUsers(data.users);
    }
  }, [data]);

  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
  }, [groupBy]);

  useEffect(() => {
    localStorage.setItem("sortBy", sortBy);
  }, [sortBy]);

  const handleDragEnd = (ticketId, newGroup) => {
    setTickets((prevTickets) => {
      const updatedTickets = prevTickets.map((ticket) =>
        ticket.id === ticketId
          ? groupBy === "user"
            ? { ...ticket, userId: newGroup }
            : { ...ticket, [groupBy]: newGroup }
          : ticket
      );

      const groupedTickets = getGroupedTickets(updatedTickets, groupBy);

      Object.keys(groupedTickets).forEach((group) => {
        groupedTickets[group] = sortTickets(groupedTickets[group], sortBy);
      });

      return updatedTickets;
    });
  };

  if (loading) {
    return (
      <div className="loader-wrapper">
        <img src={ICONS.LOADER} alt="Loading..." className="loader-img" />
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
          onDragEnd={handleDragEnd}
        />
      </main>
    </ThemeProvider>
  );
};

export default App;
