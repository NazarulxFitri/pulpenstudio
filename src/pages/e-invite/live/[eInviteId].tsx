// @ts-nocheck
import useGetEinvite from "@/data/useGetEinvite";
import useListLayout from "@/data/useListLayout";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";

interface EinviteLiveProps {}

const EinviteLive: React.FC<EinviteLiveProps> = () => {
  const router = useRouter();
  const eInviteId = router.query.eInviteId;
  const { data } = useGetEinvite(eInviteId as string);
  const item = data?.data;

  const firstIntro = item?.firstIntro;
  const secondIntro = item?.secondIntro;
  const title = item?.title;
  const date = item?.date;
  const countdownDate = item?.countdownDate;
  const day = item?.day;
  const time = item?.time;
  const location = item?.location;
  const descTitle = item?.descTitle;
  const descOne = item?.descOne;
  const descTwo = item?.descTwo;
  const descThree = item?.descThree;
  const infoTitle = item?.infoTitle;
  const infoAddress = item?.infoAddress;
  const infoAddressMap = item?.infoAddressMap;
  const infoFirstPhoneName = item?.infoFirstPhoneName;
  const infoFirstPhoneNum = item?.infoFirstPhoneNum;
  const infoSecondPhoneName = item?.nfoSecondPhoneName;
  const infoSecondPhoneNum = item?.infoSecondPhoneNum;
  const wishTitleForm = item?.wishTitleForm;
  const wishDescForm = item?.wishDescForm;
  const widgetBgColor = item?.widgetBgColor;
  const widgetColor = item?.widgetColor;

  const listLayout = useListLayout(
    firstIntro,
    secondIntro,
    title,
    date,
    countdownDate,
    day,
    time,
    location,
    descTitle,
    descOne,
    descTwo,
    descThree,
    infoTitle,
    infoAddress,
    infoAddressMap,
    infoFirstPhoneName,
    infoFirstPhoneNum,
    infoSecondPhoneName,
    infoSecondPhoneNum,
    wishTitleForm,
    wishDescForm,
    widgetBgColor,
    widgetColor
  );

  return (
    <Grid item xs={12}>
      {listLayout[data?.layout]}
    </Grid>
  );
};

export default EinviteLive;
