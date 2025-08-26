"use client";
import { Box, Typography, Button } from "@mui/material";
import Logo from "@/assets/pngs/logo.png";
import Image from "next/image";
import MenuDropdown from "./MenuDropdown";
import LanguageDropdown from "./LanguageDropdown";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import profile from "@/assets/svgs/profile.svg";
import hamburger from "@/assets/svgs/hamburger.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          padding: "16px",
          maxWidth: "1280px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "6px",
          }}
        >
          <Image src={Logo} alt="logo" height={50} width={50} />
          <Typography
            sx={{
              fontSize: "27.58px",
              lineHeight: "27.58px",
              color: "#4611f5",
            }}
          >
            Wie
            <span
              style={{
                fontWeight: "600",
                background: "linear-gradient(to right, #4611f5, #E501FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: "27.58px",
              }}
            >
              Führerschein
            </span>
          </Typography>
        </Box>
        {/* the hamburger  */}

        <Box sx={{ display: { lg: "none" }, cursor: "pointer" }}>
          <Image
            onClick={() => setOpen(true)}
            src={hamburger}
            alt="hamburger"
            height={35}
            width={35}
          />
        </Box>
        <MobileMenu
          open={open}
          onClose={() => setOpen(false)}
          sections={[
            { title: "Mobile Menu 1", items: ["Example A", "Example Item B"] },
            { title: "Mobile Menu 2", items: ["Example C", "Example Item D"] },
          ]}
        />
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            gap: "36px",
            alignItems: "center",
          }}
        >
          {/* the links,dropdowns  */}
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            {/* the dropdowns and testuals */}
            <Typography
              sx={{
                color: "#000000",
                fontSize: { xs: "14px", md: "16px", lg: "18px" },
                lineHeight: "1.6em",
                fontWeight: "500",
                transition: "all 0.3s ease-in-out",
                padding: "4px 8px",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "rgba(88,65,212,0.12)",
                },
                cursor: "pointer",
              }}
            >
              Menu
            </Typography>
            <MenuDropdown
              label="Menu 2"
              items={["Example 1", "Example Item 2"]}
            />
            <MenuDropdown
              label="Menu 3"
              items={["Example 1", "Example Item 2", "Example Item 3"]}
            />
          </Box>
          {/* the icons,butotn  */}
          <Box sx={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <LanguageDropdown
              value="de"
              onChange={(lang) => console.log("lang:", lang)}
            />
            <Image src={profile} alt="profile" height={35} width={35} />
            <Button
              sx={{
                backgroundColor: "transparent",
                color: "#000000",
                fontSize: { xs: "14px", md: "16px", lg: "18px" },
                lineHeight: "1.6em",
                fontWeight: "400",
                transition: "all 0.3s ease-in-out",
                padding: "8px 16px",
                borderRadius: "10px",
                border: "1px solid #300CA8",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#300CA8",
                  color: "#fff",
                },
                "&:active": {
                  backgroundColor: "#2b1087 !important",
                  color: "#fff",
                },
                height: "44px",
                width: "110px",
              }}
              variant="outlined"
            >
              Anmelden
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
