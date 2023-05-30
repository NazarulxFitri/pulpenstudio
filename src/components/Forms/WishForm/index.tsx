import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  styled,
} from "@mui/material";

interface WishFormProps {
  accordionTitle: string;
  setWishFormTitle: (value: string) => void;
  setWishFormDesc: (value: string) => void;
  wishTitleForm: string;
  wishDescForm: string;
}

const Input = styled(TextField)(() => ({
  background: "#FFF",
  margin: "4px 0",
}));

const WishForm: React.FC<WishFormProps> = ({
  accordionTitle,
  setWishFormTitle,
  setWishFormDesc,
  wishTitleForm,
  wishDescForm,
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
          InputLabelProps={{ shrink: true }}
          defaultValue={wishTitleForm}
          label="Wish Form Title"
          fullWidth
          onChange={(e) => {
            setWishFormTitle(e.target.value);
          }}
          multiline
          variant="standard"
        />
        <Input
          InputLabelProps={{ shrink: true }}
          defaultValue={wishDescForm}
          label="Wish Form Desc"
          fullWidth
          onChange={(e) => {
            setWishFormDesc(e.target.value);
          }}
          multiline
          variant="standard"
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default WishForm;
