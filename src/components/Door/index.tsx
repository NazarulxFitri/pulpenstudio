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
  yasminFaiz?: boolean;
  fakhruz?: boolean;
  shahida?: boolean;
  lailyDinie?: boolean;
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
  yasminFaiz,
  fakhruz,
  shahida,
  lailyDinie
}) => {
  if (lailyDinie)
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
              background: "#FFF",
              boxShadow: specialBg ? "unset" : "-10px 0px 20px #D0D0D0",
              width: "50%",
              height: "100vh",
              zIndex: "2",
            }}
          ><Box sx={{ position: "absolute", right: "-30px", bottom: "450px" }}>
              <Image src="/media/animation/flower-bottom.jpg" alt="Laily Dinie" width={120} height={900} style={{ height: "100%", width: "auto" }} />
            </Box>
            <Box sx={{ position: "absolute", right: "-30px", bottom: "300px" }}>
              <Image src="/media/animation/flower-bottom.jpg" alt="Laily Dinie" width={120} height={900} style={{ height: "100%", width: "auto" }} />
            </Box>
            <Box sx={{ position: "absolute", right: "-30px", bottom: "150px" }}>
              <Image src="/media/animation/flower-bottom.jpg" alt="Laily Dinie" width={120} height={900} style={{ height: "100%", width: "auto" }} />
            </Box>
            <Box sx={{ position: "absolute", right: "-30px", bottom: "-40px" }}>
              <Image src="/media/animation/flower-bottom.jpg" alt="Laily Dinie" width={120} height={900} style={{ height: "100%", width: "auto" }} />
            </Box>
          </Box>
          <Box
            className={clickOpen ? "animate__animated animate__fadeOut" : ""}
            onClick={() => setClickOpen(true)}
            sx={{
              background: "#fff",
              borderRadius: specialBg ? "0" : "80%",
              boxShadow: specialBg ? "0" : `-8px 8px 8px #D0D0D0`,
              px: removePadding ? 0 : 6,
              pt: removePadding ? 0 : 4,
              pb: specialBg ? 6 : removePadding ? 0 : 4,
              position: "absolute",
              textAlign: "center",
              left: "50%",
              top: {
                xs: specialBg ? "50%" : "45%",
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


  if (yasminFaiz)
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
              backgroundImage: "url('/media/animation/slice-yasmin.png')",
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
              background: "#fff",
              borderRadius: specialBg ? "0" : "80%",
              boxShadow: specialBg ? "0" : `-8px 8px 8px #D0D0D0`,
              px: removePadding ? 0 : 3,
              pt: removePadding ? 0 : 4,
              pb: specialBg ? 6 : removePadding ? 0 : 4,
              position: "absolute",
              textAlign: "center",
              left: "50%",
              top: {
                xs: specialBg ? "50%" : "45%",
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

  if (fakhruz)
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
              backgroundImage: "url('/media/animation/slice-f-h.svg')",
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
              width: "104px",
              height: "80px",
              zIndex: "3",
            }}
          >
            <Image style={{
              color: "transparent",
              top: "50%",
              position: "absolute",
              left: "50%",
              transform: "translate(-50%,-50%)"
            }}
              src="/media/animation/fh-signage.png" alt="Fakhruz" width={220} height={80} />
          </Box>
        </Box>
      </Box>
    );

  if (shahida)
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
              backgroundImage: "url('/media/animation/shahida-slice.svg')",
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
