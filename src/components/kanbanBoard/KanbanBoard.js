import React from "react";
import Column from "../column/Column";
import { getGroupedTickets, sortTickets } from "../../utils/kanbanUtils";
import { KanbanBoardWrapper } from "./KanbanBoard.styled";

const KanbanBoard = ({ tickets, users, groupBy, sortBy }) => {
  const userMap = users?.reduce((map, user) => {
    map[user.id] = user.name;
    return map;
  }, {});

  const groupedTickets = getGroupedTickets(tickets, groupBy);
  const columnsData = Object.keys(groupedTickets);

  return (
    <KanbanBoardWrapper>
      {columnsData.map((group, index) => (
        <Column
          key={"column-" + index}
          group={group}
          groupBy={groupBy}
          userMap={userMap}
          groupedTickets={groupedTickets}
          sortTickets={sortTickets}
          sortBy={sortBy}
        />
      ))}
    </KanbanBoardWrapper>
  );
};

export default KanbanBoard;
