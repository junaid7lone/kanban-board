import styled from "styled-components";

export const AvatarContainer = styled.div`
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size }) => size / 2.5}px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Initials = styled.div`
  font-weight: bold;
  user-select: none;
`;

export const StatusIndicator = styled.div`
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: ${({ size }) => size / 5}px;
  height: ${({ size }) => size / 5}px;
  border-radius: 50%;
  background-color: ${({ theme, status }) => {
    switch (status) {
      case "red":
        return theme.colors.statusRed;
      case "amber":
        return theme.colors.statusAmber;
      case "green":
      default:
        return theme.colors.statusGreen;
    }
  }};
  border: 2px solid ${({ theme }) => theme.colors.backgroundSecondary};
`;
