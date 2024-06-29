import React from "react";
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
  const statusIcon = getStatusIcon(ticket.status);
  const priorityIcon = getPriorityIcon(ticket.priority);

  return (
    <CardContainer>
      <TicketId>
        <span>{ticket.id}</span>
        {groupBy !== "user" && (
          <Avatar
            imageUrl="https://i.pravatar.cc/40"
            name="as"
            status="green"
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
