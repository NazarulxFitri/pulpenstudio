import {
  BoxContainer,
  EmailIcon,
  InstagramIcon,
  TiktokIcon,
  WhatsappIcon,
} from "@/components";
import BreadcrumbModule from "../BreadcrumbModule";
import { Box, Grid, Link, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const ContactUsModule = () => {
  const [clicked, setClicked] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const arrName = name.split(" ");
  const arrMessage = message.split(" ");

  function joinedMessage() {
    return (
      `https://api.whatsapp.com/send?phone=601156271776&text=Hi%20%2C%20saya%20datang%20dari%20PulpenStudio%20-%20ContactUs%20.%20Saya%20${arrName.join(
        "%20"
      )}%20.%20` + arrMessage.join("%20")
    );
  }

  function handleClick() {
    setInterval(() => {
      setClicked(true);
      setName("");
      setMessage("");
      setShowBanner(true);
    }, 2000);
  }

  return (
    <BoxContainer>
      {showBanner && (
        <Box
          mt={4}
          id="banner"
          sx={{ background: "#eeece1", p: 2, borderRadius: "24px" }}
        >
          You have successfully navigated to quick message
        </Box>
      )}
      <h1 style={{ fontSize: "24px", marginTop: "40px" }}>Contact Us</h1>
      <Box mt={2}>
        <BreadcrumbModule
          text1="Home"
          cta1="/"
          text2="Contact Us"
          cta2="/contactus"
          level="two"
        />
      </Box>
      <Grid container mt={4} columnSpacing={4} rowSpacing={4}>
        <Grid item md={6} xs={12}>
          <p>
            Pulpen Studio will always be ready to assist you regardless day or
            night. Reach us through below platforms
          </p>
          <p style={{ marginTop: "16px" }}>
            <EmailIcon /> Email Address :{" "}
            <Link
              target="__blank"
              style={{ textDecoration: "none", color: "#945c13" }}
              href="mailto:super-admin@pulpenstudio.com"
            >
              super-admin@pulpenstudio.com
            </Link>
          </p>
          <p style={{ marginTop: "16px" }}>
            <WhatsappIcon /> Phone / Whatsapp Number :{" "}
            <Link
              target="__blank"
              style={{ textDecoration: "none", color: "#945c13" }}
              href={`https://api.whatsapp.com/send?phone=601156271776&text=Hi%20%2C%20saya%20datang%20dari%20e-invite%20!%20#ContactUs%20`}
            >
              +6011-56271776
            </Link>
          </p>
          <p style={{ marginTop: "16px" }}>
            <InstagramIcon /> Instagram :{" "}
            <Link
              target="__blank"
              style={{ textDecoration: "none", color: "#945c13" }}
              href={`https://www.instagram.com/pulpenstudio/`}
            >
              www.instagram.com/pulpenstudio/
            </Link>
          </p>
          <p style={{ marginTop: "16px" }}>
            <TiktokIcon /> Tiktok :{" "}
            <Link
              target="__blank"
              style={{ textDecoration: "none", color: "#945c13" }}
              href={`https://www.tiktok.com/@pulpen.studio?_t=8g9RBZ72Bhi&_r=1`}
            >
              @pulpen.studio
            </Link>
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ boxShadow: "1px 1px 10px #909090", p: 4 }}>
            <p style={{ fontSize: "24px", fontWeight: "700" }}>Quick message</p>
            <Box mt={2}>
              <TextField
                InputLabelProps={{ shrink: true }}
                label="Name"
                value={name}
                variant="standard"
                onChange={(e) => setName(e.target.value)}
                sx={{ display: "block" }}
              />
              <TextField
                InputLabelProps={{ shrink: true }}
                value={message}
                label="Message"
                onChange={(e) => setMessage(e.target.value)}
                multiline
                variant="standard"
                fullWidth
                sx={{ mt: 2, display: "block" }}
              />
              <Link
                target="__blank"
                style={{ textDecoration: "none", color: "unset" }}
                href={joinedMessage()}
              >
                <Box
                  onClick={handleClick}
                  mt={3}
                  sx={{
                    border: "1px solid #eeece1",
                    borderRadius: "24px",
                    cursor: "pointer",
                    p: "8px 24px",
                    width: "fit-content",
                    "&:hover": {
                      background: "#eeece1",
                    },
                  }}
                >
                  Submit
                </Box>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </BoxContainer>
  );
};

export default ContactUsModule;
