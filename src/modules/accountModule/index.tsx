import { BoxContainer } from "@/components";
import useGetEinvite from "@/data/useGetEinvite";
import useGetUserId from "@/utils/useGetUserId";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import PersonalInfo from "./Tabs/PersonalInfo";
import MyWork from "./Tabs/MyWork";

interface AccountModuleProps {}

const AccountModule: React.FC<AccountModuleProps> = () => {
  const userId = useGetUserId();
  const { data: items } = useGetEinvite();
  const userAssets: any = [];

  const [tabSelection, setTabSelection] = useState("PersonalInfo");

  //   @ts-ignore
  for (const key in items) {
    //   @ts-ignore
    if (items[key].userId === userId) userAssets.push(items[key]);
  }

  return (
    <BoxContainer>
      <h1>Account</h1>
      <Grid container mt={4}>
        <Grid item xs={4} sx={{ cursor: "pointer" }}>
          <Box mb={2} onClick={() => setTabSelection("PersonalInfo")}>
            <h4>Personal Info</h4>
          </Box>
          <Box mb={2} onClick={() => setTabSelection("MyWork")}>
            <h4>My work</h4>
          </Box>
        </Grid>
        <Grid item xs={8}>
          {tabSelection === "PersonalInfo" ? (
            <PersonalInfo {...{ userId }} />
          ) : tabSelection === "MyWork" ? (
            <MyWork />
          ) : (
            <PersonalInfo {...{ userId }} />
          )}
        </Grid>
      </Grid>
    </BoxContainer>
  );
};

export default AccountModule;
