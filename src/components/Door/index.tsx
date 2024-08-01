import { Box } from "@mui/material";

interface DoorProps {
  color: string;
  doorMainColor?: string;
  children: any;
  clickOpen: boolean;
  setClickOpen: (value: boolean) => void;
  specialBg?: boolean;
  removePadding?: boolean;
}

const Door: React.FC<DoorProps> = ({
  color,
  children,
  clickOpen,
  setClickOpen,
  doorMainColor,
  specialBg,
  removePadding,
}) => {
  return (
    <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          position: "relative",
        }}
      >
        <Box
          className={clickOpen ? "animate__animated animate__slideOutLeft" : ""}
          id="left-door"
          sx={{
            background: specialBg ? "" : "#FFF",
            backgroundImage: specialBg
              ? "url('/media/animation/door-aiman.jpeg')"
              : "",
            backgroundSize: "cover",
            width: "50%",
            height: "100vh",
            zIndex: "2",
          }}
        />
        <Box
          className={
            clickOpen ? "animate__animated animate__slideOutRight" : ""
          }
          id="right-door"
          sx={{
            background: specialBg ? "" : "#FFF",
            backgroundImage: specialBg
              ? "url('/media/animation/door-aiman.jpeg')"
              : "",
            backgroundSize: "cover",
            boxShadow: "-10px 0px 20px #D0D0D0",
            width: "50%",
            height: "100vh",
            transform: "scaleX(-1)",
            zIndex: "2",
          }}
        />
        <Box
          className={clickOpen ? "animate__animated animate__fadeOut" : ""}
          onClick={() => setClickOpen(true)}
          sx={{
            background: color,
            borderRadius: specialBg ? "0" : "80%",
            boxShadow: specialBg ? "0" : `-8px 8px 8px #D0D0D0`,
            px: removePadding ? 0 : 3,
            pt: removePadding ? 0 : 4,
            pb: specialBg ? 6 : removePadding ? 0 : 4,
            position: "absolute",
            textAlign: "center",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            minWidth: "60px",
            zIndex: "3",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Door;
