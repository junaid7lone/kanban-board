import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-right: 10px;
  min-width: 100px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Select = styled.select`
  padding: 6px 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.text};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary};
  }
`;
