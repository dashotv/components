import { Controller } from "react-hook-form";

import { title } from "radash";

import TextField, { TextFieldProps } from "@mui/material/TextField";

import { InputProps } from "./types";

export const Text = ({
  name,
  label,
  disabled,
  control,
  placeholder,
  sx,
  onChange,
}: InputProps & TextFieldProps) => {
  //   error={!!errors[name]}
  //   helperText={errors[name]?.message}
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          id={name}
          sx={sx}
          disabled={disabled}
          type="search"
          label={title(label || name)}
          placeholder={placeholder}
          variant="standard"
          fullWidth
          autoComplete="off"
          onChange={(e) => {
            onChange && onChange(e);
            field.onChange(e);
          }}
        />
      )}
    />
  );
};
