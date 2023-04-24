import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  styled,
} from "@mui/material";

interface DescriptionFormProps {
  accordionTitle: string;
  setDescription: (value: string) => void;
  setDescriptionColor: (value: string) => void;
  setDescriptionSize: (value: string) => void;
}

const Input = styled(TextField)(({ theme }) => ({
  background: "#FFF",
  margin: "4px 0",
}));

const DescriptionForm: React.FC<DescriptionFormProps> = ({
  accordionTitle,
  setDescription,
  setDescriptionColor,
  setDescriptionSize,
}) => {
  return (
    <Accordion sx={{ boxShadow: "1px 1px 8px #333" }}>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          "&.Mui-expanded": { minHeight: "48px", margin: 0 },
          "& .MuiAccordionSummary-content": { margin: "0" },
          background: "#333",
          color: "#FFF",
          fontWeight: "600",
        }}
      >
        <p>{accordionTitle}</p>
      </AccordionSummary>
      <AccordionDetails sx={{ m: 1, padding: "0" }}>
        <Input
          label={`${accordionTitle}`}
          fullWidth
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Input
          label={`${accordionTitle} color`}
          fullWidth
          onChange={(e) => {
            setDescriptionColor(e.target.value);
          }}
        />
        <Input
          label={`${accordionTitle} font size`}
          fullWidth
          onChange={(e) => {
            setDescriptionSize(e.target.value);
          }}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default DescriptionForm;
