import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  styled,
} from "@mui/material";
import { useEffect } from "react";

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
  addedItem: any;
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
  addedItem,
}) => {
  useEffect(() => {
    setInfoTitle(addedItem?.infoTitle);
    setInfoAddress(addedItem?.infoAddress);
    setInfoAddressMap(addedItem?.infoAddressMap);
    setInfoFirstPhoneName(addedItem?.infoFirstPhoneName);
    setInfoFirstPhoneNum(addedItem?.infoFirstPhoneNum);
    setInfoSecondPhoneName(addedItem?.infoSecondPhoneName);
    setInfoSecondPhoneNum(addedItem?.infoSecondPhoneNum);
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
          label="Info Title"
          fullWidth
          defaultValue={infoTitle}
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
          defaultValue={infoAddress}
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
          defaultValue={infoAddressMap}
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
          defaultValue={infoFirstPhoneName}
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
          defaultValue={infoFirstPhoneNum}
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
          defaultValue={infoSecondPhoneName}
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
          defaultValue={infoSecondPhoneNum}
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
