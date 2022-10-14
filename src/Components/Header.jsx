import { Typography } from "@mui/material";
import React from "react";

const headerStyles = {
  fontSize: "20px",
};

export const Header = () => {
  return (
    <>
      <div>
        <Typography sx={headerStyles}>Synth App</Typography>
      </div>
    </>
  );
};
