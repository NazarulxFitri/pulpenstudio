import {
  ErrorMessage,
  EyeCloseIcon,
  EyeOpenIcon,
  UserIcon,
} from "@/components";
import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import RegisterAcc from "./RegisterAcc";
import useGetUser from "@/data/useGetUser";
import useCheckauth from "@/utils/useCheckAuth";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const { data } = useGetUser();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [invalidName, setInvalidName] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const [showRegister, setShowRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  let keyId: any;

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  function onSuccess() {
    sessionStorage.setItem("authToken", keyId);
    router.push("/");
  }

  function handleClick() {
    for (const key in data as any) {
      // @ts-ignore
      if (data[key].name === name) {
        keyId = key;
      }
    }
    if (!!keyId) {
      // @ts-ignore
      data?.[keyId].password === password
        ? onSuccess()
        : setInvalidPassword(true);
    }
    if (!keyId) {
      setInvalidName(true);
    }
  }

  return (
    <Box
      sx={{
        borderRadius: "24px",
        boxShadow: "1px 1px 10px #f0f0f0",
        margin: "56px auto",
        padding: "32px 56px",
        width: "368px",
      }}
    >
      <Box
        sx={{
          display: showRegister ? "none" : "flex",
          flexDirection: "column",
        }}
        gap={1}
      >
        <p style={{ fontSize: "24px", fontWeight: "700" }}>Login</p>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
          <Input
            onChange={(e) => {
              setName(e.target.value);
              setInvalidName(false);
            }}
          />
          {invalidName && <ErrorMessage message={"Invalid username"} />}
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
              setInvalidPassword(false);
            }}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {!showPassword ? <EyeCloseIcon /> : <EyeOpenIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
          {invalidPassword && <ErrorMessage message={"Invalid password"} />}
        </FormControl>
        <Box
          onClick={handleClick}
          sx={{
            borderRadius: "24px",
            boxShadow: "1px 1px 10px pink",
            mt: 2,
            p: "8px 24px",
            width: "fit-content",
            "&:hover": {
              background: "pink",
            },
          }}
        >
          Submit
        </Box>
        <Box
          sx={{ cursor: "pointer", mt: 2, width: "fit-content" }}
          onClick={() => setShowRegister(true)}
        >
          <p style={{ fontSize: "12px" }}>
            Dont have account yet ? Click <b>here</b> to register
          </p>
        </Box>
      </Box>

      {showRegister && <RegisterAcc {...{ showRegister, setShowRegister }} />}
    </Box>
  );
};

export default Login;
