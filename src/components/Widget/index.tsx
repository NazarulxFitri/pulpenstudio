import { Box, Grid } from "@mui/material";
import ChatIcon from "../Icons/ChatIcon";
import MapIcon from "../Icons/MapIcon";
import WhatsappIcon from "../Icons/WhatsappIcon";
import PenIcon from "../Icons/PenIcon";
import CommentPopup from "./CommentPopup";
import { useState } from "react";
import LocationPopup from "./LocationPopup";
import ContactPopup from "./ContactPopup";
import MusicIcon from "../Icons/MusicIcon";
import MusicPopup from "./MusicPopup";

interface WidgetProps {
  color: string;
  location: {
    text: string;
    mapUrl: string;
  };
  contact: {
    number1: string;
    number2: string;
    name1: string;
    name2: string;
  };
}

const Widget: React.FC<WidgetProps> = ({ color, location, contact }) => {
  const [commentPopup, setCommentPopup] = useState(false);
  const [locationPopup, setLocationPopup] = useState(false);
  const [contactPopup, setContactPopup] = useState(false);
  const [musicPopup, setMusicPopup] = useState(false);
  const [musicStart, setMusicStart] = useState(false);

  window.onscroll = function (e) {
    setMusicStart(true);
  };

  window.onclick = function (e) {
    setMusicStart(true);
  };

  function handleClick(item: string) {
    if (item === "comment") {
      setCommentPopup(true);
      setLocationPopup(false);
      setContactPopup(false);
      setMusicPopup(false);
    }

    if (item === "location") {
      setCommentPopup(false);
      setLocationPopup(true);
      setContactPopup(false);
      setMusicPopup(false);
    }

    if (item === "contact") {
      setCommentPopup(false);
      setLocationPopup(false);
      setContactPopup(true);
      setMusicPopup(false);
    }

    if (item === "music") {
      setCommentPopup(false);
      setLocationPopup(false);
      setContactPopup(false);
      setMusicPopup(true);
    }
  }

  return (
    <Grid
      container
      sx={{
        background: "#FDE6E8",
        boxShadow: `1px 1px 10px ${color}`,
        bottom: "0",
        display: "flex",
        py: 2,
        position: "fixed",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center",
      }}
    >
      {commentPopup && (
        <CommentPopup
          title="Ucapan"
          {...{
            color,
            setCommentPopup,
            setLocationPopup,
            setContactPopup,
            setMusicPopup,
          }}
        />
      )}
      {locationPopup && (
        <LocationPopup
          title="Lokasi"
          {...{
            color,
            location,
            setCommentPopup,
            setLocationPopup,
            setContactPopup,
            setMusicPopup,
          }}
        />
      )}
      {contactPopup && (
        <ContactPopup
          title="Hubungi kami"
          {...{
            color,
            contact,
            setCommentPopup,
            setLocationPopup,
            setContactPopup,
            setMusicPopup,
          }}
        />
      )}
      {musicStart && (
        <MusicPopup
          title="Muzik"
          {...{
            color,
            musicPopup,
            setCommentPopup,
            setLocationPopup,
            setContactPopup,
            setMusicPopup,
          }}
        />
      )}
      <Grid item xs={3}>
        <Box onClick={() => handleClick("comment")}>
          <PenIcon />
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box onClick={() => handleClick("location")}>
          <MapIcon />
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box onClick={() => handleClick("contact")}>
          <WhatsappIcon />
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box onClick={() => handleClick("music")}>
          <MusicIcon />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Widget;
