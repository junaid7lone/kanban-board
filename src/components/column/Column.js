import React from "react";
import Card from "../card/Card";
import { getPriority } from "../../utils/priority";
import {
  KanbanColumn,
  TicketListStyled,
  NoTicketsMessage,
} from "./Column.styled";
import { ColumnHeader } from "./ColumnHeader";

function Column({ group, groupBy, userMap, tickets, onDragEnd }) {
  const columnTitle =
    groupBy === "user"
      ? userMap[group]
      : groupBy === "priority"
      ? getPriority(group)
      : group;

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const ticketId = e.dataTransfer.getData("text/plain");
    onDragEnd(ticketId, group);
  };

  return (
    <KanbanColumn key={group} onDragOver={handleDragOver} onDrop={handleDrop}>
      <ColumnHeader
        title={columnTitle}
        count={tickets.length}
        iconType={groupBy}
      />

      <TicketListStyled>
        {tickets.length ? (
          tickets.map((ticket) => (
            <Card key={ticket.id} ticket={ticket} groupBy={groupBy} />
          ))
        ) : (
          <NoTicketsMessage>No Tickets</NoTicketsMessage>
        )}
      </TicketListStyled>
    </KanbanColumn>
  );
}
export default Column;
