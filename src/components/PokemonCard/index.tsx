// components/PokemonCard.tsx
import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { Bolt, Science, AutoAwesome } from "@mui/icons-material";

interface PokemonCardProps {
  title: string;
  icon: React.ReactNode;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ title, icon }) => {
  return (
    <Card
      sx={{
        position: "relative",
        cursor: "pointer",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0 6px 30px rgba(0, 0, 0, 0.15)",

          animation: "pulse 2s infinite",
          "@keyframes pulse": {
            "0%": { backgroundColor: "white" },
            "50%": { backgroundColor: "primary.main", opacity: 0.4 },
            "100%": { backgroundColor: "white" },
          },
        },
      }}
    >
      <CardContent sx={{ textAlign: "center", position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem", // 아이콘 크기를 증가시킴
            color: "primary.main",
            mb: 1,
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            mb: 2,
            color: "text.primary",
            transition: "font-size 0.3s ease",
          }}
        >
          {title}
        </Typography>
        {/* <Button
          variant="contained"
          sx={{
            color: "white",
            px: 4,
            py: 1,
            borderRadius: 2,
            fontWeight: "bold",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            
          }}
        >
          자세히 보기
        </Button> */}
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
