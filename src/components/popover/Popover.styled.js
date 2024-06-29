import styled from "styled-components";

export const PopoverContainer = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: ${({ theme }) => theme.shadows.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 16px;
  z-index: 10;
`;

export const PopoverButton = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 6px 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  outline: none;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 0px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.actionHover};
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
  }
`;
