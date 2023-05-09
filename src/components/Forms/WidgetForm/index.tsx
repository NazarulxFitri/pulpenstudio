import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  styled,
} from "@mui/material";

interface WidgetFormProps {
  accordionTitle: string;
  setWidgetBgColor: (value: string) => void;
  setWidgetColor: (value: string) => void;
  setWidgetWsCta: (value: string) => void;
  setWidgetMapCta: (value: string) => void;
}

const Input = styled(TextField)(() => ({
  background: "#FFF",
  margin: "4px 0",
}));

const WidgetForm: React.FC<WidgetFormProps> = ({
  accordionTitle,
  setWidgetBgColor,
  setWidgetColor,
  setWidgetWsCta,
  setWidgetMapCta,
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
          label="Background Color"
          fullWidth
          onChange={(e) => {
            setWidgetBgColor(e.target.value);
          }}
        />
        <Input
          label="Text Color"
          fullWidth
          onChange={(e) => {
            setWidgetColor(e.target.value);
          }}
        />
        <Input
          label="Whatsapp Link"
          fullWidth
          onChange={(e) => {
            setWidgetWsCta(e.target.value);
          }}
        />
        <Input
          label="Map Link"
          fullWidth
          onChange={(e) => {
            setWidgetMapCta(e.target.value);
          }}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default WidgetForm;
