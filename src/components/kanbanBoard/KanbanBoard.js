import React, { useMemo } from "react";
import Column from "../column/Column";
import { getGroupedTickets, sortTickets } from "../../utils/kanbanUtils";
import { KanbanBoardWrapper } from "./KanbanBoard.styled";

const KanbanBoard = ({ tickets, users, groupBy, sortBy, onDragEnd }) => {
  const userMap = useMemo(
    () => users.reduce((map, user) => ({ ...map, [user.id]: user.name }), {}),
    [users]
  );

  const groupedAndSortedTickets = useMemo(() => {
    const groupedTickets = getGroupedTickets(tickets, groupBy);
    Object.keys(groupedTickets).forEach((group) => {
      groupedTickets[group] = sortTickets(groupedTickets[group], sortBy);
    });
    return groupedTickets;
  }, [tickets, groupBy, sortBy]);

  const columnsData = Object.keys(groupedAndSortedTickets);

  return (
    <KanbanBoardWrapper>
      {columnsData.map((group, index) => (
        <Column
          key={`column-${index}`}
          columnId={`column-${index}`}
          group={group}
          groupBy={groupBy}
          userMap={userMap}
          tickets={groupedAndSortedTickets[group]}
          sortBy={sortBy}
          onDragEnd={onDragEnd}
        />
      ))}
    </KanbanBoardWrapper>
  );
};

export default KanbanBoard;
