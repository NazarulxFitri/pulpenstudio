import { Layout1 } from "@/assets";

export default function useListLayout(
  firstIntro: string,
  secondIntro: string,
  title: string,
  date: string,
  day: string,
  time: string,
  location: string,
  descTitle: string,
  descOne: string,
  descTwo: string,
  descThree: string,
  infoTitle: string,
  infoAddress: string,
  infoAddressMap: string,
  infoFirstPhoneName: string,
  infoFirstPhoneNum: string,
  infoSecondPhoneName: string,
  infoSecondPhoneNum: string,
  wishTitleForm: string,
  wishDescForm: string,
  widgetBgColor: string,
  widgetColor: string
) {
  const listLayout = {
    "001": (
      <Layout1
        {...{
          firstIntro,
          secondIntro,
          title,
          date,
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
          widgetColor,
        }}
      />
    ),
  };

  return listLayout;
}
