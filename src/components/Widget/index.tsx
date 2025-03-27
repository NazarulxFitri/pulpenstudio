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
import PhoneIcon from "../Icons/PhoneIcon";
import GiftIcon from "../Icons/GiftIcon";
import GiftPopup from "./GiftPopup";

interface WidgetProps {
  hidePhoneNumber?: boolean;
  showGift?: boolean;
  giftImage?: string;
  includePhoneNumber?: boolean;
  includeOrigin?: boolean;
  hideRsvp?: boolean;
  hideEdit?: boolean;
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
    number3?: string;
    number4?: string;
    name1: string;
    name2: string;
    name3?: string;
    name4?: string;
  };
  hideBoxShadow?: boolean;
}

const Widget: React.FC<WidgetProps> = ({
  showGift,
  giftImage,
  includePhoneNumber,
  includeOrigin,
  language,
  iconColor,
  color,
  location,
  contact,
  hideRsvp,
  hideEdit,
  hideBoxShadow,
  hidePhoneNumber,
}) => {
  const [commentPopup, setCommentPopup] = useState(false);
  const [locationPopup, setLocationPopup] = useState(false);
  const [contactPopup, setContactPopup] = useState(false);
  const [rsvpPopup, setRsvpPopup] = useState(false);
  const [giftPopup, setGiftPopup] = useState(false);

  const offsetSize = hideRsvp && hideEdit ? 3 : hideRsvp && !hideEdit ? 1.5 : 0;

  function handleClick(item: string) {
    if (item === "rsvp") {
      setRsvpPopup(true);
      setCommentPopup(false);
      setLocationPopup(false);
      setGiftPopup(false);
      setContactPopup(false);
    }
    if (item === "comment") {
      setRsvpPopup(false);
      setCommentPopup(true);
      setLocationPopup(false);
      setGiftPopup(false);
      setContactPopup(false);
    }

    if (item === "location") {
      setRsvpPopup(false);
      setCommentPopup(false);
      setLocationPopup(true);
      setGiftPopup(false);
      setContactPopup(false);
    }

    if (item === "contact") {
      setRsvpPopup(false);
      setCommentPopup(false);
      setLocationPopup(false);
      setGiftPopup(false);
      setContactPopup(true);
    }

    if (item === "gift") {
      setRsvpPopup(false);
      setCommentPopup(false);
      setLocationPopup(false);
      setContactPopup(false);
      setGiftPopup(true);
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
        zIndex: "2",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center",
        cursor: "pointer"
      }}
    >
      {rsvpPopup && (
        <RsvpPopup
          title={locale?.[language!]?.WIDGET_RSVP_TITLE!}
          {...{
            language,
            iconColor,
            color,
            setRsvpPopup,
            setCommentPopup,
            setLocationPopup,
            setContactPopup,
            setGiftPopup,
            includePhoneNumber,
            includeOrigin,
          }}
        />
      )}
      {commentPopup && (
        <CommentPopup
          title={locale?.[language!]?.WIDGET_WISH_TITLE!}
          {...{
            language,
            iconColor,
            color,
            setRsvpPopup,
            setCommentPopup,
            setLocationPopup,
            setContactPopup,
            setGiftPopup,
          }}
        />
      )}
      {locationPopup && (
        <LocationPopup
          title={locale?.[language!]?.WIDGET_LOCATION_TITLE!}
          {...{
            iconColor,
            color,
            location,
            setRsvpPopup,
            setCommentPopup,
            setLocationPopup,
            setContactPopup,
            setGiftPopup,
          }}
        />
      )}
      {contactPopup && (
        <ContactPopup
          title={locale?.[language!]?.WIDGET_CONTACTUS_TITLE!}
          {...{
            iconColor,
            color,
            contact,
            setRsvpPopup,
            setCommentPopup,
            setLocationPopup,
            setContactPopup,
            setGiftPopup,
          }}
        />
      )}
      {giftPopup && (
        <GiftPopup
          title={"Gift"}
          giftImage={giftImage!}
          {...{
            iconColor,
            color,
            setRsvpPopup,
            setCommentPopup,
            setLocationPopup,
            setContactPopup,
            setGiftPopup,
          }}
        />
      )}
      {!hideRsvp && (
        <Grid item xs>
          <Box onClick={() => handleClick("rsvp")}>
            <RsvpIcon />
          </Box>
        </Grid>
      )}
      {!hideEdit && (
        <Grid item xs>
          <Box onClick={() => handleClick("comment")}>
            <PenIcon />
          </Box>
        </Grid>
      )}
      <Grid item xs>
        <Box onClick={() => handleClick("location")}>
          <MapIcon />
        </Box>
      </Grid>
      {!hidePhoneNumber && (
        <Grid item xs>
          <Box onClick={() => handleClick("contact")}>
            <PhoneIcon />
          </Box>
        </Grid>
      )}
      {showGift && (
        <Grid item xs>
          <Box onClick={() => handleClick("gift")}>
            <GiftIcon />
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default Widget;
