import { Checkbox, MenuItem, TextField } from "@mui/material";
import { Option } from "./types";

export const FilterSelect = ({
  name,
  choices,
  choose,
  selected,
}: {
  name: string;
  selected: string;
  choices: Option[];
  choose: (choice: string) => void;
}) => {
  const handleChange = (event) => {
    choose(event.target.value);
  };
  return (
    <TextField
      select
      id={name}
      label={name}
      variant="standard"
      fullWidth
      onChange={handleChange}
      value={selected}
      defaultValue={choices[0].value}
    >
      {choices.map(({ label, value }) => (
        <MenuItem key={value} value={value} sx={{ height: "36px" }}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
};
