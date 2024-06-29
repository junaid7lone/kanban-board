import styled from "styled-components";

export const BadgeContainer = styled.span`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.xsmall}
    ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fonts.small};
  font-weight: 600;
  color: #999;
  background-color: ${({ theme, status }) => theme.colors.badge[status]};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid #ddd;
  text-align: center;
  white-space: nowrap;
`;
