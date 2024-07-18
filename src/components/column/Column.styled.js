import styled from "styled-components";

export const KanbanColumn = styled.div`
  flex: 1;
  padding: 10px;
  min-height: 250px;
  min-width: 400px;
  max-width: 400px;
`;

export const ColumnTitle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 0;
  font-weight: 600;
  h3 {
    margin-top: 0;
    font-size: 16px;
  }

  img {
    width: 20px;
    height: 20px;
    border-radius: 20px;
  }
  .count {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const ColumnTitleContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-item: center;
`;

export const ColumnActions = styled.div`
  margin-top: 20px;
  img {
    display: inline-block;
    margin-left: 10px;
  }
`;

export const TicketListStyled = styled.div`
  margin-top: 10px;
`;

export const NoTicketsMessage = styled.h4`
  text-align: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.textMuted};
`;
