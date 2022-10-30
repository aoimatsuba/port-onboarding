import { Button } from "@mui/material";
import { ReactElement, ReactNode } from "react";

import "./PillButton.scss";

type PillButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function PillButton({
  className,
  children,
  onClick,
  type = "button",
}: PillButtonProps): ReactElement {
  return (
    <Button
      className={className}
      sx={{ borderRadius: 5, width: "fit-content" }}
      type={type}
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
