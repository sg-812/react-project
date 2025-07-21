import React from "react";
import Button from "@mui/material/Button";

const ButtonComponent = () => {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" href="#text-buttons" color="error">Contained</Button>
      <Button variant="outlined" color="success">Outlined</Button>
    </div>
  );
};

export default ButtonComponent;
