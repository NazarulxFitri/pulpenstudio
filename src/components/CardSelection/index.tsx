import { Box, useRadioGroup } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface CardSelectionProps {
  card: {
    name: string;
    id: string;
  };
}

const CardSelection: React.FC<CardSelectionProps> = ({ card }) => {
  const router = useRouter();
  const { layoutid } = router.query;

  function handleClick() {
    router.push({ query: { layoutid: card.id } });
  }

  return (
    <Box
      onClick={handleClick}
      sx={{
        borderRadius: "24px",
        boxShadow:
          layoutid === card.id
            ? "1px 1px 10px #1976d2"
            : "1px 1px 10px #E0E0E0",
        minHeight: "360px",
        p: 1,
        width: "360px",
      }}
    >
      <p>{card.name}</p>
    </Box>
  );
};

export default CardSelection;
