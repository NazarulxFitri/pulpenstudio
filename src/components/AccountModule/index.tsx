import { BoxContainer } from "@/components";
import useGetEinvite from "@/data/useGetEinvite";
import useGetUserId from "@/utils/useGetUserId";
import { Box, Grid, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import PersonalInfo from "./Tabs/PersonalInfo";
import MyWork from "./Tabs/MyWork";
import { useRouter } from "next/router";

const AccountModule = () => {
  const router = useRouter();
  const qTabSelection = router.query.tab;
  const userId = useGetUserId();
  const { data: items } = useGetEinvite();
  const userAssets: any = [];
  const [tabSelection, setTabSelection] = useState<string | undefined>("");
  const [openPanel, setOpenPanel] = useState(true);

  useEffect(() => {
    setTabSelection(qTabSelection as string);
  }, [qTabSelection]);

  //   @ts-ignore
  for (const key in items) {
    //   @ts-ignore
    if (items[key].userId === userId) userAssets.push(items[key]);
  }
  const needAttention = userAssets?.filter((i: any) => i.paid === false);

  return (
    <BoxContainer>
      <h1 style={{ fontSize: "32px" }}>Account</h1>
      <Grid container mt={4} spacing={4}>
        <Grid
          onClick={() => {
            setOpenPanel(true);
          }}
          item
          xs={openPanel ? 8 : 2}
          md={2}
          sx={{
            borderRight: "1px solid #DDD0C8",
            color: { xs: openPanel ? "#333" : "#FFF", md: "unset" },
            cursor: "pointer",
            fontWeight: "700",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Box mb={2} onClick={() => setTabSelection("personalinfo")}>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>Personal Info</p>
          </Box>
          <Box mb={2} onClick={() => setTabSelection("mywork")}>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>
              My work
              {!!needAttention && (
                <Tooltip
                  title={`You have ${needAttention.length} items in pending payment status`}
                >
                  <span
                    style={{
                      background: "#DDD0C8",
                      color: "#333",
                      borderRadius: "24px",
                      fontWeight: "500",
                      fontSize: "12px",
                      padding: "4px 10px",
                      marginLeft: "4px",
                      verticalAlign: "super",
                    }}
                  >
                    {needAttention.length}
                  </span>
                </Tooltip>
              )}
            </p>
          </Box>
        </Grid>
        <Grid
          onClick={() => {
            setOpenPanel(false);
          }}
          item
          xs={openPanel ? 2 : 10}
          md={8}
        >
          {tabSelection === "personalinfo" ? (
            <PersonalInfo {...{ userId }} />
          ) : tabSelection === "mywork" ? (
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
