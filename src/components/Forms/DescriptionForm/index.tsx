import { RadioButton } from "@/components";
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
  setDescriptionPos: (value: string) => void;
}

const Input = styled(TextField)(() => ({
  background: "#FFF",
  margin: "4px 0",
}));

const DescriptionForm: React.FC<DescriptionFormProps> = ({
  accordionTitle,
  setDescription,
  setDescriptionColor,
  setDescriptionSize,
  setDescriptionPos,
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
          label="Text"
          fullWidth
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Input
          label="Color"
          fullWidth
          onChange={(e) => {
            setDescriptionColor(e.target.value);
          }}
        />
        <Input
          label="Font size"
          fullWidth
          onChange={(e) => {
            setDescriptionSize(e.target.value);
          }}
        />

        <RadioButton {...{ setDescriptionPos }} targetInput={accordionTitle} />
      </AccordionDetails>
    </Accordion>
  );
};

export default DescriptionForm;
