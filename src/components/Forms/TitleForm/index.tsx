import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  styled,
} from "@mui/material";
import { RadioButton } from "@/components";

interface TitleFormProps {
  accordionTitle: string;
  setTitle: (value: string) => void;
  setTitleColor: (value: string) => void;
  setTitleSize: (value: string) => void;
  setTitleShadow: (value: string) => void;
  setTitlePos: (value: string) => void;
}

const Input = styled(TextField)(({ theme }) => ({
  background: "#FFF",
  margin: "4px 0",
}));

const TitleForm: React.FC<TitleFormProps> = ({
  accordionTitle,
  setTitle,
  setTitleColor,
  setTitleSize,
  setTitleShadow,
  setTitlePos,
}) => {
  return (
    <Accordion sx={{ boxShadow: "1px 1px 8px #333" }}>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
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
            setTitle(e.target.value);
          }}
        />
        <Input
          label="Color"
          fullWidth
          onChange={(e) => {
            setTitleColor(e.target.value);
          }}
        />
        <Input
          label="Font size"
          fullWidth
          onChange={(e) => {
            setTitleSize(e.target.value);
          }}
        />
        <RadioButton {...{ setTitlePos }} targetInput={accordionTitle} />
        <RadioButton {...{ setTitleShadow }} targetInput={accordionTitle} />
      </AccordionDetails>
    </Accordion>
  );
};

export default TitleForm;
