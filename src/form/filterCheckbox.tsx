import { Checkbox, MenuItem, TextField } from "@mui/material";

export const FilterCheckbox = ({
  checked,
  icon,
  checkedIcon,
  change,
}: {
  checked: boolean;
  icon: React.ReactNode;
  checkedIcon: React.ReactNode;
  change: (checked: boolean) => void;
}) => {
  const handleChange = (event) => {
    change(event.target.checked);
  };
  return (
    <Checkbox
      checked={checked}
      icon={icon}
      checkedIcon={checkedIcon}
      onChange={handleChange}
    />
  );
};
