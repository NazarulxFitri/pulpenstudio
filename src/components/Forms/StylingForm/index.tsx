import type { FontFamilyConfig } from "@/pages/e-invite/edit/[eInviteId]";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MenuItem,
  TextField,
  styled,
} from "@mui/material";
import {
  ABeeZee,
  Amatic_SC,
  Bad_Script,
  Cinzel,
  Crimson_Pro,
  Great_Vibes,
  Poiret_One,
  Righteous,
  Satisfy,
  Rubik,
  Russo_One,
  Sawarabi_Gothic,
  Tenor_Sans,
  Monoton,
  Michroma,
  Rock_Salt,
} from "next/font/google";

const righteous = Righteous({ subsets: ["latin"], weight: "400" });
const rockSalt = Rock_Salt({ subsets: ["latin"], weight: "400" });
const michroma = Michroma({ subsets: ["latin"], weight: "400" });
const badScript = Bad_Script({ subsets: ["latin"], weight: "400" });
const abeezee = ABeeZee({ subsets: ["latin"], weight: "400" });
const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
});
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "900"] });
const amatic = Amatic_SC({ subsets: ["latin"], weight: ["400", "700"] });
const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });
const rubik = Rubik({ subsets: ["latin"], weight: ["300", "900"] });
const russo = Russo_One({ subsets: ["latin"], weight: "400" });
const sawarabi = Sawarabi_Gothic({ subsets: ["latin"], weight: "400" });
const poiretOne = Poiret_One({ subsets: ["latin"], weight: "400" });
const tenorSans = Tenor_Sans({ subsets: ["latin"], weight: "400" });
const monoton = Monoton({ subsets: ["latin"], weight: "400" });

interface StylingFormProps {
  accordionTitle: string;
  setFontFamily: (value: FontFamilyConfig) => void;
  setTextFontFamily: (value: FontFamilyConfig) => void;
  setBgColor: (value: string) => void;
  setHeaderImage: (value: string) => void;
  setBodyImage: (value: string) => void;
}

const Input = styled(TextField)(() => ({
  background: "#FFF",
  margin: "4px 0",
}));

const StylingForm: React.FC<StylingFormProps> = ({
  accordionTitle,
  setFontFamily,
  setTextFontFamily,
  setBgColor,
  setHeaderImage,
  setBodyImage,
}) => {
  const fontList = [
    { text: "Abeezee", value: abeezee },
    { text: "Amatic", value: amatic },
    { text: "Bad Script", value: badScript },
    { text: "Cinzel", value: cinzel },
    { text: "Crimson Pro", value: crimsonPro },
    { text: "Great Vibes", value: greatVibes },
    { text: "Poiret One", value: poiretOne },
    { text: "Righteous", value: righteous },
    { text: "Rock Salt", value: rockSalt },
    { text: "Rubik", value: rubik },
    { text: "Russo", value: russo },
    { text: "Satisfy", value: satisfy },
    { text: "Sawarabi", value: sawarabi },
    { text: "Tenor Sans", value: tenorSans },
    { text: "Monoton", value: monoton },
    { text: "Michroma", value: michroma },
  ];

  const headerImage = ["Flower", "Music", "Love"];
  const bodyImage = ["Love", "Thunder"];

  return (
    <Accordion sx={{ boxShadow: "1px 1px 8px #333" }}>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          background: "#333",
          color: "#FFF",
          fontWeight: "600",
        }}
      >
        <p>{accordionTitle}</p>
      </AccordionSummary>
      <AccordionDetails sx={{ m: 1, padding: "0" }}>
        <TextField
          fullWidth
          select
          label="Title Font Family"
          sx={{ m: "4px 0" }}
          // @ts-ignore
          onChange={(e) => setFontFamily(e.target.value)}
        >
          {fontList.map((font, idx) => (
            // @ts-ignore
            <MenuItem key={idx} value={font.value}>
              {font.text}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          select
          label="Text Font Family"
          sx={{ m: "4px 0" }}
          // @ts-ignore
          onChange={(e) => setTextFontFamily(e.target.value)}
        >
          {fontList.map((font, idx) => (
            // @ts-ignore
            <MenuItem key={idx} value={font.value}>
              {font.text}
            </MenuItem>
          ))}
        </TextField>
        <Input
          label="Background Color"
          fullWidth
          onChange={(e) => setBgColor(e.target.value)}
        />
        <TextField
          fullWidth
          select
          label="Header image"
          sx={{ m: "4px 0" }}
          // @ts-ignore
          onChange={(e) => setHeaderImage(e.target.value)}
        >
          {headerImage.map((item, idx) => (
            // @ts-ignore
            <MenuItem key={idx} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          select
          label="Body image"
          sx={{ m: "4px 0" }}
          // @ts-ignore
          onChange={(e) => setBodyImage(e.target.value)}
        >
          {bodyImage.map((item, idx) => (
            // @ts-ignore
            <MenuItem key={idx} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      </AccordionDetails>
    </Accordion>
  );
};

export default StylingForm;
