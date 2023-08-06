import { useRouter } from "next/router";
import { useState } from "react";
import {
  BoxContainer,
  CardSelection,
  ErrorMessage,
  ListNumber,
  Popup,
} from "@/components";
import Button from "@/components/Button";
import usePostAddEinvite from "@/data/postAddEinvite";
import useCheckWhiteSpace from "@/utils/useCheckWhiteSpace";
import useCheckCapitalCase from "@/utils/useCheckCapitalCase";
import { Box, TextField } from "@mui/material";
import useGetEinvite from "@/data/useGetEinvite";
import useCheckExistence from "@/utils/useCheckExistence";
import useGetUserId from "@/utils/useGetUserId";

const cardData = [
  {
    name: "light-pink",
    id: "001",
    src: "/media/cardSelection/light-pink.png",
  },
];

const EInviteModule = () => {
  const router = useRouter();
  const { layoutid } = router.query;
  const [itemName, setName] = useState<string>("");
  const { data } = useGetEinvite();
  const { action } = usePostAddEinvite(itemName, layoutid as string);
  const [showPopup, setShowPopup] = useState(false);
  // @ts-ignore
  const existence = useCheckExistence(data, itemName);
  const whiteSpace = useCheckWhiteSpace(itemName);
  const capitalCase = useCheckCapitalCase(itemName);
  const disabled =
    !!whiteSpace || !!capitalCase || !itemName || !layoutid || !!existence;

  const onSuccess = async () => {
    await action();
    setShowPopup(true);
  };

  function handleChange(e: any) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleClickButton() {
    if (disabled) return null;
    onSuccess();
  }

  return (
    <BoxContainer>
      <h1>e-Invite</h1>
      <p style={{ marginTop: "16px" }}>
        Let&apos;s start create your e-Invite. Choose your selections below !
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
          {!!existence && (
            <ErrorMessage message="Please try a different name. This name has been used" />
          )}
        </Box>
      </Box>
      <Box>
        <Box display="flex" mt={4}>
          <ListNumber circle={true} number={2} />
          <h4>Choose layout</h4>
        </Box>
        <Box display="flex" mt={2} gap={2}>
          {cardData.map((card, idx) => (
            <CardSelection {...{ card }} key={`Lumie | ${card} + ${idx}`} />
          ))}
        </Box>
      </Box>
      <Box onClick={handleClickButton} sx={{ width: "fit-content" }}>
        <Button disabled={disabled}>Proceed</Button>
      </Box>
      {!!showPopup && (
        <Popup
          title="e-Invite"
          message="Congratulations ! You have successfully created your e-Invite."
          disclaimer="Thank you"
          heightvh={true}
          {...{ itemName }}
        />
      )}
    </BoxContainer>
  );
};
export default EInviteModule;
