import React, { useState } from "react";
import Avatar from "../avatar/Avatar";
import { getStatusIcon, getPriorityIcon } from "../../utils/iconUtils";
import Badge from "../badge/Badge";
import {
  CardContainer,
  TicketId,
  TicketTitleWrapper,
  TicketTitle,
  TicketStatus,
  FlexContainer,
} from "./Card.styled";

function Card({ ticket, groupBy }) {
  const [isDragging, setIsDragging] = useState(false);
  const statusIcon = getStatusIcon(ticket.status);
  const priorityIcon = getPriorityIcon(ticket.priority);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", ticket.id);
    const dragElm = document.querySelector("#" + ticket.id);
    console.log("dragElm--", ticket.id);
    console.log(dragElm);
    dragElm.style = {
      opacity: "1",
      boxShadow: "none",
    };

    setIsDragging(true);
  };
  const onDragEnd = (e) => {
    setIsDragging(false);
  };

  return (
    <CardContainer
      draggable
      onDragStart={handleDragStart}
      onDragEnd={onDragEnd}
      isDragging={isDragging}
      id={ticket.id}
    >
      <TicketId>
        <span>{ticket.id}</span>
        {groupBy !== "user" && (
          <Avatar
            imageUrl="https://i.pravatar.cc/40"
            name="as"
            status={true}
            size={30}
          />
        )}
      </TicketId>
      <TicketTitleWrapper>
        <TicketStatus>
          <img src={statusIcon} alt={ticket.status} />
        </TicketStatus>
        <TicketTitle title={ticket.title}>{ticket.title}</TicketTitle>
      </TicketTitleWrapper>
      <FlexContainer>
        <Badge label={<img src={priorityIcon} alt="priority" />} />
        <span>
          {ticket.tag.map((item) => (
            <Badge key={item} label={item} />
          ))}
        </span>
      </FlexContainer>
    </CardContainer>
  );
}

export default Card;
