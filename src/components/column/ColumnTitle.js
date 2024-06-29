import React from "react";
import { getStatusIcon, getPriorityIconByLabel } from "../../utils/iconUtils";
import { ColumnTitle as TitleStyled } from "./Column.styled";

export const ColumnTitle = ({ title, count, iconType }) => {
  const getIconType = () => {
    switch (iconType) {
      case "status":
        return getStatusIcon(title);
      case "priority":
        return getPriorityIconByLabel(title);
      default:
        return `https://ui-avatars.com/api/?name=${title}`;
    }
  };

  const icon = getIconType();
  return (
    <TitleStyled>
      <img src={icon} alt="icon" />
      <h3> {title} </h3>
      <span className="count">{count}</span>
    </TitleStyled>
  );
};
