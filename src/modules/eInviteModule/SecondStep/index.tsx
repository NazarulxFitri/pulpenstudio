import { ListNumber } from "@/components";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Box, TextField } from "@mui/material";

interface SecondStepProps {
  curTab: number;
  setTitle1Groom: (value: string) => void;
  setTitle1Bride: (value: string) => void;
  setTitle2: (value: string) => void;
  setLocation: (value: string) => void;
  setDateTime: (value: string) => void;
  setCurTab: (value: number) => void;
}

const SecondStep: React.FC<SecondStepProps> = ({
  curTab,
  setTitle1Groom,
  setTitle1Bride,
  setTitle2,
  setLocation,
  setDateTime,
  setCurTab,
}) => {
  return (
    <Box>
      <Box display="flex" mt={4}>
        <ListNumber circle={true} number={2} />
        <h4 dangerouslySetInnerHTML={{ __html: "Event Details" }} />
      </Box>
      <Box mt={2} gap={2} sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="standard-basic"
          placeholder="Judika"
          label="Title : Nama pengantin Lelaki"
          variant="standard"
          sx={{ width: { xs: "100%", md: "50%" } }}
          onChange={(e) => setTitle1Groom(e.currentTarget.value)}
        />
        <TextField
          id="standard-basic"
          placeholder="Mahalini"
          label="Title : Nama pengantin Perempuan"
          variant="standard"
          sx={{ width: { xs: "100%", md: "50%" } }}
          onChange={(e) => setTitle1Bride(e.currentTarget.value)}
        />
        <TextField
          id="standard-basic"
          placeholder="Leo Messi & Angelia serta Paul Robert & Marissa"
          label="Nama wakil penganjur"
          variant="standard"
          sx={{ width: { xs: "100%", md: "50%" } }}
          onChange={(e) => setTitle2(e.currentTarget.value)}
        />
        <TextField
          id="standard-basic"
          placeholder="Glass Hall, Forest Valley, Cheras"
          label="Lokasi"
          variant="standard"
          sx={{ width: { xs: "100%", md: "50%" } }}
          onChange={(e) => setLocation(e.currentTarget.value)}
        />
        <DateTimePicker
          sx={{ m: "16px 0", width: "50%" }}
          label="Tarikh & Masa"
          // @ts-ignore
          onChange={(e) => setDateTime(e.$d.toString())}
        />
      </Box>
      <Box
        sx={{ display: "flex", width: "fit-content", mx: "auto", mt: 8 }}
        gap={4}
      >
        <Box onClick={() => setCurTab(0)}>Prev</Box>
        <Box onClick={() => setCurTab(2)}>Next</Box>
      </Box>
    </Box>
  );
};

export default SecondStep;
