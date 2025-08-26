"use client";

import { Box, Typography } from "@mui/material";

export default function Hero() {
  const text = "Der Weg zum Führerschein";

  const splitText = (str: string) =>
    str.split("").map((char, i) => (
      <span
        key={i}
        style={{
          display: "inline-block",
          opacity: 0,
          transform: "rotateY(90deg) translateY(10px)",
          animation: `flipIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
          animationDelay: `${i * 0.05}s`, // stagger like Framer
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: "url(/HeroBG.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* 760px */}
        <Box
          sx={{
            maxWidth: "760px",
            margin: "auto",
            textAlign: "center",
            paddingTop: "80px",
          }}
        >
          <>
            <style>
              {`
          @keyframes flipIn {
            0% {
              opacity: 0;
              transform: rotateY(90deg) translateY(10px);
            }
            100% {
              opacity: 1;
              transform: rotateY(0deg) translateY(0);
            }
          }
        `}
            </style>
            <Typography
              sx={{
                color: "#000",
                fontSize: "56px",
                fontWeight: "800 !important",
                paddingBottom: "24px",
                perspective: "1000px",
                fontFamily: "Satoshi600 !important",
              }}
            >
              {splitText(text)}
            </Typography>
          </>
          <Typography>
            Behalte jeden Schritt und deine Fortschritte immer im Blick, sowie
            Termine buchen und Nachrichten senden, alles aus einer Hand.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
