import { Box } from "@mui/material";

interface ListNumberProps {
  circle?: boolean;
  number: number;
}

const ListNumber: React.FC<ListNumberProps> = ({ number }) => {
  return (
    <Box
      sx={{
        background: "#000",
        borderRadius: "20px",
        color: "#FFF",
        fontSize: "32px",
        fontWeight: "800",
        mr: 2,
        textAlign: "center",
        width: "40px",
      }}
    >
      {number}
    </Box>
  );
};

export default ListNumber;
