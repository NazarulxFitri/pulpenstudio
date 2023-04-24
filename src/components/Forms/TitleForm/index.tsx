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
          label={`${accordionTitle}`}
          fullWidth
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Input
          label={`${accordionTitle} color`}
          fullWidth
          onChange={(e) => {
            setTitleColor(e.target.value);
          }}
        />
        <Input
          label={`${accordionTitle} font size`}
          fullWidth
          onChange={(e) => {
            setTitleSize(e.target.value);
          }}
        />
        <RadioButton {...{ setTitleShadow }} />
      </AccordionDetails>
    </Accordion>
  );
};

export default TitleForm;
