import styled from "styled-components";

export const KanbanBoardWrapper = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 35px 1.5rem 0;
  max-height: calc(100vh - 80px);
  min-height: calc(100vh - 80px);
`;
