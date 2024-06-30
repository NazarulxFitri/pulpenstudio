import usePostUpdateRsvp from "@/data/postUpdateRsvp";
import useGetEinvite from "@/data/useGetEinvite";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputLabel,
  Switch,
  TextField,
  styled,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface RsvpFormProps {
  includePhoneNumber?: boolean;
  includeOrigin?: boolean;
  localeAttend: string;
  localeNotAttend: string;
  textAttendance: string;
  textName: string;
  textPhoneNumber: string;
  textPax: string;
  textButton: string;
  themeColor: string;
}

const Input = styled(TextField)(() => ({
  margin: "4px 0",
}));

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const RsvpForm: React.FC<RsvpFormProps> = ({
  includePhoneNumber,
  includeOrigin,
  localeAttend,
  localeNotAttend,
  textAttendance,
  textName,
  textPhoneNumber,
  textPax,
  textButton,
  themeColor,
}) => {
  const router = useRouter();
  const id = router.query.eInviteId;

  const { rsvpLength } = useGetEinvite(id as string);
  const { action } = usePostUpdateRsvp(id as string);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [attendance, setAttendance] = useState(false);
  const [pax, setPax] = useState<number>(1);
  const [kidPax, setKidPax] = useState<number>(0);
  const [guestSide, setGuestSide] = useState("bride");

  const [errorMessage, setErrorMessage] = useState(false);

  const disabled = !name;

  useEffect(() => {
    !includeOrigin && setGuestSide("general")
  }, [])

  async function handleClick() {
    if (disabled) {
      setErrorMessage(true);
      return null;
    }
    await action(name, phoneNumber, attendance, pax, kidPax, rsvpLength!, guestSide);
    router.reload();
  }

  return (
    <Box>
      <FormGroup>
        <Box display='flex'>
          <p style={{ color: "#909090", fontSize: "12px" }}>
           Tidak Hadir | <i>Not Attend</i>
          </p>
          {/* @ts-ignore */}
          <FormControlLabel
          sx={{ width: "fit-content"}}
            control={
              <Android12Switch
                sx={{ m: 1 }}
                onChange={(e) => setAttendance(e.target.checked)}
              />
            }
          />
          <p style={{ color: "#909090", fontSize: "12px", display: "block", marginLeft: "-24px" }}>
           Hadir | <i>Attend</i>
          </p>
        </Box>
        <Input
          fullWidth
          placeholder="Ahmad Judika"
          InputLabelProps={{ shrink: true }}
          sx={{
            "& label.Mui-focused": {
              color: "#333",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: themeColor,
            },
            mt: 2,
            width: "100%",
          }}
          error={errorMessage && !name}
          label={<p style={{ color: "#909090", fontSize: "12px" }}>
          {textName} | Name
        </p>}
          multiline
          variant="standard"
          onChange={(e) => setName(e.target.value)}
        />

        {includePhoneNumber && 
        <Input
          placeholder="01156271776"
          error={errorMessage && !phoneNumber}
          InputLabelProps={{ shrink: true }}
          sx={{
            "& label.Mui-focused": {
              color: "#333",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: themeColor,
            },
            mt: 2,
          }}
          label={textPhoneNumber}
          multiline
          variant="standard"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />}

        {attendance && (
          <>
            {includeOrigin && 
            <Box my={2}>  
              <FormControlLabel
                sx={{
                  "& .MuiFormControlLabel-label": {
                    color: "#00000099",
                    fontSize: "12px",
                  },
                }}
                label="Dari pihak pengantin perempuan | From bride side"
                control={<Checkbox checked={guestSide === "bride"} onClick={() => setGuestSide("bride")} />}
              />
               <FormControlLabel
                sx={{
                  "& .MuiFormControlLabel-label": {
                    color: "#00000099",
                    fontSize: "12px",
                  },
                }}
                label="Dari pihak pengantin lelaki | From groom side"
                control={<Checkbox checked={guestSide === "groom"} onClick={() => setGuestSide("groom")}  />}
              />
            </Box>
            }

            <Input
              variant="standard"
              sx={{
                "& label.Mui-focused": {
                  color: "#333",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: themeColor,
                },
                mt: 2,
              }}
              value={pax}
              label={"Pax dewasa | Adult pax"}
              type="number"
              onChange={(e) => setPax(+e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Input
              variant="standard"
              sx={{
                "& label.Mui-focused": {
                  color: "#333",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: themeColor,
                },
                mt: 2,
              }}
              value={kidPax}
              label={"Pax kanak-kanak | Kids pax"}
              type="number"
              onChange={(e) => setKidPax(+e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </>
        )}
      </FormGroup>

      <Box
        sx={{
          background: themeColor,
          color: "unset",
          boxShadow: "1px 1px solid #EFEFEF",
          width: "fit-content",
          borderRadius: "8px",
          mt: 2,
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <p
          style={{
            cursor: "pointer",
            padding: "12px 32px",
            fontWeight: "bolder",
          }}
          dangerouslySetInnerHTML={{ __html: `${textButton} | Submit` }}
        />
      </Box>
    </Box>
  );
};

export default RsvpForm;
