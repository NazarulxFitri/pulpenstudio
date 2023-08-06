import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  styled,
} from "@mui/material";
import { useEffect } from "react";

interface FirstCardFormProps {
  accordionTitle: string;
  setDescTitle: (value: string) => void;
  setDescOne: (value: string) => void;
  setDescTwo: (value: string) => void;
  setDescThree: (value: string) => void;
  descTitle: string;
  descOne: string;
  descTwo: string;
  descThree: string;
  addedItem: any;
}

const Input = styled(TextField)(() => ({
  background: "#FFF",
  margin: "4px 0",
}));

const FirstCardForm: React.FC<FirstCardFormProps> = ({
  accordionTitle,
  setDescTitle,
  setDescOne,
  setDescTwo,
  setDescThree,
  descTitle,
  descOne,
  descTwo,
  descThree,
  addedItem,
}) => {
  useEffect(() => {
    setDescTitle(addedItem?.descTitle);
    setDescOne(addedItem?.descOne);
    setDescTwo(addedItem?.descTwo);
    setDescThree(addedItem?.descThree);
  }, [addedItem]);

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
          defaultValue={descTitle}
          label="Desc Title"
          fullWidth
          onChange={(e) => {
            setDescTitle(e.target.value);
          }}
          multiline
          variant="standard"
        />
        <Input
          InputLabelProps={{ shrink: true }}
          defaultValue={descOne}
          label="Desc One"
          fullWidth
          onChange={(e) => {
            setDescOne(e.target.value);
          }}
          multiline
          variant="standard"
        />
        <Input
          InputLabelProps={{ shrink: true }}
          defaultValue={descTwo}
          label="Desc Two"
          fullWidth
          onChange={(e) => {
            setDescTwo(e.target.value);
          }}
          multiline
          variant="standard"
        />
        <Input
          InputLabelProps={{ shrink: true }}
          defaultValue={descThree}
          label="Desc Three"
          fullWidth
          onChange={(e) => {
            setDescThree(e.target.value);
          }}
          multiline
          variant="standard"
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default FirstCardForm;
