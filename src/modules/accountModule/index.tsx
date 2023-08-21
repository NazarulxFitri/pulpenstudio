import { BoxContainer, CloseIcon, MenuIcon } from "@/components";
import useGetEinvite from "@/data/useGetEinvite";
import useGetUserId from "@/utils/useGetUserId";
import { Box, Grid, Tooltip } from "@mui/material";
import { useState } from "react";
import PersonalInfo from "././Tabs/PersonalInfo";
import MyWork from "././Tabs/MyWork";

interface AccountModuleProps {}

const AccountModule: React.FC<AccountModuleProps> = () => {
  const userId = useGetUserId();
  const { data: items } = useGetEinvite();
  const userAssets: any = [];
  const [tabSelection, setTabSelection] = useState("PersonalInfo");
  const [openPanel, setOpenPanel] = useState(true);

  //   @ts-ignore
  for (const key in items) {
    //   @ts-ignore
    if (items[key].userId === userId) userAssets.push(items[key]);
  }
  const needAttention = !!userAssets?.find((i: any) => i.paid === false);

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
          <Box mb={2} onClick={() => setTabSelection("PersonalInfo")}>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>Personal Info</p>
          </Box>
          <Box mb={2} onClick={() => setTabSelection("MyWork")}>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>
              My work
              {needAttention && (
                <Tooltip title="Need attention">
                  <span
                    style={{
                      background: "#DDD0C8",
                      color: "#333",
                      borderRadius: "24px",
                      fontSize: "12px",
                      padding: "4px 10px",
                      marginLeft: "4px",
                      verticalAlign: "super",
                    }}
                  >
                    i
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
