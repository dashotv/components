import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

import { InputProps } from "./types";
import { CheckboxProps } from "@mui/material";
import { IconCheckbox } from "./iconCheckbox";

export const Checkbox = ({
  name,
  label,
  disabled,
  control,
  sx,
  onChange,
}: InputProps & CheckboxProps) => {
  //   error={!!errors[name]}
  //   helperText={errors[name]?.message}
  return (
    <IconCheckbox
      {...{ name, label, disabled, control, sx, onChange }}
      icon={<CheckBoxOutlineBlankIcon />}
      checkedIcon={<CheckBoxIcon />}
    />
  );
};
