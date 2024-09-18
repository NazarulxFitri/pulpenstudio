import { Box } from "@mui/material";
import Image from "next/image";

interface DoorProps {
  color: string;
  doorMainColor?: string;
  children: any;
  clickOpen: boolean;
  setClickOpen: (value: boolean) => void;
  specialBg?: boolean;
  removePadding?: boolean;
  ainaa?: boolean;
  khairuAmira?: boolean;
  aisyahEffi?: boolean;
  asyiqinasyraf?: boolean;
}

const Door: React.FC<DoorProps> = ({
  color,
  children,
  clickOpen,
  setClickOpen,
  doorMainColor,
  specialBg,
  removePadding,
  ainaa,
  khairuAmira,
  aisyahEffi,
  asyiqinasyraf,
}) => {
  if (asyiqinasyraf)
    return (
      <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            position: "relative",
          }}
        >
          <Box
            className={
              clickOpen ? "animate__animated animate__slideOutLeft" : ""
            }
            id="left-door"
            sx={{
              background: specialBg ? "" : "#FFF",
              backgroundImage: specialBg
                ? "url('/media/animation/test12.PNG')"
                : "",
              backgroundSize: "contain",
              backgroundRepeat: "round",
              width: "50%",
              height: "100vh",
              zIndex: "2",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "0",
              right: "0%",
              marginTop: "-60px",
              opacity: "0.5",
            }}
          >
            <Image
              src="/media/animation/layout12-art.webp"
              alt="Pulpen Studio Green Leaf"
              width={400}
              height={400}
            />
          </Box>
          <Box
            className={
              clickOpen ? "animate__animated animate__slideOutRight" : ""
            }
            id="right-door"
            sx={{
              backgroundSize: "cover",
              boxShadow: specialBg ? "unset" : "-10px 0px 20px #D0D0D0",
              width: "50%",
              height: "100vh",
              zIndex: "2",
            }}
          />
          <Box
            className={clickOpen ? "animate__animated animate__fadeOut" : ""}
            onClick={() => setClickOpen(true)}
            sx={{
              background: "#FFF",
              borderRadius: specialBg ? "0" : "80%",
              boxShadow: specialBg ? "0" : `-8px 8px 8px #D0D0D0`,
              px: removePadding ? 0 : 3,
              pt: removePadding ? 0 : 4,
              pb: specialBg ? 6 : removePadding ? 0 : 4,
              position: "absolute",
              textAlign: "center",
              left: "50%",
              top: {
                xs: specialBg ? "50%" : "20%",
                sm: specialBg ? "50%" : "50%",
              },
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

  if (khairuAmira)
    return (
      <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            position: "relative",
          }}
        >
          <Box
            className={
              clickOpen ? "animate__animated animate__slideOutLeft" : ""
            }
            id="left-door"
            sx={{
              background: specialBg ? "" : "#FFF",
              backgroundImage: specialBg
                ? "url('/media/animation/test12.PNG')"
                : "",
              backgroundSize: "contain",
              backgroundRepeat: "round",
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
              backgroundImage: "url('/media/animation/993-bg.jpg')",
              backgroundSize: "cover",
              boxShadow: specialBg ? "unset" : "-10px 0px 20px #D0D0D0",
              width: "50%",
              height: "100vh",
              zIndex: "2",
            }}
          />
          <Box
            className={clickOpen ? "animate__animated animate__fadeOut" : ""}
            onClick={() => setClickOpen(true)}
            sx={{
              background: "#FFF",
              borderRadius: specialBg ? "0" : "80%",
              boxShadow: specialBg ? "0" : `-8px 8px 8px #D0D0D0`,
              px: removePadding ? 0 : 3,
              pt: removePadding ? 0 : 4,
              pb: specialBg ? 6 : removePadding ? 0 : 4,
              position: "absolute",
              textAlign: "center",
              left: "50%",
              top: {
                xs: specialBg ? "50%" : "20%",
                sm: specialBg ? "50%" : "50%",
              },
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

  if (ainaa)
    return (
      <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
        <Box
          className={clickOpen ? "animate__animated animate__fadeOut" : ""}
          onClick={() => setClickOpen(true)}
          sx={{ position: "absolute", height: "100vh", zIndex: 1 }}
        >
          <Image
            src="/media/animation/door-ainaa.jpeg"
            alt="Pulpen Studio"
            width={400}
            height={800}
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
      </Box>
    );

  if (aisyahEffi)
    return (
      <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            position: "relative",
          }}
        >
          <Box
            className={
              clickOpen ? "animate__animated animate__slideOutLeft" : ""
            }
            id="left-door"
            sx={{
              background: specialBg ? "" : "#FFF",
              backgroundImage: specialBg
                ? "url('/media/animation/test12.PNG')"
                : "",
              backgroundSize: "contain",
              backgroundRepeat: "round",
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
              backgroundImage: "url('/media/animation/painted-bg.jpg')",
              backgroundSize: "cover",
              boxShadow: specialBg ? "unset" : "-10px 0px 20px #D0D0D0",
              width: "50%",
              height: "100vh",
              zIndex: "2",
            }}
          />
          <Box
            className={clickOpen ? "animate__animated animate__fadeOut" : ""}
            onClick={() => setClickOpen(true)}
            sx={{
              background: "#FFF",
              borderRadius: specialBg ? "0" : "80%",
              boxShadow: specialBg ? "0" : `-8px 8px 8px #D0D0D0`,
              px: removePadding ? 0 : 3,
              pt: removePadding ? 0 : 4,
              pb: specialBg ? 6 : removePadding ? 0 : 4,
              position: "absolute",
              textAlign: "center",
              left: "50%",
              top: {
                xs: specialBg ? "50%" : "20%",
                sm: specialBg ? "50%" : "50%",
              },
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
              ? "url('/media/animation/test12.PNG')"
              : "",
            backgroundSize: "contain",
            backgroundRepeat: "round",
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
              ? "url('/media/animation/test13.PNG')"
              : "",
            backgroundSize: "contain",
            backgroundRepeat: "round",
            boxShadow: specialBg ? "unset" : "-10px 0px 20px #D0D0D0",
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
            borderRadius: specialBg ? "0" : "80%",
            boxShadow: specialBg ? "0" : `-8px 8px 8px #D0D0D0`,
            px: removePadding ? 0 : 3,
            pt: removePadding ? 0 : 4,
            pb: specialBg ? 6 : removePadding ? 0 : 4,
            position: "absolute",
            textAlign: "center",
            left: "50%",
            top: {
              xs: specialBg ? "50%" : "20%",
              sm: specialBg ? "50%" : "50%",
            },
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
