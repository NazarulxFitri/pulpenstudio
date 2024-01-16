import { Box } from "@mui/material";

interface DoorProps {
    color: string;
    children: any;
    clickOpen: boolean;
    setClickOpen: (value: boolean) => void;
}

const Door: React.FC<DoorProps> = ({color, children, clickOpen, setClickOpen}) => {
  return (
    <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
      <Box sx={{ display: "flex", position:"relative" }}>
        <Box
          className={clickOpen ? "animate__animated animate__slideOutLeft" : ""}
          id="left-door"
          sx={{
            background: "#FFF",
            borderRight: `1px solid ${color}`,
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
