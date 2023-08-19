import CloseIcon from "@/components/Icons/CloseIcon";
import MapIcon from "@/components/Icons/MapIcon";
import PhoneIcon from "@/components/Icons/PhoneIcon";
import WhatsappIcon from "@/components/Icons/WhatsappIcon";
import { Box } from "@mui/material";

interface ContactPopupProps {
  title: string;
  color: string;
  contact: {
    number1: string;
    number2: string;
    name1: string;
    name2: string;
  };
  setCommentPopup: (value: boolean) => void;
  setLocationPopup: (value: boolean) => void;
  setContactPopup: (value: boolean) => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({
  title,
  color,
  contact,
  setCommentPopup,
  setLocationPopup,
  setContactPopup,
}) => {
  return (
    <Box
      sx={{
        background: "rgba(0,0,0,0.4)",
        bottom: "60px",
        width: "100%",
        height: "100vh",
        position: "absolute",
      }}
    >
      <Box
        sx={{
          background: "#FFF",
          bottom: "0",
          position: "absolute",
          height: "296px",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", p: 2 }}>
          <p style={{ fontSize: "24px", fontWeight: "700" }}>{title}</p>
          <Box
            sx={{ m: "0 0 0 auto" }}
            onClick={() => {
              setCommentPopup(false);
              setContactPopup(false);
              setLocationPopup(false);
            }}
          >
            <CloseIcon />
          </Box>
        </Box>
        <Box sx={{ textAlign: "left", p: "0 16px" }}>
          <Box sx={{ display: "flex" }}>
            <p>
              {contact?.name1} - {contact?.number1}
            </p>
            <Box sx={{ m: "0 0 0 auto" }}>
              <a
                style={{ marginRight: "16px", color: "unset" }}
                target="__blank"
                href={`https://api.whatsapp.com/send?phone=6${contact?.number1}&text=Hi%20%2C%20saya%20datang%20dari%20e-invite%20!%20`}
              >
                <WhatsappIcon />
              </a>
              <a
                style={{ color: "unset" }}
                target="__blank"
                href={`tel:6${contact?.number1}`}
              >
                <PhoneIcon size="20" />
              </a>
            </Box>
          </Box>
          <Box mt={2} sx={{ display: "flex" }}>
            <p>
              {contact?.name2} - {contact?.number2}
            </p>
            <Box sx={{ m: "0 0 0 auto" }}>
              <a
                style={{ marginRight: "16px", color: "unset" }}
                target="__blank"
                href={`https://api.whatsapp.com/send?phone=6${contact?.number2}&text=Hi%20%2C%20saya%20datang%20dari%20e-invite%20!%20`}
              >
                <WhatsappIcon />
              </a>
              <a
                style={{ color: "unset" }}
                target="__blank"
                href={`tel:6${contact?.number2}`}
              >
                <PhoneIcon size="20" />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPopup;
