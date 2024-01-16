import { ErrorMessage, ListNumber, NextButton } from "@/components";
import useCheckCapitalCase from "@/utils/useCheckCapitalCase";
import useCheckExistence from "@/utils/useCheckExistence";
import useCheckWhiteSpace from "@/utils/useCheckWhiteSpace";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface FirstStepProps {
  data: any;
  itemName: string;
  language: string;
  setName: (value: string) => void;
  setLanguage: (value: string) => void;
  setCurTab: (value: number) => void;
}

const FirstStep: React.FC<FirstStepProps> = ({
  data,
  itemName,
  language,
  setName,
  setLanguage,
  setCurTab,
}) => {
  const [showError, setShowError] = useState(false);
  const existence = useCheckExistence(data, itemName);
  const whiteSpace = useCheckWhiteSpace(itemName);
  const capitalCase = useCheckCapitalCase(itemName);

  const disabled =
    !!existence || !!whiteSpace || !!capitalCase!! || !itemName || !language;

  return (
    <Box>
      <Box display="flex" mt={3}>
        <ListNumber circle={true} number={1} />
        <h4 dangerouslySetInnerHTML={{ __html: "General" }} />
      </Box>
      <Grid container mt={2} rowGap={4}>
        <Grid item xs={12} md={4}>
          <Box>
            <TextField
              InputLabelProps={{ shrink: true }}
              sx={{ width: { xs: "100%", md: "100%" } }}
              placeholder="fabianxmahalini"
              id="standard-basic"
              label="Card Name (Will be used as URL)"
              variant="standard"
              onChange={(e) => setName(e.target.value)}
              value={itemName}
            />
            {showError && !itemName && (
              <ErrorMessage message="This field is required" />
            )}
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
              variant="standard"
              sx={{
                width: { xs: "100%", md: "100%" },
                mt: 4,
              }}
            >
              <InputLabel>
                Choose language (Will be use for the card content)
              </InputLabel>
              <Select
                defaultValue={"bm"}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <MenuItem defaultChecked value={"bm"}>
                  Bahasa Melayu
                </MenuItem>
                <MenuItem value={"en"}>English</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid xs={12} md={8}>
          <Box
            sx={{
              display: "flex",
              overflow: "scroll",
              justifyContent: { xs: "left", md: "center" },
            }}
            gap={4}
          >
            <Box>
              <p
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  marginBottom: "8px",
                }}
              >
                Example of english translation
              </p>
              <Image
                src="/media/cardSelection/card-4/2-image.png"
                alt="Pulpen Studio Digital Invitation Card"
                width={248}
                height={470}
              />
            </Box>
            <Box>
              <p
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  marginBottom: "8px",
                }}
              >
                Example of Bahasa Malaysia translation
              </p>
              <Image
                src="/media/cardSelection/card-1/2-image.png"
                alt="Pulpen Studio Digital Invitation Card"
                width={248}
                height={470}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{ width: "fit-content", mx: "auto", my: 1 }}
        onClick={() => {
          !disabled ? setCurTab(1) : null;
          setShowError(true);
        }}
      >
        <Box mb={1}>
          {showError && disabled && (
            <ErrorMessage message="Please check on the error and try again" />
          )}
        </Box>
        <NextButton disabled={disabled} />
      </Box>
    </Box>
  );
};

export default FirstStep;
