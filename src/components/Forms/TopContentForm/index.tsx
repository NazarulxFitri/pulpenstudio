import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  styled,
} from "@mui/material";

interface TopContentFormProps {
  accordionTitle: string;
  setFirstIntro: (value: string) => void;
  setSecondIntro: (value: string) => void;
  setTitle: (value: string) => void;
  setDate: (value: string) => void;
  setDay: (value: string) => void;
  setTime: (value: string) => void;
  setLocation: (value: string) => void;
  firstIntro: string;
  secondIntro: string;
  title: string;
  date: string;
  day: string;
  time: string;
  location: string;
}

const Input = styled(TextField)(() => ({
  background: "#FFF",
  margin: "4px 0",
}));

const TopContentForm: React.FC<TopContentFormProps> = ({
  accordionTitle,
  setFirstIntro,
  setSecondIntro,
  setTitle,
  setDate,
  setDay,
  setTime,
  setLocation,
  firstIntro,
  secondIntro,
  title,
  date,
  day,
  time,
  location,
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
          defaultValue={firstIntro}
          label="First Intro"
          fullWidth
          onChange={(e) => {
            setFirstIntro(e.target.value);
          }}
          multiline
          variant="standard"
        />
        <Input
          InputLabelProps={{ shrink: true }}
          defaultValue={secondIntro}
          label="Second Intro"
          fullWidth
          onChange={(e) => {
            setSecondIntro(e.target.value);
          }}
          multiline
          variant="standard"
        />
        <Input
          InputLabelProps={{ shrink: true }}
          defaultValue={title}
          label="Title"
          fullWidth
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          multiline
          variant="standard"
        />
        <Input
          InputLabelProps={{ shrink: true }}
          defaultValue={date}
          label="Date"
          fullWidth
          onChange={(e) => {
            setDate(e.target.value);
          }}
          multiline
          variant="standard"
        />
        <Input
          InputLabelProps={{ shrink: true }}
          defaultValue={day}
          label="Day"
          fullWidth
          onChange={(e) => {
            setDay(e.target.value);
          }}
          multiline
          variant="standard"
        />
        <Input
          InputLabelProps={{ shrink: true }}
          defaultValue={time}
          label="Time"
          fullWidth
          onChange={(e) => {
            setTime(e.target.value);
          }}
          multiline
          variant="standard"
        />

        <Input
          InputLabelProps={{ shrink: true }}
          defaultValue={location}
          label="Location"
          fullWidth
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          multiline
          variant="standard"
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default TopContentForm;
