import React from "react";
import { SelectContainer, Label, Select } from "./SelectButton.styled";

export const SelectButton = ({ label, value, onChange, options }) => {
  return (
    <SelectContainer>
      <Label htmlFor="groupBy">{label} :</Label>
      <Select
        id="groupBy"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
};
