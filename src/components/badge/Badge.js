import React from "react";
import { BadgeContainer } from "./Badge.styled";

const Badge = ({ label, status }) => {
  return <BadgeContainer status={status}>{label}</BadgeContainer>;
};

export default Badge;
