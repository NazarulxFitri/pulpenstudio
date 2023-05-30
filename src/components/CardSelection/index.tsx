import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";

interface CardSelectionProps {
  card: {
    name: string;
    id: string;
    src: string;
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
        boxShadow:
          layoutid === card.id
            ? "1px 1px 10px #1976d2"
            : "1px 1px 10px #E0E0E0",
        borderRadius: "24px",
      }}
    >
      <Image
        src={card.src}
        alt="Lumie | Mewrita"
        width={500}
        height={300}
        style={{ borderRadius: "24px" }}
      />
    </Box>
  );
};

export default CardSelection;
