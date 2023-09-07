import { Box, Grid } from "@mui/material";
import MapIcon from "../Icons/MapIcon";
import WhatsappIcon from "../Icons/WhatsappIcon";
import PenIcon from "../Icons/PenIcon";
import CommentPopup from "./CommentPopup";
import { useState } from "react";
import LocationPopup from "./LocationPopup";
import ContactPopup from "./ContactPopup";
import { locale } from "@/utils/Locale";
import RsvpIcon from "../Icons/RsvpIcon";
import RsvpPopup from "./RsvpPopup";

interface WidgetProps {
  language: string;
  iconColor?: string;
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

const Widget: React.FC<WidgetProps> = ({
  language,
  iconColor,
  color,
  location,
  contact,
}) => {
  const [commentPopup, setCommentPopup] = useState(false);
  const [locationPopup, setLocationPopup] = useState(false);
  const [contactPopup, setContactPopup] = useState(false);
  const [rsvpPopup, setRsvpPopup] = useState(false);

  function handleClick(item: string) {
    if (item === "rsvp") {
      setRsvpPopup(true);
      setCommentPopup(false);
      setLocationPopup(false);
      setContactPopup(false);
    }
    if (item === "comment") {
      setRsvpPopup(false);
      setCommentPopup(true);
      setLocationPopup(false);
      setContactPopup(false);
    }

    if (item === "location") {
      setRsvpPopup(false);
      setCommentPopup(false);
      setLocationPopup(true);
      setContactPopup(false);
    }

    if (item === "contact") {
      setRsvpPopup(false);
      setCommentPopup(false);
      setLocationPopup(false);
      setContactPopup(true);
    }
  }

  return (
    <Grid
      container
      sx={{
        background: color,
        boxShadow: `1px 1px 10px ${color}`,
        bottom: "0",
        color: iconColor || "unset",
        display: "flex",
        py: 2,
        position: "fixed",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center",
      }}
    >
      {rsvpPopup && (
        <RsvpPopup
          title={locale?.[language!]?.WIDGET_RSVP_TITLE!}
          {...{
            language,
            color,
            setRsvpPopup,
            setCommentPopup,
            setLocationPopup,
            setContactPopup,
          }}
        />
      )}
      {commentPopup && (
        <CommentPopup
          title={locale?.[language!]?.WIDGET_WISH_TITLE!}
          {...{
            language,
            color,
            setRsvpPopup,
            setCommentPopup,
            setLocationPopup,
            setContactPopup,
          }}
        />
      )}
      {locationPopup && (
        <LocationPopup
          title={locale?.[language!]?.WIDGET_LOCATION_TITLE!}
          {...{
            color,
            location,
            setRsvpPopup,
            setCommentPopup,
            setLocationPopup,
            setContactPopup,
          }}
        />
      )}
      {contactPopup && (
        <ContactPopup
          title={locale?.[language!]?.WIDGET_CONTACTUS_TITLE!}
          {...{
            color,
            contact,
            setRsvpPopup,
            setCommentPopup,
            setLocationPopup,
            setContactPopup,
          }}
        />
      )}
      <Grid item xs={3}>
        <Box onClick={() => handleClick("rsvp")}>
          <RsvpIcon />
        </Box>
      </Grid>
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
    </Grid>
  );
};

export default Widget;
