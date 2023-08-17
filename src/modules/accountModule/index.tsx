import { BoxContainer } from "@/components";
import useGetEinvite from "@/data/useGetEinvite";
import useGetUserId from "@/utils/useGetUserId";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import PersonalInfo from "./Tabs/PersonalInfo";
import MyWork from "./Tabs/MyWork";
import useCheckauth from "@/utils/useCheckAuth";

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
      <h1 style={{ fontSize: "32px" }}>Account</h1>
      <Grid container mt={4} spacing={4}>
        <Grid
          item
          xs={2}
          sx={{
            borderRight: "1px solid #DDD0C8",
            cursor: "pointer",
            fontWeight: "700",
            height: "100vh",
          }}
        >
          <Box mb={2} onClick={() => setTabSelection("PersonalInfo")}>
            <p style={{ fontSize: "24px", fontWeight: "700" }}>Personal Info</p>
          </Box>
          <Box mb={2} onClick={() => setTabSelection("MyWork")}>
            <p style={{ fontSize: "24px", fontWeight: "700" }}>My work</p>
          </Box>
        </Grid>
        <Grid item xs={10}>
          {tabSelection === "PersonalInfo" ? (
            <PersonalInfo {...{ userId }} />
          ) : tabSelection === "MyWork" ? (
            <MyWork {...{ userAssets }} />
          ) : (
            <PersonalInfo {...{ userId }} />
          )}
        </Grid>
      </Grid>
    </BoxContainer>
  );
};

export default AccountModule;
