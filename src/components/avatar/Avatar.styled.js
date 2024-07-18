import styled from "styled-components";

export const AvatarContainer = styled.div`
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

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
  border-radius: 50%;
  overflow: hidden;
`;

export const Initials = styled.div`
  font-weight: bold;
  user-select: none;
`;

export const StatusIndicator = styled.div`
  position: absolute;
  bottom: -5%;
  right: -5%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? "forestGreen" : "gray")};
`;
