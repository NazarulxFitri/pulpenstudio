import {
  BoxContainer,
  CardSelection,
  ErrorMessage,
  ListNumber,
  Popup,
} from "@/components";
import Button from "@/components/Button";
import useAddTest from "@/data/useAddTest";
import useCheckWhiteSpace from "@/data/useCheckWhiteSpace";
import useCheckCapitalCase from "@/data/useCheckCapitalCase";
import { Box, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const EInviteModule = () => {
  const router = useRouter();
  const { layoutid } = router.query;
  const [itemName, setName] = useState<string>("");
  const [itemLayout, setItemLayout] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);
  const whiteSpace = useCheckWhiteSpace(itemName);
  const capitalCase = useCheckCapitalCase(itemName);
  const disabled = !!whiteSpace || !!capitalCase || !itemName;

  const cardData = [
    {
      name: "Fire Red",
      id: "001",
    },
    {
      name: "Ocean Blue",
      id: "002",
    },
    {
      name: "Leaf Green",
      id: "003",
    },
    {
      name: "Rock brown",
      id: "004",
    },
  ];

  function handleChange(e: any) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleClickButton() {
    if (disabled) return null;
    else {
      useAddTest(itemName, layoutid as string);
      setShowPopup(true);
    }
  }

  return (
    <BoxContainer>
      <h1>e-Invite</h1>
      <p style={{ marginTop: "16px" }}>
        Let's start create your e-Invite. Choose your selections below !
      </p>
      <Box>
        <Box display="flex" mt={2}>
          <ListNumber circle={true} number={1} />
          <h4>Enter your e-Invite name</h4>
        </Box>
        <Box mt={1}>
          <TextField
            sx={{ width: "40%" }}
            id="standard-basic"
            label="eg. kahwin-luwixmini , majlis-berbuka-puasa"
            variant="standard"
            onChange={handleChange}
          />
          {!!whiteSpace && (
            <ErrorMessage message="Please make sure no whitespace" />
          )}
          {!!capitalCase && (
            <ErrorMessage message="Please make sure no capital case" />
          )}
        </Box>
      </Box>
      <Box>
        <Box display="flex" mt={4}>
          <ListNumber circle={true} number={2} />
          <h4>Choose layout</h4>
        </Box>
        <Box display="flex" mt={1} gap={2}>
          {cardData.map((card) => (
            <CardSelection {...{ card }} />
          ))}
        </Box>
      </Box>
      <Box onClick={handleClickButton} sx={{ width: "fit-content" }}>
        <Button disabled={disabled}>Proceed</Button>
      </Box>
      {showPopup && (
        <Popup
          title="e-Invite"
          message="Congratulations ! You have successfully created your e-Invite."
          disclaimer="Thank you"
          {...{ itemName }}
        />
      )}
    </BoxContainer>
  );
};
export default EInviteModule;
