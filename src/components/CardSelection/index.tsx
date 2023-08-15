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
        borderRadius: "24px",
        width: "fit-content",
        textAlign: "center",
      }}
    >
      <Image
        src={card.src}
        alt="Lumie | Mewrita"
        height={500}
        width={300}
        style={{
          borderRadius: "24px",
          width: "fit-content",
        }}
      />
    </Box>
  );
};

export default CardSelection;
