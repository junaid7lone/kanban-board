const STATUS_COLUMNS = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
const PRIORITY_COLUMNS = [4, 3, 2, 1, 0];

export const getGroupedTickets = (tickets, groupBy) => {
  const initialColumns =
    groupBy === "status"
      ? STATUS_COLUMNS
      : groupBy === "priority"
      ? PRIORITY_COLUMNS
      : [];

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
  const sortedData = tickets.sort((a, b) => {
    if (sortBy === "priority") {
      return b.priority - a.priority;
    }
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });
  return sortedData;
};
