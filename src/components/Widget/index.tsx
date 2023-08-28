import { Box, Grid } from "@mui/material";
import MapIcon from "../Icons/MapIcon";
import WhatsappIcon from "../Icons/WhatsappIcon";
import PenIcon from "../Icons/PenIcon";
import CommentPopup from "./CommentPopup";
import { useState } from "react";
import LocationPopup from "./LocationPopup";
import ContactPopup from "./ContactPopup";
import { locale } from "@/utils/Locale";

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

  function handleClick(item: string) {
    if (item === "comment") {
      setCommentPopup(true);
      setLocationPopup(false);
      setContactPopup(false);
    }

    if (item === "location") {
      setCommentPopup(false);
      setLocationPopup(true);
      setContactPopup(false);
    }

    if (item === "contact") {
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
      {commentPopup && (
        <CommentPopup
          title={locale?.[language!]?.WIDGET_WISH_TITLE!}
          {...{
            language,
            color,
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
            setCommentPopup,
            setLocationPopup,
            setContactPopup,
          }}
        />
      )}

      <Grid item xs={4}>
        <Box onClick={() => handleClick("comment")}>
          <PenIcon />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box onClick={() => handleClick("location")}>
          <MapIcon />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box onClick={() => handleClick("contact")}>
          <WhatsappIcon />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Widget;
