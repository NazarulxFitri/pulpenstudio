import useGetCountDownTimer from "@/data/useGetCountDownTimer";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  styled,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useEffect } from "react";

interface TopContentFormProps {
  accordionTitle: string;
  setFirstIntro: (value: string) => void;
  setSecondIntro: (value: string) => void;
  setTitle: (value: string) => void;
  setDate: (value: string) => void;
  setDay: (value: string) => void;
  setDateTime: (value: string) => void;
  dateTime: any;
  setCountdownDate: (value: any) => void;
  setTime: (value: string) => void;
  setLocation: (value: string) => void;
  firstIntro: string;
  secondIntro: string;
  title: string;
  location: string;
  addedItem: any;
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
  setDateTime,
  dateTime,
  setCountdownDate,
  setTime,
  setLocation,
  firstIntro,
  secondIntro,
  title,
  location,
  addedItem,
}) => {
  const myInputDate = dateTime?.toLocaleString("ms-MY", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const myInputTime = dateTime?.toLocaleTimeString("en", {
    timeStyle: "short",
  });
  const myInputDay = dateTime?.toLocaleDateString("en", { weekday: "long" });

  const countdownTimerParam = useGetCountDownTimer(dateTime);
  function getCountDownTimer() {
    setCountdownDate(countdownTimerParam);
  }

  useEffect(() => {
    setFirstIntro(addedItem?.firstIntro);
    setSecondIntro(addedItem?.secondIntro);
    setTitle(addedItem?.title);
    setLocation(addedItem?.location);
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
          fullWidth
          defaultValue={firstIntro}
          onChange={(e) => {
            setFirstIntro(e.target.value);
          }}
          multiline
          variant="standard"
        />
        <Input
          InputLabelProps={{ shrink: true }}
          label="Second Intro"
          fullWidth
          defaultValue={secondIntro}
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
        <DateTimePicker
          sx={{ m: "16px 0", width: "100%" }}
          label="Enter Date & Time"
          onChange={(e) => {
            // @ts-ignore
            setDate(myInputDate);
            // @ts-ignore
            setDay(myInputDay);
            // @ts-ignore
            setTime(myInputTime);
            // @ts-ignore
            setDateTime(e.$d);
            getCountDownTimer();
          }}
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
