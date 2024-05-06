import RsvpForm from "@/components/Forms/RsvpForm";
import CloseIcon from "@/components/Icons/CloseIcon";
import { locale } from "@/utils/Locale";
import { Box } from "@mui/material";

interface RsvpPopupProp {
  iconColor?: string;
  language: string;
  title: string;
  color: string;
  setRsvpPopup: (value: boolean) => void;
  setCommentPopup: (value: boolean) => void;
  setLocationPopup: (value: boolean) => void;
  setContactPopup: (value: boolean) => void;
}

const RsvpPopup: React.FC<RsvpPopupProp> = ({
  iconColor,
  language,
  title,
  color,
  setRsvpPopup,
  setCommentPopup,
  setLocationPopup,
  setContactPopup,
}) => {
  return (
    <Box
      sx={{
        bottom: "60px",
        width: "100%",
        height: "100vh",
        position: "absolute",
      }}
    >
      <Box
        className="animate__animated animate__backInUp"
        sx={{
          background: "#FFF",
          bottom: "0",
          position: "absolute",
          height: "520px",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", p: 2 }}>
          <p style={{ fontSize: "20px", fontWeight: "700", color: iconColor }}>
            {title}
          </p>
          <Box
            sx={{ m: "0 0 0 auto" }}
            onClick={() => {
              setRsvpPopup(false);
              setCommentPopup(false);
              setContactPopup(false);
              setLocationPopup(false);
            }}
          >
            <CloseIcon color="#333" />
          </Box>
        </Box>
        <Box sx={{ display: "flex", textAlign: "left", p: "0 16px" }}>
          <RsvpForm
            localeAttend={locale?.[language]?.WIDGET_RSVP_ATTEND_TEXT}
            localeNotAttend={locale?.[language]?.WIDGET_RSVP_NOTATTEND_TEXT}
            textAttendance={locale?.[language]?.WIDGET_RSVP_PLACEHOLDER_FIRST}
            textName={locale?.[language]?.WIDGET_RSVP_PLACEHOLDER_SECOND}
            textPhoneNumber={locale?.[language]?.WIDGET_RSVP_PLACEHOLDER_THIRD}
            textPax={locale?.[language]?.WIDGET_RSVP_PLACEHOLDER_FOURTH}
            textButton={locale?.[language]?.WIDGET_WISH_BUTTON}
            themeColor={color}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RsvpPopup;
