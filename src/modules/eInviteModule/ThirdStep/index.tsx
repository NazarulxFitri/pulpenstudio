import { ListNumber } from "@/components";
import { Box, TextField } from "@mui/material";

interface ThirdStepProps {
  curTab: number;
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
  setNamePerson1,
  setPhonePerson1,
  setNamePerson2,
  setPhonePerson2,
  setMapUrl,
  setMusicUrl,
  setCurTab,
  handleSubmit,
}) => {
  return (
    <Box>
      <Box display="flex" mt={4}>
        <ListNumber circle={true} number={3} />
        <h4 dangerouslySetInnerHTML={{ __html: "Content" }} />
      </Box>
      <Box mt={2} gap={2} sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="standard-basic"
          placeholder="Zack"
          label="Nama orang untuk dihubungi 1"
          variant="standard"
          sx={{ width: { xs: "100%", md: "50%" } }}
          onChange={(e) => setNamePerson1(e.currentTarget.value)}
        />
        <TextField
          id="standard-basic"
          placeholder="01156271776"
          label="Nombor orang untuk dihubungi telefon 1"
          variant="standard"
          sx={{ width: { xs: "100%", md: "50%" } }}
          onChange={(e) => setPhonePerson1(e.currentTarget.value)}
        />
        <TextField
          id="standard-basic"
          placeholder="Wendy"
          label="Nama orang untuk dihubungi 2"
          variant="standard"
          sx={{ width: { xs: "100%", md: "50%" } }}
          onChange={(e) => setNamePerson2(e.currentTarget.value)}
        />
        <TextField
          id="standard-basic"
          placeholder="01156271776"
          label="Nombor orang untuk dihubungi telefon 2"
          variant="standard"
          sx={{ width: { xs: "100%", md: "50%" } }}
          onChange={(e) => setPhonePerson2(e.currentTarget.value)}
        />
        <TextField
          id="standard-basic"
          placeholder="https://www.google.com/maps/dir//glasshall+forest+valley/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cc358ea1ca26ff:0xed9060ff23e7def2?sa=X&ved=2ahUKEwi7nsWm3cyAAxU_wTgGHUmXCJEQ9Rd6BAhOEAA&ved=2ahUKEwi7nsWm3cyAAxU_wTgGHUmXCJEQ9Rd6BAhWEAQ"
          label="Google Map URL"
          variant="standard"
          sx={{ width: { xs: "100%", md: "50%" } }}
          onChange={(e) => setMapUrl(e.currentTarget.value)}
        />
        <TextField
          id="standard-basic"
          placeholder="https://www.google.com/maps/dir//glasshall+forest+valley/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cc358ea1ca26ff:0xed9060ff23e7def2?sa=X&ved=2ahUKEwi7nsWm3cyAAxU_wTgGHUmXCJEQ9Rd6BAhOEAA&ved=2ahUKEwi7nsWm3cyAAxU_wTgGHUmXCJEQ9Rd6BAhWEAQ"
          label="Pilihan lagu (youtube)"
          variant="standard"
          sx={{ width: { xs: "100%", md: "50%" } }}
          onChange={(e) => setMusicUrl(e.currentTarget.value)}
        />
      </Box>
      <Box
        sx={{ display: "flex", width: "fit-content", mx: "auto", mt: 8 }}
        gap={4}
      >
        <Box onClick={() => setCurTab(1)}>Prev</Box>
        <Box onClick={handleSubmit}>Submit</Box>
      </Box>
    </Box>
  );
};

export default ThirdStep;
