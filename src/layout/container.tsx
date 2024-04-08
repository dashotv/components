import React from "react";

import { Box } from "@mui/material";

import { WrapErrorBoundary } from "./wrapErrorBoundary";

export type ContainerProps = {
  children: React.ReactNode;
};
export const Container = ({ children }: ContainerProps) => {
  return (
    <Box sx={{ pr: 1, pl: 1, mb: 2 }}>
      <WrapErrorBoundary>{children}</WrapErrorBoundary>
    </Box>
  );
};
