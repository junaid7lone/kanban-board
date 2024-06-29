import React from "react";
import Popover from "../popover/Popover";
import { HeaderContainer } from "./Header.styled";
import { FilterButton } from "./FilterButton";
import { SelectButton } from "./SelectButton";

export const Header = (props) => {
  const { setGroupBy, setSortBy, groupBy, sortBy } = props;

  return (
    <HeaderContainer>
      <div className="container-fluid">
        <Popover trigger={<FilterButton />} content="">
          <div className="controls">
            <SelectButton
              label="Group By"
              value={groupBy}
              onChange={setGroupBy}
              options={[
                { label: "Status", value: "status" },
                { label: "User", value: "user" },
                { label: "Priority", value: "priority" },
              ]}
            />
            <SelectButton
              label="Sort By"
              value={sortBy}
              onChange={setSortBy}
              options={[
                { label: "Priority", value: "priority" },
                { label: "Title", value: "title" },
              ]}
            />
          </div>
        </Popover>
      </div>
    </HeaderContainer>
  );
};
