import { Checkbox, MenuItem, TextField } from "@mui/material";
import { FilterSelect } from "./filterSelect";

export const FilterBoolean = ({
  name,
  choose,
  selected,
}: {
  name: string;
  selected: string;
  choose: (choice: string) => void;
}) => {
  return (
    <FilterSelect
      name={name}
      choices={[
        { label: "Unset", value: "unset" },
        { label: "Yes", value: "true" },
        { label: "No", value: "false" },
      ]}
      choose={choose}
      selected={selected}
    />
  );
};
