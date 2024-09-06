import { Ticket } from "@prisma/client";
import React from "react";

interface Props {
  ticket: Ticket;
}

const TicketDetail = ({ ticket }: Props) => {
  return (
    <div>
      {ticket.title}
      <p>{ticket.description}</p>
      <p>{ticket.status}</p>
    </div>
  );
};

export default TicketDetail;
