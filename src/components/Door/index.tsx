import { Box } from "@mui/material";

interface DoorProps {
  color: string;
  children: any;
  clickOpen: boolean;
  setClickOpen: (value: boolean) => void;
}

const Door: React.FC<DoorProps> = ({
  color,
  children,
  clickOpen,
  setClickOpen,
}) => {
  return (
    <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
      <Box
        sx={{
          // background:
          //   "linear-gradient(356deg,#fefefe,#f2f2f4 18%,#f1f1f3 45%,#f2f2f2 74%,#f1f1f1)",
          display: "flex",
          position: "relative",
        }}
      >
        <Box
          className={clickOpen ? "animate__animated animate__slideOutLeft" : ""}
          id="left-door"
          sx={{
            background: "#FFF",
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
            background: "#FFF",
            boxShadow: "-10px 0px 20px #D0D0D0",
            width: "50%",
            height: "100vh",
            zIndex: "2",
          }}
        />
        <Box
          className={clickOpen ? "animate__animated animate__fadeOut" : ""}
          onClick={() => setClickOpen(true)}
          sx={{
            background: color,
            borderRadius: "80%",
            boxShadow: `1px 1px 10px ${color}`,
            px: 3,
            py: 4,
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
