import {
  Stack,
  Typography,
  Pagination as MUIPagination,
  PaginationProps as MUIPaginationProps,
} from "@mui/material";

export const Pagination = ({
  total,
  count,
  page = 1,
  color = "primary",
  shape = "circular",
  size = "small",
  onChange,
  ...props
}: { total: number } & MUIPaginationProps) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center" justifyContent="end">
      <Typography variant="body1" color="gray">
        {total}
      </Typography>
      <MUIPagination
        sx={{
          display: "flex",
          justifyContent: "end",
          height: "48px",
        }}
        count={count}
        page={page}
        color={color}
        shape={shape}
        size={size}
        onChange={onChange}
        {...props}
      />
    </Stack>
  );
};
