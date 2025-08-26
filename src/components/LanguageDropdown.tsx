"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Box,
  Menu,
  MenuItem,
  ListItemText,
  Typography,
  PaperProps,
} from "@mui/material";
import CheckRounded from "@mui/icons-material/CheckRounded";

import FlagGermany from "@/assets/svgs/FlagGermany.svg";
import FlagUK from "@/assets/svgs/FlagUK.svg";

type Lang = "de" | "en";

type Props = {
  value?: Lang;
  onChange?: (lang: Lang) => void;
};

type Option = {
  code: Lang;
  label: string;
  img: StaticImageData | string;
  alt: string;
};

const options: Option[] = [
  { code: "de", label: "DE", img: FlagGermany, alt: "German Flag" },
  { code: "en", label: "EN", img: FlagUK, alt: "UK Flag" },
];

const paperProps: PaperProps = {
  sx: {
    p: "16px",
    borderRadius: 3,
    width: "125px",
    boxShadow: "0 4px 12px rgba(26,32,44,0.1)",
    height: "90px",
  },
};

export default function LanguageDropdown({ value = "de", onChange }: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [lang, setLang] = useState<Lang>(value);
  const open = Boolean(anchorEl);
  const current = options.find((o) => o.code === lang) ?? options[0];
  useEffect(() => setLang(value), [value]);

  const select = (code: Lang) => {
    setLang(code);
    onChange?.(code);
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <Image
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          src={current.img}
          alt={current.alt}
        />
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        PaperProps={paperProps}
        sx={{
          marginTop: { xs: "-60px", lg: "30px" },
          "& .MuiMenuItem-root": { p: 0 },
          "& .MuiMenuItem-root:not(:last-of-type)": { pb: "10px" },
        }}
      >
        {options.map((o) => (
          <MenuItem
            key={o.code}
            onClick={() => select(o.code)}
            sx={{
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "0px",
              "&:hover": { bgcolor: "transparent" },
              "&:active": { bgcolor: "transparent" },
              "&.Mui-focusVisible": { bgcolor: "transparent" },
              "&.Mui-selected": {
                bgcolor: "transparent",
                "&:hover": { bgcolor: "transparent" },
              },
            }}
          >
            <Box
              sx={{
                width: "20px",
                height: "15px",
                display: "flex",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  aspectRatio: "4/3",
                }}
                src={o.img}
                alt={o.alt}
              />
            </Box>
            <ListItemText
              primary={<Typography sx={{ fontSize: 16 }}>{o.label}</Typography>}
            />
            {lang === o.code && (
              <CheckRounded
                sx={{ marginLeft: "14px", width: "20px", height: "auto" }}
                fontSize="small"
              />
            )}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
