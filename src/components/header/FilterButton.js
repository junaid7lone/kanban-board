import { ICONS } from "../../constants/icons";

export const FilterButton = ({ isOpen }) => {
  return (
    <div className="filter-button flex gap-1">
      <span className="icon-left">
        <img src={ICONS.DISPLAY} alt="" />
      </span>
      <span>Display</span>
      <span className="icon-right">
        <img src={ICONS.DOWN} alt="" />
      </span>
    </div>
  );
};
