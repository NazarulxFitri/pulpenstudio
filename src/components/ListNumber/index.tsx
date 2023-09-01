import { Box } from "@mui/material";

interface ListNumberProps {
  circle?: boolean;
  number: number;
}

const ListNumber: React.FC<ListNumberProps> = ({ number }) => {
  return (
    <Box
      sx={{
        background: "#333",
        borderRadius: "8px",
        color: "#fff",
        fontSize: "24px",
        fontWeight: "800",
        mr: 2,
        textAlign: "center",
        width: "30px",
      }}
    >
      {number}
    </Box>
  );
};

export default ListNumber;
