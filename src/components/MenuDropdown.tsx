"use client";

import * as React from "react";
import { Box, Typography, Paper, Popper, Grow } from "@mui/material";
import KeyboardArrowDownRounded from "@mui/icons-material/KeyboardArrowDownRounded";

type Props = { label: string; items: string[] };

const textStyle = {
  color: "#000000",
  fontSize: { xs: "14px", md: "16px", lg: "18px" },
  fontWeight: "500",
  lineHeight: "1.6em",
};

export default function MenuDropdown({ label, items }: Props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement | null>(null);
  const enter = () => setOpen(true);
  const leave = () => setOpen(false);

  return (
    <>
      <Box
        ref={anchorRef}
        onMouseEnter={enter}
        onMouseLeave={leave}
        sx={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          padding: "4px 8px",
          borderRadius: 2,
          cursor: "pointer",
          bgcolor: open ? "rgba(88,65,212,0.12)" : "transparent",
        }}
      >
        <Typography variant="h6" sx={{ ...textStyle }}>
          {label}
        </Typography>
        <KeyboardArrowDownRounded
          sx={{
            transition: "transform .2s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            height: "25px",
            width: "25px",
          }}
        />
      </Box>

      <Popper
        onMouseEnter={enter}
        onMouseLeave={leave}
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom"
        transition
        modifiers={[{ name: "offset", options: { offset: [0, 0] } }]}
        sx={{ zIndex: 1300, paddingTop: "35px" }}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: "top left" }}>
            <Paper
              elevation={8}
              onMouseEnter={enter}
              onMouseLeave={leave}
              sx={{
                minWidth: "284px",
                borderRadius: "15px",
                boxShadow: "0 10px 20px 4px #000",
                padding: "24px 32px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                rowGap: "10px",
                flexDirection: "column",
              }}
            >
              {items.map((text) => (
                <Box
                  key={text}
                  sx={{
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                    py: "4px",
                    "&:hover": {
                      backgroundColor: "#e9eeff",
                      "& > :first-of-type": {
                        paddingLeft: "8px",
                      },
                    },
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      ...textStyle,
                      transition: "all 0.24s ease-in-out",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
