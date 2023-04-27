import type { FontFamilyConfig } from "@/pages/e-invite/[eInviteId]";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MenuItem,
  TextField,
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
const crimsonPro = Crimson_Pro({ subsets: ["latin"], weight: "400" });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const cinzel = Cinzel({ subsets: ["latin"], weight: "900" });
const amatic = Amatic_SC({ subsets: ["latin"], weight: "700" });
const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });
const rubik = Rubik({ subsets: ["latin"], weight: "900" });
const russo = Russo_One({ subsets: ["latin"], weight: "400" });
const sawarabi = Sawarabi_Gothic({ subsets: ["latin"], weight: "400" });
const poiretOne = Poiret_One({ subsets: ["latin"], weight: "400" });
const tenorSans = Tenor_Sans({ subsets: ["latin"], weight: "400" });
const monoton = Monoton({ subsets: ["latin"], weight: "400" });

interface StylingFormProps {
  accordionTitle: string;
  setFontFamily: (value: FontFamilyConfig) => void;
}

const StylingForm: React.FC<StylingFormProps> = ({
  accordionTitle,
  setFontFamily,
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
          id="outlined-select-currency"
          select
          label="Select Font Family"
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
      </AccordionDetails>
    </Accordion>
  );
};

export default StylingForm;
