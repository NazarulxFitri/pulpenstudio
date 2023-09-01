import { ErrorMessage, ListNumber, NextButton } from "@/components";
import PrevButton from "@/components/Button/Prev";
import { Box, Grid, TextField } from "@mui/material";
import { useState } from "react";

interface ThirdStepProps {
  curTab: number;
  namePerson1: string;
  namePerson2: string;
  phonePerson1: string;
  phonePerson2: string;
  mapUrl: string;
  musicUrl: string;
  setNamePerson1: (value: string) => void;
  setPhonePerson1: (value: string) => void;
  setNamePerson2: (value: string) => void;
  setPhonePerson2: (value: string) => void;
  setMapUrl: (value: string) => void;
  setMusicUrl: (value: string) => void;
  setCurTab: (value: number) => void;
  handleSubmit: () => void;
}

const ThirdStep: React.FC<ThirdStepProps> = ({
  curTab,
  namePerson1,
  namePerson2,
  phonePerson1,
  phonePerson2,
  mapUrl,
  musicUrl,
  setNamePerson1,
  setPhonePerson1,
  setNamePerson2,
  setPhonePerson2,
  setMapUrl,
  setMusicUrl,
  setCurTab,
  handleSubmit,
}) => {
  const [showError, setShowError] = useState(false);
  const disabled = !namePerson1 || !phonePerson1 || !mapUrl || !musicUrl;

  return (
    <Box>
      <Box display="flex" mt={4}>
        <ListNumber circle={true} number={3} />
        <h4 dangerouslySetInnerHTML={{ __html: "Content" }} />
      </Box>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Box mt={2} gap={2} sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              InputLabelProps={{ shrink: true }}
              placeholder="Zack"
              label="Nama orang untuk dihubungi 1 *"
              variant="standard"
              onChange={(e) => setNamePerson1(e.currentTarget.value)}
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              placeholder="01156271776"
              label="Nombor orang untuk dihubungi telefon 1 *"
              variant="standard"
              onChange={(e) => setPhonePerson1(e.currentTarget.value)}
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              placeholder="Wendy"
              label="Nama orang untuk dihubungi 2"
              variant="standard"
              onChange={(e) => setNamePerson2(e.currentTarget.value)}
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              placeholder="01156271776"
              label="Nombor orang untuk dihubungi telefon 2"
              variant="standard"
              onChange={(e) => setPhonePerson2(e.currentTarget.value)}
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              placeholder="https://www.google.com/maps/dir//glasshall+forest+valley/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cc358ea1ca26ff:0xed9060ff23e7def2?sa=X&ved=2ahUKEwi7nsWm3cyAAxU_wTgGHUmXCJEQ9Rd6BAhOEAA&ved=2ahUKEwi7nsWm3cyAAxU_wTgGHUmXCJEQ9Rd6BAhWEAQ"
              label="Google Map URL *"
              variant="standard"
              onChange={(e) => setMapUrl(e.currentTarget.value)}
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              placeholder="https://www.youtube.com/watch?v=cacRynmN07Q"
              label="Pilihan lagu (Youtube) *"
              variant="standard"
              onChange={(e) => setMusicUrl(e.currentTarget.value)}
            />
          </Box>
        </Grid>
        <Grid
          xs={12}
          md={8}
          px={{ xs: 0, md: 6 }}
          display={{ xs: "none", md: "block" }}
        >
          <h4 style={{ fontSize: "16px", fontWeight: "500" }}>
            What should I fill in here ?
          </h4>
          <p style={{ marginTop: "12px" }}>
            1. "Nama orang untuk dihubungi 1" & "Nama orang untuk dihubungi 2" -
            Name of the person who can be called during the event day. It is for
            your guest to reach them
          </p>
          <p style={{ marginTop: "12px" }}>
            2. "Nombor orang untuk dihubungi telefon 1" & "Nombor orang untuk
            dihubungi telefon 2" - Phone number of the person who can be called
            during the event day. It is for your guest to reach them
          </p>
          <p style={{ marginTop: "12px" }}>
            3. "Google Map URL" - Event venue Url address from google.{" "}
            <b>How to get this ?</b>
            <span
              style={{ display: "block", margin: "8px 0", fontWeight: "700" }}
            >
              -Search your event venue name on google browser. Click on "Get
              direction" (You can find this usually at the right of the screen).
              Copy the url address and placed it inside the field.
            </span>{" "}
            If you need help on how to get this, please reach our Live Support
            (click on the icon at your right bottom screen)
          </p>
          <p style={{ marginTop: "12px" }}>
            4. "Pilihan lagu (Youtube)" - Song from Youtube that will be for
            your card background music. <b>How to get this ?</b>{" "}
            <span
              style={{ display: "block", margin: "8px 0", fontWeight: "700" }}
            >
              -Search your event venue name on google browser. Click on "Get
              direction" (You can find this usually at the right of the screen).
              Copy the url address and placed it inside the field.
            </span>{" "}
            . If you need help on how to get this, please reach our Live Support
            (click on the icon at your right bottom screen)
          </p>
        </Grid>
      </Grid>
      <Box textAlign={"center"} mt={2}>
        {showError && disabled && (
          <ErrorMessage message="Please fill in required fields" />
        )}
        <Box
          sx={{ display: "flex", width: "fit-content", mx: "auto", mt: 1 }}
          gap={4}
        >
          <Box onClick={() => setCurTab(1)}>
            <PrevButton disabled={false} />
          </Box>
          <Box
            onClick={() => {
              setShowError(true);
              !disabled ? handleSubmit() : null;
            }}
          >
            <Box
              sx={{
                background: disabled ? "#efefef" : "#eeece1",
                borderRadius: "8px",
                color: disabled ? "#d0d0d0" : "unset",
                cursor: "pointer",
                p: "8px 16px",
                margin: "0 auto",
                width: "fit-content",
              }}
            >
              Submit
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ThirdStep;
