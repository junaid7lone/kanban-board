import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 16px;
  margin-bottom: 10px;
`;

export const TicketId = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TicketTitleWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
`;

export const TicketTitle = styled.h4`
  color: ${({ theme }) => theme.colors.textDark};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 10px;
  font-weight: 600;
`;

export const TicketStatus = styled.span`
  min-width: 24px;
  min-height: 24px;

  img {
    width: 20px;
    margin-top: 8px;
  }
`;

export const FlexContainer = styled.p`
  display: flex;
  gap: 10px;
`;
