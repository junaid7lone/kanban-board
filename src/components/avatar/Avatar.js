import React from "react";
import {
  AvatarContainer,
  AvatarImage,
  Initials,
  StatusIndicator,
} from "./Avatar.styled";

const getInitials = (name) => {
  const nameParts = name.split(" ");
  const initials = nameParts.map((part) => part[0]).join("");
  return initials.toUpperCase();
};

const Avatar = ({ imageUrl, name, status, size }) => {
  const initials = getInitials(name);

  return (
    <AvatarContainer size={size}>
      {imageUrl ? (
        <AvatarImage src={imageUrl} alt={name} />
      ) : (
        <Initials size={parseInt(size)}>{initials}</Initials>
      )}
      <StatusIndicator status={status} />
    </AvatarContainer>
  );
};

export default Avatar;
