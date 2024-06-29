import React from "react";
import { ICONS } from "../../constants/icons";
import { ColumnTitleContainer, ColumnActions } from "./Column.styled";
import { ColumnTitle as TitleComponent } from "./ColumnTitle";

export const ColumnHeader = ({ title, count, iconType }) => {
  return (
    <ColumnTitleContainer>
      <TitleComponent title={title} count={count} iconType={iconType} />
      <ColumnActions className="column-actions">
        <img src={ICONS.ADD} alt="Add ticket" />
        <img src={ICONS.DOT_MENU} alt="actions" />
      </ColumnActions>
    </ColumnTitleContainer>
  );
};
