import React from "react";
import Card from "../card/Card";
import { getPriority } from "../../utils/priority";
import { KanbanColumn, KanbanTickets, NoTicketsMessage } from "./Column.styled";
import { ColumnHeader } from "./ColumnHeader";

function Column(props) {
  const { group, groupBy, userMap, groupedTickets, sortTickets, sortBy } =
    props;
  const groupedData = sortTickets(groupedTickets[group], sortBy);
  const columnTitle =
    groupBy === "user"
      ? userMap[group]
      : groupBy === "priority"
      ? getPriority(group)
      : group;

  return (
    <KanbanColumn key={group}>
      <ColumnHeader
        title={columnTitle}
        count={groupedData.length}
        iconType={groupBy}
      />

      <KanbanTickets>
        {groupedData.length ? (
          groupedData.map((ticket) => (
            <Card
              key={ticket.id}
              ticket={ticket}
              sortBy={sortBy}
              groupBy={groupBy}
            />
          ))
        ) : (
          <NoTicketsMessage>No Tickets</NoTicketsMessage>
        )}
      </KanbanTickets>
    </KanbanColumn>
  );
}

export default Column;
