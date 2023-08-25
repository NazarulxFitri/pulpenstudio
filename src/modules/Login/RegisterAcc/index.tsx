import { ErrorMessage, RibbonBanner } from "@/components";
import usePostAddUser from "@/data/postAddUser";
import useGetUser from "@/data/useGetUser";
import useCheckCapitalCase from "@/utils/useCheckCapitalCase";
import useCheckUsername from "@/utils/useCheckUserName";
import useCheckWhiteSpace from "@/utils/useCheckWhiteSpace";
import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { useState } from "react";

interface RegisterAccProps {
  showRegister: boolean;
  setShowRegister: (value: boolean) => void;
}

const RegisterAcc: React.FC<RegisterAccProps> = ({
  showRegister,
  setShowRegister,
}) => {
  const { data } = useGetUser();
  const { action, loading } = usePostAddUser();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  // @ts-ignore
  const existence = useCheckUsername(data, name);
  const capitalCase = useCheckCapitalCase(name);
  const whiteSpace = useCheckWhiteSpace(name);

  const isDisabled =
    !!whiteSpace ||
    !!capitalCase ||
    !password ||
    !contactNumber ||
    !!existence ||
    !emailAddress;

  function handleSubmit() {
    if (!!isDisabled) {
      return;
    }
    action(name, password, contactNumber, emailAddress);
    window.location.reload();
  }

  return (
    <Box
      sx={{
        display: !showRegister ? "none" : "flex",
        flexDirection: "column",
      }}
      gap={1}
    >
      <p style={{ fontSize: "24px", fontWeight: "700" }}>Register</p>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
        <Input onChange={(e) => setName(e.target.value)} />
        {!!existence && !!name && (
          <ErrorMessage message="There is an account associated with the name" />
        )}
        {!!whiteSpace && (
          <ErrorMessage message="Please make sure no whitespace" />
        )}
        {!!capitalCase && (
          <ErrorMessage message="Please make sure no capital case" />
        )}
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input type={"text"} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="standard-adornment-contact-number">
          Contact Number
        </InputLabel>
        <Input
          type={"text"}
          onChange={(e) => setContactNumber(e.target.value)}
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="standard-adornment-contact-email">
          Email address
        </InputLabel>
        <Input
          type={"text"}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
      </FormControl>
      <Box
        sx={{
          background: isDisabled ? "#EEEEEE" : "#FFFFFF",
          borderRadius: "24px",
          boxShadow: "1px 1px 10px #DDD0C8",
          mt: 2,
          p: "8px 24px",
          width: "fit-content",
          "&:hover": {
            background: isDisabled ? "EEEEEE" : "#DDD0C8",
          },
        }}
        onClick={handleSubmit}
      >
        Confirm
      </Box>
      <Box
        sx={{ cursor: "pointer", mt: 2, width: "fit-content" }}
        onClick={() => setShowRegister(false)}
      >
        <p style={{ fontSize: "12px" }}>
          Already have account ? Click <b>here</b> to login
        </p>
      </Box>
    </Box>
  );
};

export default RegisterAcc;
