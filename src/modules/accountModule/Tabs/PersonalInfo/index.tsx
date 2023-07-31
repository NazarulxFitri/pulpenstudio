import useGetUser from "@/data/useGetUser";
import { Box } from "@mui/material";

interface PersonalInfoProps {
  userId: any;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ userId }) => {
  const { data, isLoading } = useGetUser();

  if (isLoading) return null;

  const currUser = data?.find((i) => i.id === +userId);

  console.log("xxx currUser", currUser);

  return (
    <>
      <h1>PersonalInfo</h1>
      <Box>
        <p>Name : {currUser?.name}</p>
        <p>Contact Number : {currUser?.contactNumber}</p>
        <p>Email address : {currUser?.emailAddress}</p>
      </Box>
    </>
  );
};

export default PersonalInfo;
