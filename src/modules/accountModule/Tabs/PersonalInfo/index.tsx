import useGetUser from "@/data/useGetUser";
import { Box } from "@mui/material";

interface PersonalInfoProps {
  userId: any;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ userId }) => {
  const { data, isLoading } = useGetUser();
  // @ts-ignore
  const currUser = data?.find((i) => i.id === +userId) || "";

  if (isLoading) return null;

  return (
    <Box>
      <p style={{ fontSize: "20px", fontWeight: "700" }}>Personal Info</p>
      <p style={{ marginTop: "24px" }}>
        To update personal info, please reach out to our live support.
      </p>
      <Box mt={4}>
        <Box sx={{ display: "flex" }}>
          <p style={{ fontWeight: "700", width: "160px" }}>Name</p>
          <p>{currUser?.name}</p>
        </Box>
        <Box sx={{ display: "flex", mt: 2 }}>
          <p style={{ fontWeight: "700", width: "160px" }}>Contact Number</p>
          <p>{currUser?.contactNumber}</p>
        </Box>
        <Box sx={{ display: "flex", mt: 2 }}>
          <p style={{ fontWeight: "700", width: "160px" }}>Email address</p>
          <p>{currUser?.emailAddress}</p>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonalInfo;
