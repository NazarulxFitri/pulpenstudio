import { EInviteConfig } from "@/data/useGetEinvite";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface MyWorkProps {
  userAssets: EInviteConfig[];
}

const MyWork: React.FC<MyWorkProps> = ({ userAssets }) => {
  return (
    <Box>
      <p style={{ fontSize: "24px", fontWeight: "700" }}>My work</p>
      <Box mt={4}></Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "700" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "700" }}>Created At</TableCell>
              <TableCell sx={{ fontWeight: "700" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "700" }}>Url address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userAssets?.map((item, idx) => {
              return (
                <TableRow key={idx}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.createdAt}</TableCell>
                  <TableCell>
                    {item.paid ? "Paid" : "Pending Payment"}
                  </TableCell>
                  <TableCell>
                    <a
                      target="__blank"
                      href={`/e-invite/live/${item.name}`}
                    >{`/e-invite/live/${item.name}`}</a>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MyWork;
