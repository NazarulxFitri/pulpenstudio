import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  styled,
} from "@mui/material";

interface LocationContactFormProps {
  accordionTitle: string;
  setInfoTitle: (value: string) => void;
  setInfoAddress: (value: string) => void;
  setInfoAddressMap: (value: string) => void;
  setInfoFirstPhoneName: (value: string) => void;
  setInfoFirstPhoneNum: (value: string) => void;
  setInfoSecondPhoneName: (value: string) => void;
  setInfoSecondPhoneNum: (value: string) => void;
  infoTitle: string;
  infoAddress: string;
  infoAddressMap: string;
  infoFirstPhoneName: string;
  infoFirstPhoneNum: string;
  infoSecondPhoneName: string;
  infoSecondPhoneNum: string;
}

const Input = styled(TextField)(() => ({
  background: "#FFF",
  margin: "4px 0",
}));

const InformationForm: React.FC<LocationContactFormProps> = ({
  accordionTitle,
  setInfoTitle,
  setInfoAddress,
  setInfoAddressMap,
  setInfoFirstPhoneName,
  setInfoFirstPhoneNum,
  setInfoSecondPhoneName,
  setInfoSecondPhoneNum,
  infoTitle,
  infoAddress,
  infoAddressMap,
  infoFirstPhoneName,
  infoFirstPhoneNum,
  infoSecondPhoneName,
  infoSecondPhoneNum,
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
          label="Info Title"
          fullWidth
          onChange={(e) => {
            setInfoTitle(e.target.value);
          }}
          multiline
          variant="standard"
        />
        <Input
          InputLabelProps={{ shrink: true }}
          label="Address"
          fullWidth
          onChange={(e) => {
            setInfoAddress(e.target.value);
          }}
          multiline
          variant="standard"
        />
        <Input
          InputLabelProps={{ shrink: true }}
          label="Google Map Url"
          fullWidth
          onChange={(e) => {
            setInfoAddressMap(e.target.value);
          }}
          multiline
          variant="standard"
        />
        <Input
          InputLabelProps={{ shrink: true }}
          label="Contact Name 1"
          fullWidth
          onChange={(e) => {
            setInfoFirstPhoneName(e.target.value);
          }}
          multiline
          variant="standard"
        />
        <Input
          InputLabelProps={{ shrink: true }}
          label="Contact Number 1"
          fullWidth
          onChange={(e) => {
            setInfoFirstPhoneNum(e.target.value);
          }}
          multiline
          variant="standard"
        />
        <Input
          InputLabelProps={{ shrink: true }}
          label="Contact Name 2"
          fullWidth
          onChange={(e) => {
            setInfoSecondPhoneName(e.target.value);
          }}
          multiline
          variant="standard"
        />
        <Input
          InputLabelProps={{ shrink: true }}
          label="Contact Number 2"
          fullWidth
          onChange={(e) => {
            setInfoSecondPhoneNum(e.target.value);
          }}
          multiline
          variant="standard"
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default InformationForm;
