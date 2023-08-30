import { ErrorMessage, ListNumber } from "@/components";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

interface FirstStepProps {
  whiteSpace: any;
  capitalCase: any;
  existence: any;
  curTab: number;
  setName: (value: string) => void;
  setLanguage: (value: string) => void;
  setCurTab: (value: number) => void;
}

const FirstStep: React.FC<FirstStepProps> = ({
  whiteSpace,
  capitalCase,
  existence,
  curTab,
  setName,
  setLanguage,
  setCurTab,
}) => {
  return (
    <Box>
      <Box display="flex" mt={3}>
        <ListNumber circle={true} number={1} />
        <h4 dangerouslySetInnerHTML={{ __html: "General" }} />
      </Box>
      <Box mt={1}>
        <Box></Box>
        <TextField
          sx={{ width: { xs: "100%", md: "50%" } }}
          id="standard-basic"
          label="eg. kahwin-luwixmini , majlis-berbuka-puasa"
          variant="standard"
          onChange={(e) => setName(e.target.value)}
        />
        {!!whiteSpace && (
          <ErrorMessage message="Please make sure no whitespace" />
        )}
        {!!capitalCase && (
          <ErrorMessage message="Please make sure no capital case" />
        )}
        {!!existence && (
          <ErrorMessage message="Please try a different name. This name has been used" />
        )}
      </Box>
      <Box>
        <FormControl
          sx={{
            width: { xs: "100%", md: "50%" },
            mt: 4,
          }}
        >
          <InputLabel>Choose language</InputLabel>
          <Select
            defaultValue={"bm"}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <MenuItem defaultChecked value={"bm"}>
              Bahasa Melayu
            </MenuItem>
            <MenuItem value={"en"}>Bahasa Inggeris</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{ width: "fit-content", mx: "auto", my: 8 }}
        onClick={() => setCurTab(1)}
      >
        Next
      </Box>
    </Box>
  );
};

export default FirstStep;
