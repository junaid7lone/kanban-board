const STATUS_COLUMNS = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
const PRIORITY_COLUMNS = [4, 3, 2, 1, 0];

const getInitialCol = (groupBy, tickets) => {
  switch (groupBy) {
    case "status":
      return STATUS_COLUMNS;
    case "priority":
      return PRIORITY_COLUMNS;
    case "user":
      return tickets.reduce((acc, ticket) => {
        if (!acc.includes(ticket.userId)) {
          acc.push(ticket.userId);
        }
        return acc;
      }, []);
    default:
      return [];
  }
};

export const getGroupedTickets = (tickets, groupBy) => {
  const initialColumns = getInitialCol(groupBy, tickets);

  const groupedTickets = tickets.reduce((acc, ticket) => {
    const key = groupBy === "user" ? ticket?.userId : ticket[groupBy];

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(ticket);

    return acc;
  }, {});

  initialColumns.forEach((col) => {
    if (!groupedTickets[col]) {
      groupedTickets[col] = [];
    }
  });

  return groupedTickets;
};

export const sortTickets = (tickets, sortBy) => {
  return tickets.sort((a, b) => {
    if (sortBy === "priority") {
      return b.priority - a.priority;
    }

    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }

    return 0;
  });
};
