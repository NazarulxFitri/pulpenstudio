import { ErrorMessage, ListNumber, NextButton } from "@/components";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Box, Grid, TextField } from "@mui/material";
import PrevButton from "@/components/Button/Prev";
import { useState } from "react";

interface SecondStepProps {
  curTab: number;
  title1Groom: string;
  title1Bride: string;
  title2: string;
  location: string;
  dateTime: string;
  setTitle1Groom: (value: string) => void;
  setTitle1Bride: (value: string) => void;
  setTitle2: (value: string) => void;
  setLocation: (value: string) => void;
  setDateTime: (value: string) => void;
  setCurTab: (value: number) => void;
}

const SecondStep: React.FC<SecondStepProps> = ({
  curTab,
  title1Groom,
  title1Bride,
  title2,
  location,
  dateTime,
  setTitle1Groom,
  setTitle1Bride,
  setTitle2,
  setLocation,
  setDateTime,
  setCurTab,
}) => {
  const [showError, setShowError] = useState(false);
  const disabled =
    !title1Groom || !title1Bride || !title2 || !location || !dateTime;

  return (
    <Box>
      <Box display="flex" mt={4}>
        <ListNumber circle={true} number={2} />
        <h4 dangerouslySetInnerHTML={{ __html: "Event Details" }} />
      </Box>
      <Grid container rowGap={4}>
        <Grid item xs={12} md={4}>
          <Box mt={2} gap={2} sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              InputLabelProps={{ shrink: true }}
              placeholder="Judika"
              label="Title : Nama pengantin Lelaki"
              variant="standard"
              value={title1Groom}
              onChange={(e) => setTitle1Groom(e.currentTarget.value)}
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              placeholder="Mahalini"
              label="Title : Nama pengantin Perempuan"
              variant="standard"
              value={title1Bride}
              onChange={(e) => setTitle1Bride(e.currentTarget.value)}
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              placeholder="Leo Messi & Angelia serta Paul Robert & Marissa"
              label="Nama wakil penganjur"
              variant="standard"
              value={title2}
              onChange={(e) => setTitle2(e.currentTarget.value)}
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              placeholder="Glass Hall, Forest Valley, Cheras"
              label="Lokasi"
              variant="standard"
              value={location}
              onChange={(e) => setLocation(e.currentTarget.value)}
            />
            <DateTimePicker
              sx={{ m: "16px 0" }}
              label="Tarikh & Masa"
              // @ts-ignore
              onChange={(e) => setDateTime(e.$d.toString())}
            />
          </Box>
        </Grid>
        <Grid xs={12} md={8} px={{ xs: 0, md: 6 }}>
          <h4 style={{ fontSize: "16px", fontWeight: "500" }}>
            What should I fill in here ?
          </h4>
          <p style={{ marginTop: "12px" }}>
            1. &quot;Title : Nama pengantin Lelaki&quot; & &quot;Title : Nama
            pengantin Perempuan&quot; - The groom and bride name. Will be
            applied at front of the card and few other places such as on hashtag
            and on the invitation text
          </p>
          <p style={{ marginTop: "12px" }}>
            2. &quot;Nama wakil penganjur&quot; - Can be paretns of the bride or
            groom , also can be just a any text to be represented etc. &quot;Me
            & Family&quot;. Will be applied at invitation text.
          </p>
          <p style={{ marginTop: "12px" }}>
            3. &quot;Lokasi&quot; - Name of the event place. Will be applied at
            front of the card and few other places
          </p>
          <p style={{ marginTop: "12px" }}>
            4. &quot;Tarikh & Masa&quot; - Date & time for the event. Applied at
            front of the card and few other places
          </p>
        </Grid>
      </Grid>
      <Box textAlign={"center"} mt={2}>
        {showError && disabled && (
          <ErrorMessage message="Please fill in all fields" />
        )}
        <Box
          sx={{ display: "flex", width: "fit-content", mx: "auto", mt: 1 }}
          gap={4}
        >
          <Box onClick={() => setCurTab(0)}>
            <PrevButton disabled={false} />
          </Box>
          <Box
            onClick={() => {
              !disabled ? setCurTab(2) : null;
              setShowError(true);
            }}
          >
            <NextButton disabled={disabled} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SecondStep;
